import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../SelectInput"
import TabInput from "../../TabInput"
import TextAreaInput from "../../TextAreaInput"
import TextInput from "../../TextInput"
import { RootState } from "../../../redux/store";
import { arrayTypeOffer, arrayTypeProperty, colorBackground, feature } from "../../../constant/global";
import { setArea, setBathroom, setBedroom, setDescription, setPrice, setTypeOffer, setTypeProperty } from "../../../features/property/propertySlice";
import Button from "../../Button";
import { setStep } from "../../../features/form/formSlice"; 
import { ImageComponent } from "../FormFeatures/ImageComponent";

interface Props {
    label: string,
    value?: any,
    children?: JSX.Element | JSX.Element[] 
}

const ItemData = ({ label, value, children}:Props) => {

    return(
        <div className="box-input">
            <label className="label-input">{label}</label>
            <span> {value}</span> 
        </div> 
    )
}

export  const InfoProperty = () => {
    
    const { bedroom, bathroom, area, images, features, 
        description, type_offer, type_property, price
      } = useSelector((state: RootState) => state.property);
 

    return(
        <div style={{width:'100%'}}>

            <div style={{textAlign:'left', marginBottom:10}}> 
                <h3 style={{margin:0}}>Información</h3>
                <ItemData label={"Tipo de oferta"} value={type_offer}/>
                <ItemData label={"Tipo de inmueble"} value={type_property}/>
                <ItemData label={"Precio"} value={price}/>
                <ItemData label={"Descripción"} value={description}/>                
            </div>

            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}> 
                <div style={{display:'flex', flex:1,flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                    <ImageComponent color={"purple"} image={require('../../../assets/images/property/bed.png')} size={40} />
                    <div style={{width:10}} />
                    <ItemData label={"Habitacion"} value={bedroom}/>
                </div>
                <div style={{display:'flex', flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                    <ImageComponent color={"purple"} image={require('../../../assets/images/property/bath.png')} size={40} />
                    <div style={{width:10}} />
                    <ItemData label={"Baño"} value={bathroom}/>
                </div>
                <div style={{display:'flex', flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                    <ImageComponent color={"purple"} image={require('../../../assets/images/property/area.png')} size={40} />
                    <div style={{width:10}} />
                    <ItemData label={"Area"} value={area}/>
                </div> 
            </div>

            <div style={{textAlign:'left'}}> 
                <h3>Caracteristicas</h3>
                {
                    features.map((item:feature)=>{ 
                        let colorIcon = 'purple'
                        return ( 
                            <div style={{backgroundColor:'white', flexDirection: 'row', alignItems:'center', display:'flex', padding: 10 }}> 
                                <ImageComponent image={item.image} color={colorIcon} size={40}/>    
                                <span style={{fontSize:20, fontWeight:600, paddingLeft:10 }}>{item.name}</span> 
                            </div> 
    
                        )
                    })
                }  
            </div>

            <div style={{textAlign:'left'}}> 
                <h3>Imagenes</h3>
                {images.map((image, index) => <img key={index} src={image} alt={`Uploaded ${index}`} className="uploaded-image"/>) } 
            </div>

        </div>
    )
}
