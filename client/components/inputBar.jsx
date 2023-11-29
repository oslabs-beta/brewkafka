import React, { useState } from 'react';
import KafkaService from '../services/KafkaService';

const InputBar = () => {
  //handle change
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  // handle submit
  const handleSubmit = async () => {
    console.log('Submitted: ', inputValue);
    try {
      await KafkaService.addKafkaServer(inputValue);
      //   console.log('Updated server successfully');
      await KafkaService.reloadPrometheusConfig();
      //   console.log('Prometheus reloaded');
    } catch (error) {
      console.log('Error with Kafka config updating: ' + error);
    }
  };
  return (
    <div className='input-bar-container'>
      <label>
        Connect to your Kafka cluster
        <input type='text' value={inputValue} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Connect!</button>
    </div>
  );
};

export default InputBar;
