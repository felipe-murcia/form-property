import { useSelector } from "react-redux";
import { colorPrimary, colorSecondary } from "../../constant/global"
import Logotipo from "../Logo"
import { FormInfoBasic } from "./FormInfoBasic"
import { RootState } from "../../redux/store";
import { FormProperty } from "./FormProperty";
import { FormFeatures } from "./FormFeatures";
import { FormImage } from "./FormImage";
import { InfoProperty } from "./InfoProperty";

export  const StepForm = () => {
    const { step } = useSelector((state: RootState) => state.form);

    const viewForm = () => []
    return(
        <>
            <Logotipo />         
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingLeft:50, paddingRight:50, marginTop:20}}> 
                {
                      step === 1 ? <FormInfoBasic />
                    : step === 2 ? <FormProperty />
                    : step === 3 ? <FormFeatures />
                    : step === 4 ? <FormImage />
                    : <InfoProperty />
                }           
            </div>
        </>
    )
}
