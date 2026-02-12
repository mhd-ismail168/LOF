import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickSpark = ({
    sparkColor = '#fff',
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 0.4,
    easing = "easeOut",
    extraScale = 1.0,
}) => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const { clientX, clientY } = e;
            const newSparks = Array.from({ length: sparkCount }).map((_, i) => {
                const angle = (i / sparkCount) * 360;
                return {
                    id: Date.now() + i,
                    x: clientX,
                    y: clientY,
                    angle,
                };
            });

            setSparks((prev) => [...prev, ...newSparks]);

            // Cleanup sparks after animation
            setTimeout(() => {
                setSparks((prev) => prev.filter((s) => !newSparks.find((ns) => ns.id === s.id)));
            }, duration * 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [sparkCount, duration]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <AnimatePresence>
                {sparks.map((spark) => (
                    <Spark
                        key={spark.id}
                        spark={spark}
                        color={sparkColor}
                        size={sparkSize}
                        radius={sparkRadius}
                        duration={duration}
                        easing={easing}
                        extraScale={extraScale}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

const Spark = ({ spark, color, size, radius, duration, easing, extraScale }) => {
    return (
        <motion.span
            initial={{ scale: 0, opacity: 1, x: spark.x, y: spark.y }}
            animate={{
                scale: [0, 1 * extraScale, 0],
                opacity: [1, 1, 0],
                x: spark.x + Math.cos((spark.angle * Math.PI) / 180) * (radius * 5), // Adjust multiplier for distance
                y: spark.y + Math.sin((spark.angle * Math.PI) / 180) * (radius * 5),
            }}
            transition={{ duration: duration, ease: easing }}
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'block',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)', // Center the spark on coordinate
            }}
        />
    );
};

export default ClickSpark;
