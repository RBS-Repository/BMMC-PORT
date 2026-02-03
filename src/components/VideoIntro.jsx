import React, { useState, useRef } from 'react';
import './VideoIntro.css';
import demoVideo from '/intro.mp4';

const VideoIntro = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="video-section">
            <div className="video-container-full">
                <div className="video-wrapper-cinematic" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src={demoVideo}
                        loop
                        playsInline
                        className="cinema-video"
                    />

                    {!isPlaying && (
                        <div className="play-overlay">
                            <span className="play-text">PLAY REEL</span>
                        </div>
                    )}
                </div>

                <div className="video-caption">
                    <span>Visualizing Complexity</span>
                    <span className="separator">/</span>
                    <span>2026 Showreel</span>
                </div>
            </div>
        </section>
    );
};

export default VideoIntro;