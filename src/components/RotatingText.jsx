import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-100%", opacity: 0 },
    transitionDuration = 0.5,
    staggerDuration = 0.05,
    rotationInterval = 3000,
    mainClassName = "",
    staggerFrom = "last", // "first", "last", "center", "random"
    splitLevel = "characters", // "words", "characters"
    element = "span"
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, rotationInterval);
        return () => clearInterval(intervalId);
    }, [texts, rotationInterval]);

    const currentText = texts[index];

    return (
        <span
            className={`relative inline-flex overflow-hidden ${mainClassName}`}
            style={{ verticalAlign: "bottom" }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="relative inline-flex"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    aria-label={currentText}
                >
                    {currentText.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block whitespace-pre"
                            variants={{
                                initial: initial,
                                animate: {
                                    ...animate,
                                    transition: {
                                        ...transition,
                                        delay: i * staggerDuration
                                    }
                                },
                                exit: {
                                    ...exit,
                                    transition: {
                                        ...transition,
                                        delay: (currentText.length - 1 - i) * staggerDuration
                                    }
                                }
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default RotatingText;
