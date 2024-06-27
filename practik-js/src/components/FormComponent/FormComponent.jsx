// src/components/FormComponent.jsx
import React, { useRef } from 'react';

const FormComponent = () => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
