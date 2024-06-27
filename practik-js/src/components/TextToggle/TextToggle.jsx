import React, { useState } from 'react';

const TextToggle = () => {
    const text = "This is the first sentence. Here is the second sentence. This is the third sentence.";
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => setIsExpanded(!isExpanded);

    const firstSentence = text.split('. ')[0] + '.';

    return (
        <div>
            <p>{isExpanded ? text : firstSentence}</p>
            <button onClick={toggleText}>
                {isExpanded ? 'Показать меньше' : 'Показать подробнее'}
            </button>
        </div>
    );
};

export default TextToggle;
