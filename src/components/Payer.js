import React from 'react'

const Payer = ( { nextStep, cancelpayment }) => {
    return (
    <form className='form-wrap'>
        <div className='priceTag'>
            <p>Item Name</p>
            <p>Price</p>
        </div>
        <div className='dataScience'>
            <p>Data science and usability</p>
            <p>50,000</p>
        </div>
        <div className='shippingRate'>
            <p className='shipping'>Shipping</p>
            <p>0.00</p>
        </div>
        <div className='totalRate'>
            <p className='total'>Total</p>
            <p className='totalNumber'>50,000</p>
        </div>
        {/* <img src={Line}></img> */}
        {/* <input className='inputTotal' placeholder='Total' type="text" name='name' /> */}
        <div>
            <button className='pay' onClick={nextStep}>Pay</button>
            <button className='cancelpayment' onClick={cancelpayment}>Cancel Payment</button>
        </div>
    </form>

    );
 
}

export default Payer