import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { companyKnowledge, botPersonality } from '../data/companyKnowledge';
import './ChatBot.css';

const ChatBot = () => {
    const [messages, setMessages] = useState(() => {
        // Try to load messages from localStorage on initial render
        const savedMessages = localStorage.getItem('chatHistory');
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(() => {
        // Check if user has been greeted before
        return localStorage.getItem('hasGreeted') === 'true';
    });
    const chatContainerRef = useRef(null);
    const [workingModel, setWorkingModel] = useState("gemini-1.5-pro");
    const [isTyping, setIsTyping] = useState(false);
    
    // Local keyword-based responses
    const mockResponses = {
        greeting: [
            "Hello! How can I help you with BMMC's services today?", 
            "Hi there! I'm Gi-bot. What would you like to know about BMMC?",
            "Welcome! I'm here to answer your questions about our services and team."
        ],
        about: [
            "BMMC (Budaque Multi Media Creations) is a professional full-stack development team based in Rodriguez, Rizal, Philippines. We create beautiful, functional web applications with clean code and intuitive user experiences."
        ],
        services: [
            "Our services include: responsive website development, e-commerce platforms, custom web applications, content management systems, and modern technology integration. What specific service are you interested in?"
        ],
        team: [
            "Our team includes Jasper Rubis (Lead Developer), Jhanell De Mesa (Backend Developer), and Sobel Anne (Frontend Developer). Each brings unique expertise to create innovative digital solutions."
        ],
        contact: [
            "You can reach us at budaquecreations@gmail.com or call +63 976 292 6882. We're available for online consultations and would be happy to discuss your project requirements."
        ],
        pricing: [
            "Our pricing varies based on project complexity and requirements. We provide custom quotes after understanding your specific needs. For a detailed quote, please contact us at budaquecreations@gmail.com."
        ],
        location: [
            "We're based in Rodriguez, Rizal, Philippines, but we work with clients worldwide through remote collaboration."
        ],
        thanks: [
            "You're welcome! Is there anything else I can help you with?",
            "Happy to help! Let me know if you have other questions about BMMC."
        ],
        default: [
            "Thanks for your message! For more specific information about your project needs, please contact our team directly at budaquecreations@gmail.com.",
            "I appreciate your interest! Our team would be happy to discuss this in more detail. Please reach out to us at budaquecreations@gmail.com."
        ]
    };

    // Add mobile detection at the top of the component
    const isMobile = window.innerWidth <= 768;

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    // Save messages to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);

    // Save greeting state to localStorage
    useEffect(() => {
        localStorage.setItem('hasGreeted', hasGreeted.toString());
    }, [hasGreeted]);

    useEffect(() => {
        // Add initial welcome message when component mounts
        if (!hasGreeted) {
            setMessages([{
                text: "👋 Hello! I'm Gi-bot. How may I assist you today with any questions you have about BMMC? Please feel free to ask in any language you're comfortable with.",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            }]);
            setHasGreeted(true);
        }
        scrollToBottom();
    }, [hasGreeted]);

    const clearConversation = () => {
        setMessages([]);
        setHasGreeted(false);
        localStorage.removeItem('chatHistory');
        localStorage.removeItem('hasGreeted');
    };

    const generateResponse = async (userInput) => {
        try {
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
            
            let modelToUse = workingModel;
            
            try {
                const model = genAI.getGenerativeModel({ 
                    model: modelToUse,
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 800,
                    }
                });
                
                // Format previous messages for context
                const previousMessages = messages.slice(-5).map(msg => 
                    `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`
                ).join('\n');
                
                // Include chat history in the prompt and use the companyKnowledge and botPersonality
                const prompt = `
${botPersonality}

Company Knowledge:
${companyKnowledge}

Previous conversation:
${previousMessages}

Current user question: ${userInput}

Reply directly to the user's question, maintaining conversation context. If they write in another language, respond in that language. Be concise but helpful.
`;

                const result = await model.generateContent(prompt);
                return result.response.text();
            } catch (error) {
                if (import.meta.env.DEV) {
                    console.error(`Error with ${modelToUse}:`, error);
                }
                
                if (modelToUse === "gemini-1.5-pro") {
                    modelToUse = "gemini-1.5-flash";
                    setWorkingModel(modelToUse);
                    
                    const fallbackModel = genAI.getGenerativeModel({ 
                        model: modelToUse,
                        generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
                    });
                    
                    const simplePrompt = `
${botPersonality}

Brief Company Info:
BMMC (Budaque Multi Media Creations) is a professional full-stack development team.
Team: Jasper Rubis (Jek, Lead), Jhanell De Mesa (Backend), Sobel Anne (Frontend)
Contact: budaquecreations@gmail.com

Reply to: "${userInput}"
`;
                    const fallbackResult = await fallbackModel.generateContent(simplePrompt);
                    return fallbackResult.response.text();
                }
                
                throw error;
            }
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error("All Gemini models failed:", error);
            }
            return "I'm currently having trouble connecting to my knowledge base. Please email us at budaquecreations@gmail.com for immediate assistance.";
        }
    };

    // Helper function to get a random response from a category
    const getRandomResponse = (category) => {
        const responses = mockResponses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = {
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);
        setIsTyping(true);

        try {
            const botResponse = await generateResponse(inputMessage);
            const botMessage = {
                text: botResponse,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
            setIsTyping(false);
        }
    };

    useEffect(() => {
        // Don't automatically check models, rely on preset model
    }, []);

    // Add a useEffect to handle scrolling when typing indicator appears/disappears
    useEffect(() => {
        if (isTyping || isLoading) {
            scrollToBottom();
        }
    }, [isTyping, isLoading]);

    return (
        <motion.section 
            className="chatbot-section" 
            id="chatbot"
            initial={!isMobile && { opacity: 0, y: 50 }}
            whileInView={!isMobile && { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={!isMobile && { 
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            <motion.div 
                className="section-heading desktop-only"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <h1>Chat with Gi-bot</h1>
                <p>Our AI assistant is here to help answer your questions</p>
            </motion.div>

            <motion.div 
                className="chatbot-container"
                initial={!isMobile && { opacity: 0, scale: 0.95 }}
                whileInView={!isMobile && { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={!isMobile && { 
                    delay: 0.5,
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >
                <motion.div 
                    className="chatbot-header"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    <div className="bot-avatar">
                        <img 
                            src="./gibot.png" 
                            alt="Gi-bot Avatar" 
                            className="avatar-image"
                        />
                    </div>
                    <div className="header-text">
                        <h2>Gi-bot</h2>
                        <div className="status">
                            <span className="status-dot"></span>
                            Online
                        </div>
                    </div>
                    <button 
                        onClick={clearConversation} 
                        className="clear-chat-btn"
                        title="Clear conversation"
                    >
                        🗑️
                    </button>
                </motion.div>
                
                <motion.div 
                    className="chat-messages" 
                    ref={chatContainerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
               
                >
                    <AnimatePresence>
                        {messages.map((message, index) => (
                            <motion.div 
                                key={index} 
                                className={`message ${message.sender}-message`}
                                initial={!isMobile && { 
                                    opacity: 0, 
                                    x: message.sender === 'user' ? 20 : -20,
                                    y: 20 
                                }}
                                animate={!isMobile && { 
                                    opacity: 1, 
                                    x: 0,
                                    y: 0 
                                }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={!isMobile && { duration: 0.3 }}
                            >
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <span className="timestamp">{message.timestamp}</span>
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                            <motion.div 
                                className="message bot-message"
                                initial={{ opacity: 0, y: 20 }}
                      
                            >
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </motion.div>
                        )}
                        {isTyping && (
                            <motion.div 
                                className="message bot-message typing-indicator"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            >
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.form 
                    onSubmit={handleSubmit} 
                    className="chat-input-form"
                    initial={!isMobile && { opacity: 0, y: 20 }}
                    animate={!isMobile && { opacity: 1, y: 0 }}
                    transition={!isMobile && { delay: 1.2, duration: 0.4 }}
                >
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send'} 
                        {!isLoading && <span>➤</span>}
                    </button>
                </motion.form>
            </motion.div>
        </motion.section>
    );
};

export default ChatBot;