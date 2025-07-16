import React, { useEffect, useState } from 'react';

const Textanimation = () => {
    const fullText = "Battle of Instrument";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[index]);
                setIndex(index + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="neon-container">
            <h1 className="neon-text">
                <span className="highlight">
                    {text}
                </span>
                <span className="cursor"></span>
            </h1>
        </div>
    );
};

export default Textanimation;
