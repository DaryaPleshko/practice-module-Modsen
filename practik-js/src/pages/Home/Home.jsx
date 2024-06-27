import React from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';
import TextToggle from '../../components/TextToggle/TextToggle';
import InputNumber from '../../components/InputNumber/InputNumber';

const HomePage = () => {
    return (
        <div>
            <h1>TASK-1</h1>
            <FormComponent />
            <h1>TASK-2</h1>
            <TextToggle />
            <h1>TASK-3</h1>
            <InputNumber />
        </div>
    );
};

export default HomePage;