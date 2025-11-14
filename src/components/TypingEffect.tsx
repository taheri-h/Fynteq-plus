import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  loopDelay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  speed = 100, 
  className = '',
  loopDelay = 10000 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length && isTyping) {
      // Text is complete, wait for loop delay then reset
      setIsTyping(false);
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsTyping(true);
      }, loopDelay);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text, speed, isTyping, loopDelay]);

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
};

export default TypingEffect;

