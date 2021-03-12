import React from "react";

const ListOfTodos = ({todos})=>{
  return(
    <div>
    {todos.map((todo,index) => (
      <div key={index}>
        <span>{todo.name}</span> | 
        <span> {todo.date}</span>
      </div>
      
    ))}
    </div>
  )
}

export default ListOfTodos;