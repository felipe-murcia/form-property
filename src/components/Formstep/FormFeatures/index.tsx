import { useDispatch, useSelector } from "react-redux"; 
import { RootState } from "../../../redux/store";
import {  arrayFeatures, colorBackground, colorPrimary, feature } from '../../../constant/global';
import { setArea, setBathroom, setBedroom, setDescription, setFeatures, setPrice, setTypeOffer, setTypeProperty } from "../../../features/property/propertySlice";
import Button from "../../Button";
import { setStep } from "../../../features/form/formSlice"; 
import { ImageComponent } from "./ImageComponent";
import './index.css'
 

export  const FormFeatures = () => {
    
    const { features } = useSelector((state: RootState) => state.property);
    const { step } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch();

    const hasFeature = (value:feature):boolean => {
        return features.filter((item)=> item.name == value.name).length >= 1
    }  

    const handleFeature = (value:feature) => {
        if(hasFeature(value)) dispatch(setFeatures(features.filter((item:feature)=> item.name !== value.name))) 
        else dispatch(setFeatures([...features, value]))     
    }

    return(
        <> 
            {
                arrayFeatures.map((item:feature)=>{
                    let hasFeat = hasFeature(item)
                    let colorIcon = 'purple'
                    return (
                        <div className="card-feat" style={{backgroundColor:colorBackground}} onClick={()=>handleFeature(item)}>
                            
                            <div style={{flexDirection: 'row', alignItems:'center', display:'flex'}}> 
                                <ImageComponent image={item.image} color={colorIcon} size={40}/>    
                                <span style={{fontSize:20, fontWeight:600, paddingLeft:10, color:colorIcon}}>{item.name}</span> 
                            </div>

                            <ImageComponent
                                image={
                                    hasFeat?require('../../../assets/images/icons/confirm.png')
                                    :require('../../../assets/images/icons/radio.png')
                                } 
                                color={colorIcon} size={32}
                            />   

                        </div>
                    )
                })
            } 
            <Button title={"Continuar"} disabled={features.length==0?true:false} onClick={()=>dispatch(setStep(step+1))} />
        </>
    )
}
