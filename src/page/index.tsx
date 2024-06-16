import React, { useContext } from 'react'; 
import './index.css';
import { BaseCard } from '../components/BaseCard'; 
import { colorBackground } from '../constant/global'; 
 
import Stepline from '../components/Stepline'; 
import { StepForm } from '../components/Formstep';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import fondoImagen from '../assets/fondo/4575.jpg'; // Ruta de la imagen de fondo

function Index() { 
  const { step } = useSelector((state: RootState) => state.form);
  return (
    <div className="container" > 
        <BaseCard>

        <div style={{ display:'flex', flexDirection:'row'}}>

          <div style={{  flex:2, backgroundColor:colorBackground, alignContent:'center',
            backgroundImage: step>=5?`url(${fondoImagen})`:'none',  // Establece la imagen como fondo
            backgroundSize: 'cover',                   // Cubre todo el contenedor
            backgroundPosition: 'center',
          }}>
              <Stepline />
          </div>
              
          <div style={{ flex:3, backgroundColor:'white', textAlign:'center', paddingTop:20,}}> 
               <StepForm />
          </div>

        </div> 

        </BaseCard>
    </div>
  );
}

export default Index;
