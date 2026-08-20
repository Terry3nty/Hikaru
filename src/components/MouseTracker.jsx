import React, { useEffect, useState } from 'react';

const MouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px) and (pointer: fine)');
        const updateAvailability = () => setIsEnabled(mediaQuery.matches);

        updateAvailability();
        mediaQuery.addEventListener('change', updateAvailability);

        return () => mediaQuery.removeEventListener('change', updateAvailability);
    }, []);

    useEffect(() => {
        if (!isEnabled) return undefined;
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isEnabled]);

    if (!isEnabled) return null;

    return (
        <>
            {/* Main trailing orb */}
            <div
                className="mouse-tracker fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-300 ease-out"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 2 : 1})`,
                    background: 'radial-gradient(circle, rgba(234, 88, 12, 0.8) 0%, rgba(234, 88, 12, 0) 70%)',
                    boxShadow: isHovering ? '0 0 20px 10px rgba(234, 88, 12, 0.4)' : 'none',
                }}
            />
            {/* Subtle larger trailing glow */}
            <div
                className="mouse-tracker fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-40 mix-blend-screen transition-all duration-700 ease-out opacity-40 blur-xl"
                style={{
                    transform: `translate(${position.x - 64}px, ${position.y - 64}px) scale(${isHovering ? 1.5 : 1})`,
                    background: 'rgba(234, 88, 12, 0.15)',
                }}
            />
        </>
    );
};

export default MouseTracker;
