import React from 'react'
import { useFormik } from 'formik';


const Billing = ({ nextStep, cancelpayment }) => {
    const billingInfo = {
        cardType: '',
        nameOnCard: '',
        cardNumber: '',
        expDate: '',
        CVV: '',
    }

    const validate = values => {
        const errors = {};
        if (!values.cardType) {
          errors.cardType = 'Required';
        } 
    
        if (!values.nameOnCard) {
          errors.nameOnCard = 'Required';
        } else if (values.nameOnCard.length < 2) {
          errors.nameOnCard = 'Name not valid';
        }
    
        if (!values.cardNumber) {
          errors.addressOne = 'Required';
        } else if (values.cardNumber.length < 10) {

        }
      
        return errors;
      };
    
      const formValue = useFormik({
        initialValues: {...billingInfo},
        validate,
        onSubmit: values => {
            nextStep(values, 'cardDetails')
        },
      });
  return (
    <form className='form-wrapper' onSubmit={formValue.handleSubmit}>
        <div className='name'>
            <label className='label'>Name on Card</label>
            <input 
                className='input'
                value={formValue.values.nameOnCard} 
                onBlur={formValue.handleBlur}
                onChange={formValue.handleChange}
                placeholder='Name on card' type="text" name='nameOnCard' />
             { formValue.touched.nameOnCard && formValue.errors.nameOnCard && <p className='error'>{formValue.errors.nameOnCard}</p> }
        </div>
        <div className='cardtype'>
        <label className='label'>Card Type:</label>
                <select 
                    name='cardType'
                     onBlur={formValue.handleBlur}
                     onChange={formValue.handleChange}
                    className='cardtypedetails' value={formValue.values.cardType}>
                    <option value="abia">Visa</option>
                    <option value="umaya">Verve</option>
                    <option value="adamawa">Mastercard</option>
                </select>
        </div>
        
        <div className='details'>
            <div className='cardDetails'>
                <label className='label'>Card details</label>
                <input 
                    className='input'
                    value={formValue.values.cardNumber}
                    onBlur={formValue.handleBlur}
                    onChange={formValue.handleChange}
                    placeholder='44960 &nbsp; 4423 &nbsp; 2341 &nbsp; 1237' 
                    type="number" name='cardNumber' />
            </div>
            <div className='expiryDate'>
                <label className='label'>Expiry date</label>
                <input 
                value={formValue.values.expDate}
                onBlur={formValue.handleBlur}
                onChange={formValue.handleChange}
                className='input' placeholder='04 &nbsp;/&nbsp; 23' type="number" name='expDate'/>
            </div>
            <div className='cvv'>
                <label className='label'>CVV</label>
                <input 
                    value={formValue.values.CVV}
                    onBlur={formValue.handleBlur}
                    onChange={formValue.handleChange}
                    className='input' placeholder='923' 
                    type="text" name='CVV'/>
            </div>
        </div>
        <div>
        <button className='next'>Next</button>
         <button className='cancelpayment' onClick={cancelpayment}>Cancel Payment</button>
        </div>

    </form>
  );
}

export default Billing