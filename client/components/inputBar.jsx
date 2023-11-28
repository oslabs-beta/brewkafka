import React, { useState } from 'react';

const InputBar = () =>{

    //handle change
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        setInputValue (e.target.value);
    };

    //handle submit
    const handleSubmit = () => {
        console.log('Submitted:', inputValue);
    }
    return (
      <div className="input-bar-container">
        <label>
            Connect to your Kafka cluster   
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            />
        </label>
        <button onClick={handleSubmit}>Connect!</button>
    </div>
    );
};

export default InputBar;