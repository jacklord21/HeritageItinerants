"use client";

import React, {useEffect, useState} from "react";
import './ring.css';

export default function Ring() {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [isCentered, setIsCentered] = useState(true);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    useEffect(() => {
        let animationFrameId: number;

        const handleWheel = (event: any) => {
            cancelAnimationFrame(animationFrameId);

            const deltaY = event.deltaY;
            const deltaX = event.deltaX;

            // Sposta il rettangolo verso l'angolo in alto a sinistra quando la rotellina viene mossa verso di te
            // e verso l'angolo in alto a destra quando viene mossa nel senso opposto
            const newScrollX = scrollX - deltaY * 0.08;
            const newScrollY = scrollY - deltaY * 0.08;

            const animationStep = () => {
                const step = deltaY * 0.08;

                setScrollX((prevScrollX) => prevScrollX + step);
                setScrollY((prevScrollY) => prevScrollY + step);

                if (deltaY < 0 && (scrollX > newScrollX || scrollY > newScrollY)) {
                    animationFrameId = requestAnimationFrame(animationStep);
                } else if (isCentered && scrollX === 0 && scrollY === 0) {
                    // Se il rettangolo è al centro, spostalo verso l'angolo in alto opposto
                    const angle = Math.atan2(startY - window.innerHeight / 2, startX - window.innerWidth / 2);
                    const distance = Math.min(window.innerWidth / 2, window.innerHeight / 2);
                    const targetX = Math.cos(angle) * distance;
                    const targetY = Math.sin(angle) * distance;

                    setScrollX(targetX);
                    setScrollY(targetY);

                    setIsCentered(false);
                } else {
                    setIsCentered(false);
                }
            };

            if (isCentered) {
                setStartX(event.clientX);
                setStartY(event.clientY);
            }

            animationFrameId = requestAnimationFrame(animationStep);
        };

        document.addEventListener('wheel', handleWheel);

        return () => {
            document.removeEventListener('wheel', handleWheel);
            cancelAnimationFrame(animationFrameId);
        };
    }, [scrollX, scrollY, isCentered, startX, startY]);

    return (
        <div
            className="rectContainer"
            style={{
                transform: `translate(${scrollX}px, ${scrollY}px) scale(1, 1)`,
            }}
        >
            {[...Array(12)].map((_, index) => (
                <div key={index} className="rect"></div>
            ))}
        </div>
    );
}