import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = ({children}:any) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e:any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>{children}</div>
    );
};

export default CustomCursor;
