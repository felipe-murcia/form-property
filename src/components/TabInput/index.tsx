import { ChangeEvent } from 'react';
import './index.css';

interface Props {
  id?: string;
	label: string;
  placeholder?: string;
  value: any;
  data: string[];
  onChange: (value: any) => void;
  errors?: string[]
}

function TabInput ({ label, onChange, data, value, errors = [], placeholder, id }:Props) {
 
    return (
      <div className="box-input">
          <label className="label-input">{label} </label>
          <div className='tanInput'> 
            {
              data.map((item)=>{
                return(
                  <div className={item==value?'selectedTabActive':'selectedTabInactive'} onClick={()=>onChange(item)}> 
                    <span className='textTab'>{item}</span>
                  </div> 
                )
              })
            }
          </div>
      </div>
    );
}

export default TabInput;

