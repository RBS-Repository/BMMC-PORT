import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(4);
    const [totalPages, setTotalPages] = useState(1);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
    const [showAll, setShowAll] = useState(false);

    // Expanded testimonials array
    const testimonials = [
        {
            id: 1,
            name: "Grace Espiritu",
            role: "E-commerce Owner",
            image: "https://www.shutterstock.com/image-photo/happy-young-confident-asian-business-260nw-2347736311.jpg",
            text: "Grabe, sobrang ganda ng website ko ngayon! Hindi ko inexpect na ganito kaganda ang magiging outcome. Dati basic lang talaga website namin, pero ngayon professional na professional tingnan!",
            rating: 5,
            company: "GE Boutique",
            date: "2023-05-15"
        },
        {
            id: 2,
            name: "Tina Ignacio",
            role: "Restaurant Manager",
            image: "https://images.unsplash.com/photo-1708585919491-d089c4e5fe79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZpbGlwaW5vfGVufDB8fDB8fHww",
            text: "Ang dami na naming customers ngayon kasi ang smooth ng ordering system. Dati nahihirapan kami mag-track ng orders, ngayon automated na lahat. Worth it talaga!",
            rating: 5,
            company: "Taste Haven",
            date: "2023-06-22"
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Startup Founder",
            image: "https://mir-s3-cdn-cf.behance.net/user/276/849cb1229584.63ea25b8b288c.jpg",
            text: "BMMC helped us bring our vision to life. Their understanding of modern web technologies and design trends is exceptional.",
            rating: 5,
            company: "TechNova",
            date: "2023-07-10"
        },
        {
            id: 4,
            name: "Paolo Mendoza",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1578942025297-433b80a70874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZpbGlwaW5vfGVufDB8fDB8fHww",
            text: "Super responsive ng team sa lahat ng requests namin. Kahit mga biglaan naming changes, inaacommodate nila. Tapos ang bilis pa mag-reply sa mga concerns!",
            rating: 5,
            company: "DigitalEdge",
            date: "2023-08-05"
        },
        {
            id: 5,
            name: "Maria Santos",
            role: "CEO at Santos Handicrafts",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJeczJ_8tP_TuzmcnLsg2btIgV6dEC-F8aA&s",
            text: "Napakaganda ng bagong website namin! Mas madali na para sa mga customers na makita at bilhin ang aming mga produkto. Salamat sa mahusay na serbisyo!",
            rating: 5,
            company: "InnovateX",
            date: "2023-09-12"
        },
        {
            id: 6,
            name: "Carlos Dela Cruz",
            role: "",
            image: "https://www.shutterstock.com/image-photo/side-view-profile-outline-africanamerican-600nw-2063111012.jpg",
            text: "Dahil sa bagong online booking system, tumaas ang efficiency ng aming operations. Hindi na namin kailangang mano-manong i-process ang bawat booking. Highly recommended!",
            rating: 5,
            company: "",
            date: "2023-10-05"
        },
        {
            id: 7,
            name: "David Wong",
            role: "IT Director",
            image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "As someone with technical background, I was impressed by the clean code and performance optimizations. The website loads incredibly fast and the SEO implementations have boosted our search rankings significantly.",
            rating: 4,
            company: "DataPlus",
            date: "2023-11-20"
        },
        {
            id: 8,
            name: "Jasmine Reyes",
            role: "Small Business Owner",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGHgR8fEKMwVAsRKgQUXLEaBjOotJuYqvOg&s",
            text: "Ang ganda ng website na ginawa nila para sa aking coffee shop! Madali lang mag-navigate at ang daming customers ang nagsasabi na user-friendly daw. Sulit na sulit ang investment ko sa kanila.",
            rating: 5,
            company: "Brew Haven",
            date: "2023-12-15"
        }
    ];

    // Effect to calculate total pages
    useEffect(() => {
        setTotalPages(Math.ceil(testimonials.length / testimonialsPerPage));
    }, [testimonials.length, testimonialsPerPage]);

    // Effect for structured data injection
    useEffect(() => {
        // Create Schema.org structured data for testimonials
        const testimonialsStructuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": testimonials.map((testimonial, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": testimonial.rating,
                        "bestRating": "5"
                    },
                    "author": {
                        "@type": "Person",
                        "name": testimonial.name
                    },
                    "reviewBody": testimonial.text,
                    "datePublished": testimonial.date,
                    "itemReviewed": {
                        "@type": "Organization",
                        "name": "Budaque Multi Media Creations",
                        "alternateName": "BMMC"
                    }
                }
            }))
        };

        // Add or update structured data script tag
        let script = document.getElementById('testimonials-structured-data');
        if (!script) {
            script = document.createElement('script');
            script.id = 'testimonials-structured-data';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(testimonialsStructuredData);

        // Clean up when component unmounts
        return () => {
            const scriptToRemove = document.getElementById('testimonials-structured-data');
            if (scriptToRemove) document.head.removeChild(scriptToRemove);
        };
    }, []);

    // Handle page navigation
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Toggle view mode between grid and carousel
    const toggleViewMode = () => {
        setViewMode(viewMode === 'grid' ? 'carousel' : 'grid');
    };

    // Toggle show all testimonials
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    // Get current testimonials based on pagination
    const getCurrentTestimonials = () => {
        if (showAll) return testimonials;
        
        const indexOfLastTestimonial = currentPage * testimonialsPerPage;
        const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
        return testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const testimonialVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Pagination display logic
    const renderPaginationControls = () => {
        const pageNumbers = [];
        
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`page-number ${currentPage === i ? 'active' : ''}`}
                    aria-label={`Go to page ${i}`}
                    aria-current={currentPage === i ? 'page' : undefined}
                >
                    {i}
                </button>
            );
        }
        
        return (
            <div className="pagination-controls" role="navigation" aria-label="Testimonials pagination">
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className="page-nav prev-page"
                    aria-label="Previous page"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="page-numbers">
                    {pageNumbers}
                </div>
                <button 
                    onClick={nextPage} 
                    disabled={currentPage === totalPages}
                    className="page-nav next-page"
                    aria-label="Next page"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        );
    };

    return (
        <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
            <div className="testimonials-container">
                <motion.div 
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="testimonials-heading">Client Testimonials</h2>
                    <div className="section-line" aria-hidden="true"></div>
                    <p className="section-subtitle">What Our Clients Say About Us</p>
                </motion.div>

                <div className="testimonials-actions">
                    <div className="view-options">
                        <button 
                            className={`view-option-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                            aria-pressed={viewMode === 'grid'}
                            aria-label="View as grid"
                        >
                            <i className="fas fa-th-large" aria-hidden="true"></i> Grid
                        </button>
                        <button 
                            className={`view-option-btn ${viewMode === 'carousel' ? 'active' : ''}`}
                            onClick={() => setViewMode('carousel')}
                            aria-pressed={viewMode === 'carousel'}
                            aria-label="View as carousel"
                        >
                            <i className="fas fa-sliders-h" aria-hidden="true"></i> Carousel
                        </button>
                    </div>
                </div>

                {viewMode === 'grid' ? (
                    <AnimatePresence mode="wait">
                <motion.div 
                            key={`grid-${currentPage}`}
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0 }}
                            role="list"
                            aria-label="Client testimonials"
                        >
                            {getCurrentTestimonials().map((testimonial) => (
                        <motion.div 
                                    key={testimonial.id}
                            className="testimonial-item"
                            variants={testimonialVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                                    role="listitem"
                                    itemScope
                                    itemType="https://schema.org/Review"
                        >
                            <div className="testimonial-content">
                                <motion.div 
                                    className="testimonial-header"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="testimonial-image">
                                        <motion.img 
                                            src={testimonial.image} 
                                                    alt={`${testimonial.name}'s profile`}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                    loading="lazy"
                                                    itemProp="image"
                                        />
                                    </div>
                                    <div className="testimonial-info">
                                                <h4 itemProp="author">{testimonial.name}</h4>
                                                <p>
                                                    <span itemProp="jobTitle">{testimonial.role}</span>
                                                    {testimonial.company && (
                                                        <span> at <span itemProp="organization">{testimonial.company}</span></span>
                                                    )}
                                                </p>
                                        <motion.div 
                                            className="rating"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                                    itemProp="reviewRating" 
                                                    itemScope 
                                                    itemType="https://schema.org/Rating"
                                        >
                                                    <meta itemProp="ratingValue" content={testimonial.rating} />
                                                    <meta itemProp="bestRating" content="5" />
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <motion.span 
                                                    key={i} 
                                                    className="star"
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                                            aria-hidden="true"
                                                >
                                                    ★
                                                </motion.span>
                                            ))}
                                                    <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                                                </motion.div>
                                                {testimonial.date && (
                                                    <meta itemProp="datePublished" content={testimonial.date} />
                                                )}
                                            </div>
                                </motion.div>
                                <motion.div 
                                    className="testimonial-body"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                            <span className="quote-mark" aria-hidden="true">"</span>
                                            <p className="testimonial-text" itemProp="reviewBody">{testimonial.text}</p>
                                            <span className="quote-mark closing" aria-hidden="true">"</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="testimonials-carousel" aria-label="Testimonial carousel">
                        <button 
                            className="carousel-arrow prev"
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            aria-label="Previous testimonial"
                        >
                            <i className="fas fa-chevron-left" aria-hidden="true"></i>
                        </button>
                        
                        <div className="carousel-container">
                            <AnimatePresence mode="wait">
                                {getCurrentTestimonials().slice(0, 1).map((testimonial) => (
                                    <motion.div 
                                        key={`carousel-${testimonial.id}`}
                                        className="carousel-item"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        itemScope
                                        itemType="https://schema.org/Review"
                                    >
                                        <div className="carousel-content">
                                            <div className="testimonial-image large">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={`${testimonial.name}'s profile`}
                                                    loading="lazy"
                                                    itemProp="image"
                                                />
                                            </div>
                                            <div className="testimonial-details">
                                                <div className="rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                                    <meta itemProp="ratingValue" content={testimonial.rating} />
                                                    <meta itemProp="bestRating" content="5" />
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <span key={i} className="star" aria-hidden="true">★</span>
                                                    ))}
                                                    <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                                                </div>
                                                <p className="carousel-quote" itemProp="reviewBody">"{testimonial.text}"</p>
                                                <div className="carousel-author">
                                                    <h4 itemProp="author">{testimonial.name}</h4>
                                                    <p>
                                                        <span itemProp="jobTitle">{testimonial.role}</span>
                                                        {testimonial.company && (
                                                            <span> at <span itemProp="organization">{testimonial.company}</span></span>
                                                        )}
                                                    </p>
                                                </div>
                                                {testimonial.date && (
                                                    <meta itemProp="datePublished" content={testimonial.date} />
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        
                        <button 
                            className="carousel-arrow next"
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            aria-label="Next testimonial"
                        >
                            <i className="fas fa-chevron-right" aria-hidden="true"></i>
                        </button>
                        
                        <div className="carousel-indicators">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-indicator ${currentPage === index + 1 ? 'active' : ''}`}
                                    onClick={() => goToPage(index + 1)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    aria-current={currentPage === index + 1 ? 'true' : 'false'}
                                ></button>
                            ))}
                        </div>
                    </div>
                )}

                {viewMode === 'grid' && !showAll && testimonials.length > testimonialsPerPage && (
                    <div className="pagination-container">
                        {renderPaginationControls()}
                        
                        <motion.div 
                            className="view-more-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <button 
                                className="view-more-button"
                                onClick={toggleShowAll}
                                aria-expanded={showAll}
                                aria-controls="testimonials-grid"
                            >
                                View All Testimonials
                            </button>
                        </motion.div>
                    </div>
                )}

                {viewMode === 'grid' && showAll && (
                    <motion.div 
                        className="view-more-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button 
                            className="view-more-button"
                            onClick={toggleShowAll}
                            aria-expanded={showAll}
                            aria-controls="testimonials-grid"
                        >
                            View Less
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Testimonials; 