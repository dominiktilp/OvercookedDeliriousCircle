import React,{useState, useEffect} from 'react';
import { render } from 'react-dom';
import Form from "./Form.js";
import ListOfTodos from "./ListOfTodos.js"
import './fake-hmr';

function transformData(data){
return data.map(item=>({name: item.title, date: item.date}))
}

const ExampleComponent = () => {

  useEffect(getData,[]);

  function getData(){
    let data = fetch('/todos').then(response=>response.json()).then(data=>setTodos(transformData(data)));
  }

  const [todos,setTodos] = useState([]);

  function handleSubmit(name, date) {
    setTodos(prevTodos => [...prevTodos, { name,date }])
    fetch('/todos', {method:'POST', body: JSON.stringify({title:name,date}), headers:{ 'Content-Type': 'application/json'}}).then(response =>response.json()).catch(err => 
    alert("Sorry, there was a problem while posting data."))
  }


  return <div>
    <h1>This is Dominic's todo list</h1>
    <Form  handleSubmit={handleSubmit} />
    <ListOfTodos todos={todos}/>
  </div>
}

render(<ExampleComponent />, document.getElementById('app'));
