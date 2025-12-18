import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './LiveChat.css';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);
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
    const [unreadCount, setUnreadCount] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [workingModel, setWorkingModel] = useState("gemini-1.5-pro");
    // Add state for attention animation
    const [showAttention, setShowAttention] = useState(false);
    
    const messagesEndRef = useRef(null);
    const chatInputRef = useRef(null);
    const attentionTimerRef = useRef(null);

    // Local keyword-based responses
    const mockResponses = {
        greeting: [
            "Hello! How can I assist you with BMMC's web development or design services today?", 
            "Hi there! I'm Gi-bot, BMMC's digital assistant. What would you like to know about our services?",
            "Welcome to BMMC! I'm here to answer your questions about our web development, design and technology solutions."
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

    // Add mobile detection
    const isMobile = window.innerWidth <= 768;

    // Function to trigger random attention animations
    const scheduleRandomAttention = () => {
        // Only schedule if chat is not open
        if (!isOpen) {
            // Random time between 15-45 seconds
            const randomTime = Math.floor(Math.random() * (45000 - 15000) + 15000);
            
            // Clear any existing timer
            if (attentionTimerRef.current) {
                clearTimeout(attentionTimerRef.current);
            }
            
            // Set a new timer
            attentionTimerRef.current = setTimeout(() => {
                setShowAttention(true);
                
                // Hide the attention effect after 3 seconds
                setTimeout(() => {
                    setShowAttention(false);
                    // Schedule the next attention grab
                    scheduleRandomAttention();
                }, 3000);
            }, randomTime);
        }
    };

    // Initialize the random attention grabber
    useEffect(() => {
        // Initial wait before first animation (8-20 seconds)
        const initialWait = Math.floor(Math.random() * (20000 - 8000) + 8000);
        
        const initialTimer = setTimeout(() => {
            // Don't show if chat is already open
            if (!isOpen) {
                setShowAttention(true);
                
                setTimeout(() => {
                    setShowAttention(false);
                    scheduleRandomAttention();
                }, 3000);
            } else {
                scheduleRandomAttention();
            }
        }, initialWait);
        
        return () => {
            clearTimeout(initialTimer);
            if (attentionTimerRef.current) {
                clearTimeout(attentionTimerRef.current);
            }
        };
    }, []);

    // Stop attention animations when chat is opened
    useEffect(() => {
        if (isOpen) {
            setShowAttention(false);
            if (attentionTimerRef.current) {
                clearTimeout(attentionTimerRef.current);
            }
        } else {
            // Restart the random attention cycle when chat is closed
            scheduleRandomAttention();
        }
    }, [isOpen]);

    // Save messages to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);

    // Save greeting state to localStorage
    useEffect(() => {
        localStorage.setItem('hasGreeted', hasGreeted.toString());
    }, [hasGreeted]);

    // Auto welcome message when opening with no messages
    useEffect(() => {
        if (isOpen && !hasGreeted && messages.length === 0) {
            setMessages([{
                text: "👋 Hello! I'm Gi-bot, BMMC's AI assistant. How can I help you with your web development or design needs today? Feel free to ask in any language you're comfortable with.",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            }]);
            setHasGreeted(true);
        }
    }, [isOpen, hasGreeted, messages.length]);

    // Scroll to bottom of messages
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTo({
                top: messagesEndRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && chatInputRef.current) {
            chatInputRef.current.focus();
        }
    }, [isOpen]);

    // Reset unread count when opening chat
    useEffect(() => {
        if (isOpen) {
            setUnreadCount(0);
        }
    }, [isOpen]);

    // Add a useEffect to handle scrolling when typing indicator appears/disappears
    useEffect(() => {
        if (isTyping || isLoading) {
            scrollToBottom();
        }
    }, [isTyping, isLoading]);

    const clearConversation = () => {
        setMessages([]);
        setHasGreeted(false);
        localStorage.removeItem('chatHistory');
        localStorage.removeItem('hasGreeted');
    };

    // Toggle enlarged chat window
    const toggleEnlarged = () => {
        setIsEnlarged(prev => !prev);
        // Give the chat container time to resize, then scroll to bottom
        setTimeout(scrollToBottom, 300);
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
                
                // Include chat history in the prompt
                const prompt = `
You are Gi-bot, the AI assistant for BMMC (Budaque Multi Media Creations). Respond in a friendly, helpful manner.

Company Information:
- BMMC is a full-stack development team based in Rodriguez, Rizal, Philippines
- Team: Jasper Rubis (Lead), Jhanell De Mesa (Backend), Sobel Anne (Frontend)
- Services: Web development, mobile apps, custom software, e-commerce, content management systems
- Contact: budaquecreations@gmail.com or +63 976 292 6882
- We offer competitive pricing based on project requirements

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
                    
                    const simplePrompt = `You are Gi-bot, BMMC's assistant. Reply to: "${userInput}"`;
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
            
            // Add a slight delay for more natural feeling
            const responseLength = botResponse.length;
            const typingDelay = Math.min(2000, Math.max(500, responseLength * 10));
            await new Promise(resolve => setTimeout(resolve, typingDelay));
            
            const botMessage = {
                text: botResponse,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            };
            
            setMessages(prev => [...prev, botMessage]);
            
            // Increment unread count if chat is closed
            if (!isOpen) {
                setUnreadCount(prev => prev + 1);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
            setIsTyping(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(prev => !prev);
        if (!isOpen) {
            setUnreadCount(0);
        }
    };

    return (
        <>
            {/* Chat toggle button */}
            <motion.button 
                className={`chat-button ${showAttention ? 'attention-grabber' : ''}`}
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={showAttention ? 
                    { 
                        scale: [1, 1.1, 1, 1.1, 1],
                        boxShadow: [
                            "0 5px 15px rgba(0, 243, 255, 0.3)",
                            "0 5px 25px rgba(0, 243, 255, 0.8)",
                            "0 5px 15px rgba(0, 243, 255, 0.3)",
                            "0 5px 25px rgba(0, 243, 255, 0.8)",
                            "0 5px 15px rgba(0, 243, 255, 0.3)"
                        ]
                    } : {}
                }
                transition={{ duration: 2 }}
            >
                {isOpen ? (
                    <span className="chat-close">×</span>
                ) : (
                    <>
                        <span className="chat-icon">🤖</span>
                        <span className="chat-text">Chat with Gi-bot</span>
                        {unreadCount > 0 && (
                            <motion.span 
                                className="unread-badge"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            >
                                {unreadCount}
                            </motion.span>
                        )}
                    </>
                )}
            </motion.button>
            
            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className={`chat-container ${isEnlarged ? 'enlarged' : ''}`}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="chat-header">
                            <div className="agent-info">
                                <div className="agent-avatar">
                                    <img src="./gibot.png" alt="Gi-bot Avatar" />
                                    <span className="status-dot"></span>
                                </div>
                                <div className="agent-details">
                                    <h3>Gi-bot</h3>
                                    <p>Web Assistant</p>
                                </div>
                            </div>
                            <div className="header-actions">
                                <button 
                                    onClick={toggleEnlarged} 
                                    className="enlarge-btn"
                                    title={isEnlarged ? "Minimize chat" : "Enlarge chat"}
                                >
                                    {isEnlarged ? '🗗' : '⛶'}
                                </button>
                                <button 
                                    onClick={clearConversation} 
                                    className="clear-chat-btn"
                                    title="Clear conversation"
                                >
                                    🗑️
                                </button>
                                <button className="close-button" onClick={toggleChat}>×</button>
                            </div>
                        </div>
                        
                        <div className="chat-messages" ref={messagesEndRef}>
                            <AnimatePresence>
                                {messages.map((message, index) => (
                                    <motion.div 
                                        key={index} 
                                        className={`message ${message.sender}-message`}
                                        initial={{ 
                                            opacity: 0, 
                                            x: message.sender === 'user' ? 20 : -20,
                                            y: 20 
                                        }}
                                        animate={{ 
                                            opacity: 1, 
                                            x: 0,
                                            y: 0 
                                        }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="message-content">
                                            <p>{message.text}</p>
                                            <span className="timestamp">{message.timestamp}</span>
                                        </div>
                                    </motion.div>
                                ))}
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
                        </div>

                        <form className="chat-input-container" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message here..."
                                ref={chatInputRef}
                                disabled={isLoading || isTyping}
                            />
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={!inputMessage.trim() || isLoading || isTyping}
                            >
                                {isLoading || isTyping ? 
                                    <div className="button-loader"></div> :
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                            </motion.button>
                        </form>
                        
                        <div className="chat-footer">
                            <p>BMMC Full-Stack Development • Powered by AI</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LiveChat; 