'use client'

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
    text: string;
    onComplete: () => void;
    className?: string;
}

export default function TypingAnimation({ text, onComplete, className = '' }: TypingAnimationProps) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, Math.random() * 20 + 30); // Random delay between 30-50ms for fast typing

            return () => clearTimeout(timeout);
        } else {
            onComplete();
        }
    }, [currentIndex, text, onComplete]);

    return (
        <div 
            className={className}
            role="status"
            aria-live="polite"
            aria-label="Typing message"
        >
            {displayText}
        </div>
    );
}
