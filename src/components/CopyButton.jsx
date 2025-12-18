import React, { useState } from 'react';
import './CopyButton.css';

const CopyButton = ({ text, type }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="copy-wrapper" onClick={handleCopy}>
            <span className="copy-text">{text}</span>
            {showTooltip && (
                <div className="tooltip">
                    Copied!
                </div>
            )}
        </div>
    );
};

export default CopyButton; 