import React, { useState } from "react";
import Todo from "../models/todo";


type TodosContextObj ={
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: ()=> {},
    removeTodo: (id: string) => {}
});



export const TodosContextProvider: React.FC <{}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodoHandler = (text: string) => {
      const  newText = new Todo(text);
      setTodos((prevText)=>{
        return prevText.concat(newText);
      })
    }
  
    
    const removeTodoHandler = (todosId: string) => {
      setTodos((prevText)=>{
        return prevText.filter(todo => todo.id !== todosId);
      })

     
    };
    
    const contextValue : TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
      }

    return <TodosContext.Provider  value={contextValue}> 
        {props.children}
    </TodosContext.Provider>
}