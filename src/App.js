import React,{useCallback, useState} from 'react'
import classNames from 'classnames'
import Profile from './components/Profile'
import "./App.css"
import Billing from './components/Billing'
import Payer from './components/Payer'
import PurchaseCompleted from './components/PurchaseCompleted'


const App = () =>  {
const [currentStep,setCurrentStep] = useState(1)
const [billingDetails, setBillingDetails] = useState()

const nextStep = useCallback((values, key) => {
  if (currentStep !== 4) {
    setCurrentStep(currentStep + 1)

    if (currentStep <=2 ) {
      setBillingDetails({
        ...billingDetails,
        [key]: {...values}
      })
    }
  }
}, [currentStep, billingDetails])

const cancelpayment = () => setCurrentStep(1)

  const componentDisplay= useCallback(() => {
    switch (currentStep) {
      case 1: return <Profile
      nextStep={nextStep}
      cancelpayment={cancelpayment}
      />    
      case 2: return <Billing 
      nextStep={nextStep}
      cancelpayment={cancelpayment}
      />
      case 3: return <Payer 
      nextStep={nextStep}
      cancelpayment={cancelpayment}
      /> 
      case 4: return <PurchaseCompleted 
      nextStep={nextStep}
      cancelpayment={cancelpayment}
      /> 

      default:
        break;
    }
  }, [currentStep, nextStep])

  console.log(billingDetails)
  return (
    <div className='container'>
      <div className='app-wrapper'>
      <div>
        <h2 className='title'>Complete your Purchase</h2>
      </div>
      <div className='Nav'>
        <div className='tab'>
          <p className={classNames('NavP', { 'active-text': currentStep === 1 })}>Personal Info</p>
          {currentStep === 1 && <div className='active-bar'></div>}
        </div>
        <div className='tab'>
          <p className={classNames('NavP', { 'active-text': currentStep === 2 })}>Billing Info</p>
          {currentStep === 2 && <div className='active-bar'></div>}
        </div>
        <div className='tab'>
          <p className={classNames('NavP', { 'active-text': currentStep === 3 })}>Confirm Payment</p>
         {currentStep === 3 && <div className='active-bar'></div>}
        </div>

      </div>
        {componentDisplay()}
    </div>
      </div>
  )
  
}

export default App