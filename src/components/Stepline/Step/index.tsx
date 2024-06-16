import { colorPrimary, colorSecondary } from "../../../constant/global";

interface Props {
    step: number;
    title: string;
    currentStep: number;
    onChange: (value:number) => void;
}

export const Step = ({ step, title, currentStep, onChange }:Props) => {

    let blockStep = currentStep==step

    return(
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'transparent'}}>

            <div style={{marginRight:20, textAlign:'right'}}>
                <h3> <small style={{fontWeight:'400'}}>Paso {step} <br/></small>  {title}  </h3>
            </div>

            {
                currentStep>step?
                <div onClick={()=>onChange(step)}
                    style={{cursor:'pointer', width:60, height:60, backgroundColor:colorPrimary, borderRadius:50, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <span style={{fontWeight:'bold', color:'white', fontSize:24}}>{step}</span>
                </div> 
                :
                <div onClick={()=>blockStep?null:onChange(step)}
                    style={{cursor:'pointer', width:60, height:60, backgroundColor:'white', borderStyle:'solid', borderWidth:1, borderColor:blockStep?colorPrimary: colorSecondary , borderRadius:50, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <span style={{fontWeight:'bold',  fontSize:24, color: blockStep?colorPrimary: colorSecondary }}>{step}</span>
                </div>
            }

        </div>
    )
} 
