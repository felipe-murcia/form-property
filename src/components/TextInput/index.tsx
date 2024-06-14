import { ChangeEvent } from 'react';
import './index.css';

interface Props {
  id?: string;
	label: string;
  placeholder?: string;
  value: any;
  onChange: (event: any) => void;
  errors?: string[]
}

function TextInput({ label, onChange, value, errors = [], placeholder, id }:Props) {
 
    return (
      <div className="box-input">
          <label className="label-input">{label}</label>
          <input 
              id={id}
              type="text"  
              placeholder={placeholder}
              value={value}
              onChange={(event)=>onChange(event.target.value)} 
              className={'form-control '+(errors!.length >=1 && 'textInputError')} />
              { errors?.map((error:string)=> <span className="text-error">- {error}</span>)}
      </div>
    );
}

export default TextInput;

