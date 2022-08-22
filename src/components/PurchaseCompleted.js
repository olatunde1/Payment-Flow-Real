import React from 'react'
import tick from "../components/img/tick.png";

const PurchaseCompleted = ({ nextStep, cancelpayment }) => {
    return (
        <div className='form-wrap'>
            <div className='success'>
                <img src={tick} alt="sample"></img>
            </div>
            <p className='purchaseCompleted'>Purchase Completed</p>
            <p className='emailDetails'>Please check your email for details concerning this transaction</p>
           <button className='returnHome' onClick={cancelpayment}>Return Home</button>
        </div>
 
    );
 
}

export default PurchaseCompleted