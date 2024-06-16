import React, { useContext } from 'react'; 
// import './index.css'; 
import { useDispatch, useSelector } from 'react-redux';   
import { Line } from './Line';
import { StepsForm, colorSecondary } from '../../constant/global';
import { current } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { setStep } from '../../features/form/formSlice';
import { Step } from './Step';
  
function Stepline() {

  const { step } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch(); 
  
  return (  
    <div style={{ alignItems:'flex-end', display:'flex', flexDirection:'column', paddingRight:step>=5?0:20}}> 
    {
      step>=5? null
      //<img src={require('../../assets/fondo/4575.jpg')} width={'100%'} height={'100%'} style={{objectFit:'cover'}}/>
      :StepsForm.map((item:string, index: number)=>{
          let numStep = (index+1)
          return(
              <>
                  <Step step={numStep} title={item} currentStep={step} onChange={(value:number)=>dispatch(setStep(value))}/>
                  { StepsForm.length > (index+1) && <Line active={true}/> }
              </>                                
          )
      })
    }  
    </div>  
  );
}

export default Stepline;
