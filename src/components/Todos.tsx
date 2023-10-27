import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from '../store/todos-context';
// const Todos: React.FC<{items: string[]}> = (props)=> {
const Todos: React.FC = () => {
  const contextCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {contextCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={contextCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
