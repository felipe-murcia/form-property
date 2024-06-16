import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../SelectInput"
import TabInput from "../../TabInput"
import TextAreaInput from "../../TextAreaInput"
import TextInput from "../../TextInput"
import { RootState } from "../../../redux/store";
import { arrayTypeOffer, arrayTypeProperty, colorBackground, colorPrimary } from "../../../constant/global";
import { setDescription, setImages, setPrice, setTypeOffer, setTypeProperty } from "../../../features/property/propertySlice";
import Button from "../../Button";
import { setStep } from "../../../features/form/formSlice"; 
import { useState } from "react";
import './index.css'
import { ImageComponent } from "../FormFeatures/ImageComponent";

export  const FormImage = () => {
    
    const { images} = useSelector((state: RootState) => state.property);
    const { step } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch();

    // const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    // const [images, setImages] = useState<string[]>([]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const newImages: string[] = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
          reader.onloadend = () => {
            dispatch(setImages([ ...images, reader.result as string]))
          };
          reader.readAsDataURL(file);
        }
      }
    }; 

    const onDeleteImage = (index:number) => {
        dispatch(setImages(images.filter((_, i) => i !== index)));
    }

    return(
        <>
        
                
            <div className="image-upload">
                <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                />
                <label htmlFor="file-input" className="upload-box" style={{borderColor: colorPrimary, backgroundColor:colorBackground}}>
                    <ImageComponent image={ require('../../../assets/images/icons/image.png') } color={'purple'} size={40} />   
                    <div className="upload-text" style={{color: colorPrimary, fontWeight:600 }}>Click to upload images</div>
                </label>
                <br/>
                <div className="image-preview">
                    {images.map((image, index) =>{
                        return(
                            <div className="item-image">
                                <img key={index} src={image} alt={`Uploaded ${index}`} className="uploaded-image"/> 
                                <div onClick={()=>onDeleteImage(index)}>
                                    <ImageComponent color="purple" image={require('../../../assets/images/icons/trash.png')} size={28}/>
                                </div>
                            </div>
                        )
                    }) 
                    }
                </div>

                <Button title={"Finalizar"} disabled={images.length==0?true:false} onClick={()=>dispatch(setStep(step+1))} />
            </div>

         
        </>
    )
}
