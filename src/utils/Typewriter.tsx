import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterText?: number;
}

const TypewriterComponent: React.FC<TypewriterProps> = ({ 
  texts, 
  delay = 1500, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  delayAfterText = 2000
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayAfterText);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        return;
      }

      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
    } else {
      const targetText = texts[currentTextIndex];
      
      if (currentText === targetText) {
        setIsPaused(true);
        return;
      }
      
      timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    currentText, 
    currentTextIndex, 
    isDeleting, 
    isPaused, 
    texts, 
    typingSpeed, 
    deletingSpeed, 
    delayAfterText
  ]);

  return (
    <div className="inline-block">
      <span>{currentText}</span>
      <span className="border-r-2 border-teal-600 dark:border-teal-400 animate-pulse">&nbsp;</span>
    </div>
  );
};

export default TypewriterComponent;