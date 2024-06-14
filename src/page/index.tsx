import React, { useContext } from 'react'; 
import './index.css';
import { BaseCard } from '../components/BaseCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import TextAreaInput from '../components/TextAreaInput';
import TabInput from '../components/TabInput';
import { arrayTypeOffer, arrayTypeProperty } from '../constant/global';
import { setDescription, setPrice, setTypeOffer, setTypeProperty } from '../features/property/propertySlice';
import Logotipo from '../components/Logo';

function Index() {

  const { description, type_offer, type_property, price } = useSelector((state: RootState) => state.property);
  const dispatch = useDispatch();
  
  return (
    <div className="container" > 
        <BaseCard>
            <h1>Base de card {price}</h1>
             <Logotipo />
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:50}}>            
              <TabInput label={'Tipo de oferta'} value={type_offer} data={arrayTypeOffer} onChange={(value)=>dispatch(setTypeOffer(value))} />
              <SelectInput label={'Tipo de inmueble'} value={type_property} data={arrayTypeProperty} onChange={(value)=>dispatch(setTypeProperty(value))} />
              <TextInput label={'Precio'} id={'price'} value={price} onChange={(value)=>dispatch(setPrice(Number(value)))}  />
              <TextAreaInput label={'Descripcion'} value={description} onChange={(value)=>dispatch(setDescription(value))}  />
            </div>

        </BaseCard>
    </div>
  );
}

export default Index;
