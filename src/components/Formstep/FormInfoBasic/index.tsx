import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../SelectInput"
import TabInput from "../../TabInput"
import TextAreaInput from "../../TextAreaInput"
import TextInput from "../../TextInput"
import { RootState } from "../../../redux/store";
import { arrayTypeOffer, arrayTypeProperty } from "../../../constant/global";
import { setDescription, setPrice, setTypeOffer, setTypeProperty } from "../../../features/property/propertySlice";
import Button from "../../Button";
import { setStep } from "../../../features/form/formSlice"; 


export  const FormInfoBasic = () => {
    
    const { description, type_offer, type_property, price } = useSelector((state: RootState) => state.property);
    const { step } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch();

    const isValid = ():boolean => {
        if (!type_property) return true
        else if (!price) return true
        else if (description.length< 10) return true
        else return false
    }

    return(
        <>
            <TabInput label={'Tipo de oferta'} value={type_offer} data={arrayTypeOffer} onChange={(value)=>dispatch(setTypeOffer(value))} />
            <SelectInput label={'Tipo de inmueble'} value={type_property} data={arrayTypeProperty} onChange={(value)=>dispatch(setTypeProperty(value))} />
            <TextInput label={'Precio'} id={'price'} value={price} onChange={(value)=>dispatch(setPrice(Number(value)))}  />
            <TextAreaInput label={'Descripcion'} value={description} onChange={(value)=>dispatch(setDescription(value))}  />   

            <Button title={"Continuar"} disabled={isValid()} onClick={()=>{dispatch(setStep(step+1))}} />
        </>
    )
}
