import React, { useState, useEffect } from 'react';

const InputBar = () =>{

    //handle change
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        setInputValue (e.target.value);
    };

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted:', inputValue);
    }
    return (
      <form method="post" className="input-bar-container">
        <label>
            Connect to your Kafka cluster   
            <input
            type="text"
            name="inputValue"
            value={inputValue}
            onChange={handleChange}
            />
        </label>
        <button type="submit" formAction="/connect">Connect!</button>
    </form>
    );
};

export default InputBar