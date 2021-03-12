import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [inputText,setInputText] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    handleSubmit(inputText, date);
    setInputText('');
    setDate('');
  };

  return(
    <form onSubmit = {submitHandler}>
      <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
      <input type='text' value={date} onChange={(e)=>setDate(e.target.value)}/> 
      <button type='submit'>submit</button>
    </form>
  )
}
export default Form;