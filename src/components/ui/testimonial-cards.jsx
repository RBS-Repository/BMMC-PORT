"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

export function TestimonialCard({ handleShuffle, testimonial, position, item }) {
    const dragRef = React.useRef(0);
    const isFront = position === "front";

    return (
        <motion.div
            style={{
                zIndex: position === "front" ? "4" : position === "middle" ? "3" : position === "back" ? "2" : "1",
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            animate={{
                rotate: position === "front" ? "-4deg" : position === "middle" ? "2deg" : position === "back" ? "6deg" : "10deg",
                x: position === "front" ? "0%" : position === "middle" ? "12%" : position === "back" ? "24%" : "36%",
                y: position === "front" ? "0%" : position === "middle" ? "4%" : position === "back" ? "8%" : "12%",
                opacity: position === "hidden" ? 0 : 1,
                scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9,
            }}
            drag={true}
            dragElastic={0.35}
            dragListener={isFront}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            onDragStart={(e, info) => {
                dragRef.current = info ? info.point.x : e.clientX;
            }}
            onDragEnd={(e, info) => {
                const clientX = info ? info.point.x : e.clientX;
                if (dragRef.current - clientX > 80 || clientX - dragRef.current > 80) {
                    handleShuffle();
                }
                dragRef.current = 0;
            }}
            transition={{ duration: 0.35 }}
            className={`t-review-card shadow-2xl shadow-black/50 select-none !transition-none rounded-[1.25rem] !border-white/10 !bg-[#111111] !justify-center overflow-hidden ${isFront ? "cursor-grab active:cursor-grabbing hover:!translate-x-0" : ""
                }`}
        >
            <div className="t-card-accent" style={{ height: isFront ? '100%' : '0px' }}></div>
            <p className="t-text z-10 relative !text-[1.6rem] !leading-[1.5]">"{testimonial}"</p>
            <div className="t-author z-10 relative mt-6">
                <div className="t-author-info">
                    <h4>{item.name}</h4>
                    <p>{item.role} @ {item.company}</p>
                </div>
            </div>

            {isFront && (
                <div className="absolute bottom-6 right-8 flex items-center gap-2 text-white/40 text-sm font-medium animate-bounce z-20">
                    <span className="tracking-widest uppercase text-xs">Swipe</span>
                    <Hand className="w-4 h-4 -rotate-45" />
                </div>
            )}
        </motion.div>
    );
};
