import React, {useRef, useContext} from 'react';
import {TodosContext} from '../store/todos-context';
import classes from './NewTodo.module.css';
const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler=(event: React.FormEvent)=>{
        event.preventDefault();
        // const enteredText =todoTextInputRef.current?.value; can have both value null or string
        const enteredText =todoTextInputRef.current!.value; //onlymreturn string not null
        if(enteredText.trim().length===0){
            return;
        }

        todosCtx.addTodo(enteredText);
    }

  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">New Todo</label>
    <input type="text" id="text" ref={todoTextInputRef}/> 
    <button>Add Todo</button>
  </form>;
};
export default NewTodo;
