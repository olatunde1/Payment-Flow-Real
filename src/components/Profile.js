import React, { useState } from 'react'
import NaijaStates from 'naija-state-local-government';
import { useFormik } from 'formik';

const PersonalInfo = ({ nextStep, cancelpayment }) => {
    const states = NaijaStates.states()
    const [selectedState] = useState(states[0])
    const personalInfo = {
        name: '',
        email: '',
        addressOne: '',
        addressTwo: '',
        state: selectedState,
        lga: NaijaStates.lgas(selectedState).lgas[0]
    }

const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 2) {
      errors.name = 'Must be 2 characters or more';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.addressOne) {
      errors.addressOne = 'Required';
    } 
    if (!values.addressTwo) {
      errors.addressTwo = 'Required';
    } 
  
    return errors;
  };

  const formValue = useFormik({
    initialValues: {...personalInfo},
    validate,
    onSubmit: values => {
        nextStep(values, 'personalInfo')
    },
  });

  return (
    <form className='form-wrapper' onSubmit={formValue.handleSubmit}>
        <div className='name'>
            <label className='label'>Name</label>
            <input
                className='input'
                placeholder='Name'
                type="text"
                name='name'
                onBlur={formValue.handleBlur}
                onChange={formValue.handleChange}
                value={formValue.values.name} />
            { formValue.touched.name && formValue.errors.name && <p className='error'>{formValue.errors.name}</p> }
        </div>
        <div className='email'>
            <label className='label'>Email Address</label>
            <p className='email-note'>The purchase reciept will be sent to this email address</p>
            <input
                className='input'
                placeholder='Email'
                type="email"
                value={formValue.values.email}
                onChange={formValue.handleChange}
                onBlur={formValue.handleBlur}
                name='email' />
            { formValue.touched.email && formValue.errors.email && <p className='error'>{formValue.errors.email}</p> }

        </div>
        <div className='address1'>
            <label className='label'>Address 1</label>
            <input 
                className='input'
                placeholder='Address 1'
                type="text"
                value={formValue.values.addressOne}
                onChange={formValue.handleChange}
                onBlur={formValue.handleBlur}
                name='addressOne' />
        { formValue.touched.addressOne && formValue.errors.addressOne && <p className='error'>{formValue.errors.addressOne}</p> }

        </div>
        <div className='address2'>
            <label className='label'>Address 2</label>
            <input 
                className='input'
                placeholder='Address 2'
                type="text"
                onChange={formValue.handleChange}
                onBlur={formValue.handleBlur}
                value={formValue.values.addressTwo}
                name='addressTwo'/>
        { formValue.touched.addressTwo && formValue.errors.addressTwo && <p className='error'>{formValue.errors.addressTwo}</p> }
        </div>
        <div className='venue'>
            <div className='state'>
                <label className='label'>State</label>
                <select className='stateDetails' value={formValue.values.state} name='state' onChange={formValue.handleChange}>
                    {states.map(state => {
                    return <option key={state} value={state}>{state}</option>
                    })}
                </select>
            </div>
            <div className='local'>
                <label className='label'>local Government</label>
                <select className='stateDetails' value={personalInfo.lga} name='lga' onChange={formValue.handleChange} disabled={!formValue.values.state}>
                    {NaijaStates.lgas(formValue.values.state).lgas.map(lga => {
                    return <option key={lga} value={lga}>{lga}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='actionButton'>
            <button type='submit' className='next'>Next</button>
            <button className='cancelpayment' onClick={cancelpayment}>Cancel Payment</button>
        </div>

    </form>
     )          
}

export default PersonalInfo