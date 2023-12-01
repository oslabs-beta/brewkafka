import React, { useState, useEffect } from 'react';
import beanCarryGif from '/client/assets/Untitled_Artwork.gif';
import { useNavigate } from 'react-router-dom';
import '/client/style.css';
import KafkaService from '/client/services/KafkaService';


const Loginpage = () => {

const [inputValue, setInputValue] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted: ', inputValue);
    try {
        console.log('KafkaService js file:', KafkaService)
      await KafkaService.addKafkaServer(inputValue);
      console.log('did this work please let it work');
    
    //   await KafkaService.reloadPrometheusConfig();
      console.log('Prometheus reloaded');
      navigate('/dashboards')
    } catch (error) {
      console.log('Error with Kafka config updating: ' + error);
    }
    // setIsSubmitted(true)
  };

//   useEffect(() => {
//     console.log('enter useEffect', isSubmitted)
//     if (isSubmitted) {
//         navigate('/dashboards');
//     }
//   }, [isSubmitted]);  
// const navigate = useNavigate();

// const handleSubmit = async () => {
//     console.log('Submitted: ', inputValue);
//     try {
//         await KafkaService.addKafkaServer(inputValue);
//         console.log('Updated server successfully');
//         await KafkaService.reloadPrometheusConfig();
//         console.log('Prometheus reloaded');
//         await navigate('/dashboards');
//       } catch (error) {
//         console.log('Error with Kafka config updating: ' + error);
//       }
// }

    return (
        <>
        {/* <InputBar/> */}
        <div className="beanCarryGif">
            <img src={beanCarryGif} alt="bean carry gif" id="bcgif"></img>
            <form className="formBox">
                <label htmlFor="kafkaURL">Enter Kafka URL:</label><br></br>
                <input type="text" value={inputValue} onChange={handleChange} id="inputBox"></input><br></br>
                <button onClick={handleSubmit} className="connectButton">
                    Connect
                </button>
            </form>
        </div>
        </>
    )      
}

export default Loginpage;