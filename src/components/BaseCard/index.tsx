import React from 'react'; 
import './index.css';

interface Props {
    children: JSX.Element | JSX.Element[] 
}
 
export const BaseCard = ({ children }: Props) => {

    return(
        <div className='basecard'>
            {children}
        </div>
    )

}
 

 
   
