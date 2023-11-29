import React from 'react';
import beanCarryGif from '/client/assets/Untitled_Artwork.gif';
import { useNavigate } from 'react-router-dom';
import '/client/style.css';

const Loginpage = () => {

const navigate = useNavigate();

const handleSubmit = () => {
    navigate('/dashboards');
}

    return (
        <div className="beanCarryGif">
            <img src={beanCarryGif} alt="bean carry gif" id="bcgif"></img>
            <form className="formBox">
                <label htmlFor="kafkaURL">Enter Kafka URL:</label><br></br>
                <input type="text" id="inputBox"></input><br></br>
                <button onClick={handleSubmit} className="connectButton">
                    Connect
                </button>
            </form>
        </div>
    )
}

export default Loginpage;