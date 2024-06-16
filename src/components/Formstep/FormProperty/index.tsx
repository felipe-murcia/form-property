import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../SelectInput"
import TabInput from "../../TabInput"
import TextAreaInput from "../../TextAreaInput"
import TextInput from "../../TextInput"
import { RootState } from "../../../redux/store";
import { arrayTypeOffer, arrayTypeProperty } from "../../../constant/global";
import { setArea, setBathroom, setBedroom, setDescription, setPrice, setTypeOffer, setTypeProperty } from "../../../features/property/propertySlice";
import Button from "../../Button";
import { setStep } from "../../../features/form/formSlice"; 


export  const FormProperty = () => {
    
    const { bedroom, bathroom, area } = useSelector((state: RootState) => state.property);
    const { step } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch();

    const isValid = ():boolean => {
        if (!bedroom) return true
        else if (!bathroom) return true
        else if (!area) return true
        else return false
    }

    return(
        <>
            
            <TextInput label={'Habitacion'} id={'bedroom'} value={bedroom} onChange={(value)=>dispatch(setBedroom(Number(value)))}  />
            <TextInput label={'Baño'} id={'bathroom'} value={bathroom} onChange={(value)=>dispatch(setBathroom(Number(value)))}  />
            <TextInput label={'Area cuadrado'} id={'area'} value={area} onChange={(value)=>dispatch(setArea(Number(value)))}  />
            
            <Button title={"Continuar"} disabled={isValid()} onClick={()=>dispatch(setStep(step+1))} />
        </>
    )
}
