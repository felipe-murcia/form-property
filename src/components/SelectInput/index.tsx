import { ChangeEvent } from 'react';
import './index.css';

interface Props {
  id?: string;
	label: string;
  placeholder?: string;
  value: any;
  onChange: (event: any) => void;
  errors?: string[]
  data: string[]
}

function SelectInput({ label, onChange, value, errors = [], placeholder, id, data = [] }:Props) {
 
    return (
      <div className="box-input"> 
         <label className="label-input">{label}</label>
        <select id={id} value={value}
          onChange={(event)=>onChange(event.target.value)}
          className={'form-control '+(errors!.length >=1 && 'textInputError')} >
            <option>{placeholder}</option>            
            {
              data.map((item)=>{
                return(
                  <option value={item}>{item}</option> 
                )
              })
            }
        </select>  
        { errors?.map((error:string)=> <span className="text-error">- {error}</span>)}
      </div>
    );
}

export default SelectInput;

