import React, { useState } from 'react';

const Message = ({ number }) => {
    if (number > 0) return <p>Число больше нуля</p>;
    else if (number < 0) return <p>Число меньше нуля</p>;
    else return <p>Число равно нулю</p>;
};

const InputNumber = () => {
    const [number, setNumber] = useState(0);

    const handleChange = (event) =>  setNumber(Number(event.target.value));

    return (
        <div>
            <input type="number" value={number} onChange={handleChange} />
            <Message number={number} />
        </div>
    );
};

export default InputNumber;
