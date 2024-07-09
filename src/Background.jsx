import React, { useEffect, useRef } from 'react';
import './Background.css';

function Background(props) {
    const starsContainerRef = useRef(null);

    useEffect(() => {
        const starsContainer = starsContainerRef.current;
        if (!starsContainer) return;

        const numStars = 100;

        function createStar() {
            const stars = document.createElement('div');
            Object.assign(stars.style, {
                position: 'absolute',
                width: '2px',
                height: '2px',
                backgroundColor: 'white',
                borderRadius: '50%',
                opacity: 0.8,
                animation: 'twinkle 2s infinite',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
            });
            starsContainer.appendChild(stars);
        }

        for (let i = 0; i < numStars; i++) {
            createStar();
        }
    }, []);

    return (
        <div>
            <div className='background'>
                <div className='moon'></div>
                <div className='stars' ref={starsContainerRef}></div>
                {props.children}
            </div>
        </div>
    );
}

export default Background;
