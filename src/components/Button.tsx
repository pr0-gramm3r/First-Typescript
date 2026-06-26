import React, { useState } from "react";

interface Props {
    text: string,
    onClick?: ()=> void;
}


interface Book {
  name: string,
  price: number;
}

const initialValue: Book = {
    name: 'English',
    price: 500,
}


const Button = (props: Props) => {
    
    const [value, setValue] = useState<Book>(initialValue)

    return (
        <>
        
        <h5>Name : {value.name} <br /> price: ₹{value.price}/- </h5>
        <button onClick={()=> setValue({name: 'Hindi', price: 200} )}>
            {props.text}        
        </button><br />
        <button onClick={()=>setValue(initialValue)}>Reset</button>
        </>    
    )
}

export default Button

export const Form = () =>{
    
    const [value, setValue] = useState<string | undefined>();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
    return(
        <>
            <input 
                onChange={handleInput}
                type="text"
                placeholder="Input here"
             />
             <h2>{value}</h2>
        </>
    )
} 

