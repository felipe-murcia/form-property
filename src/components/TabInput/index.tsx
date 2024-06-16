import { ChangeEvent } from 'react';
import './index.css';
import { colorBackground, colorPrimary } from '../../constant/global';

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
          <div className='tanInput' style={{backgroundColor:colorBackground}}> 
            {
              data.map((item)=>{
                return(
                  <div className={item==value?'selectedTabActive':'selectedTabInactive'} 
                  style={{backgroundColor:item==value?colorPrimary:'transparent'}}
                  onClick={()=>onChange(item)}> 
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

