import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const PixelTransition = ({
    firstContent,
    secondContent,
    gridSize = 7,
    pixelColor = 'currentColor',
    animationStepDuration = 0.3,
    once = false,
    aspectRatio = '100%',
    className = '',
    style = {}
}) => {
    const containerRef = useRef(null);
    const pixelGridRef = useRef(null);
    const activeRef = useRef(null);
    const delayedCallRef = useRef(null);

    const [isActive, setIsActive] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Robust touch detection running once on mount
        const checkTouch = () => {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
        };
        setIsTouch(checkTouch());
    }, []);

    useEffect(() => {
        const pixelGridEl = pixelGridRef.current;
        if (!pixelGridEl) return;

        pixelGridEl.innerHTML = '';

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement('div');
                pixel.classList.add('pixelated-image-card__pixel');
                pixel.classList.add('absolute', 'hidden');
                pixel.style.backgroundColor = pixelColor;

                const size = 100 / gridSize;
                pixel.style.width = `${size}%`;
                pixel.style.height = `${size}%`;
                pixel.style.left = `${col * size}%`;
                pixel.style.top = `${row * size}%`;

                pixelGridEl.appendChild(pixel);
            }
        }
    }, [gridSize, pixelColor]);

    const animatePixels = (activate) => {
        setIsActive(activate);

        const pixelGridEl = pixelGridRef.current;
        const activeEl = activeRef.current;
        if (!pixelGridEl || !activeEl) return;

        const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
        if (!pixels.length) return;

        gsap.killTweensOf(pixels);
        if (delayedCallRef.current) {
            delayedCallRef.current.kill();
        }

        gsap.set(pixels, { display: 'none' });

        const totalPixels = pixels.length;
        const staggerDuration = animationStepDuration / totalPixels;

        gsap.to(pixels, {
            display: 'block',
            duration: 0,
            stagger: {
                each: staggerDuration,
                from: 'random'
            }
        });

        delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
            activeEl.style.display = activate ? 'block' : 'none';
            activeEl.style.pointerEvents = activate ? 'none' : '';
        });

        gsap.to(pixels, {
            display: 'none',
            duration: 0,
            delay: animationStepDuration,
            stagger: {
                each: staggerDuration,
                from: 'random'
            }
        });
    };

    const handleEnter = () => {
        if (!isActive) animatePixels(true);
    };
    const handleLeave = () => {
        if (isActive && !once) animatePixels(false);
    };
    const handleClick = () => {
        if (!isActive) animatePixels(true);
        else if (isActive && !once) animatePixels(false);
    };

    return (
        <div
            ref={containerRef}
            className={`
        relative
        overflow-hidden
        ${className}
      `}
            style={style}
            onMouseEnter={!isTouch ? handleEnter : undefined}
            onMouseLeave={!isTouch ? handleLeave : undefined}
            onClick={isTouch ? handleClick : undefined}
            onFocus={!isTouch ? handleEnter : undefined}
            onBlur={!isTouch ? handleLeave : undefined}
            tabIndex={0}
        >
            <div style={{ paddingTop: aspectRatio }} />

            <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
                {firstContent}
            </div>

            <div
                ref={activeRef}
                className="absolute inset-0 w-full h-full z-[2]"
                style={{ display: 'none' }}
                aria-hidden={!isActive}
            >
                {secondContent}
            </div>

            <div ref={pixelGridRef} className="absolute inset-0 w-full h-full pointer-events-none z-[3]" />

            {/* Mobile Touch Hint - visible when touch detected and item is inactive */}
            {isTouch && !isActive && (
                <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 pointer-events-none animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                    <span className="text-white text-xs font-mono uppercase tracking-wider">Tap</span>
                </div>
            )}
        </div>
    );
};

export default PixelTransition;
