import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import {TodosContextProvider} from "./store/todos-context";

function App() {
  
  //  const [todos, setTodos] = useState<Todo[]>([]);
  
  // const addTodoHandler = (text: string) => {
  //   const  newText = new Todo(text);
  //   setTodos((prevText)=>{
  //     return prevText.concat(newText);
  //   })
  // }

  // // const todos = [new Todo("learn react"), new Todo("learn typescript")];
  // const removeTodoHandler = (todosId: string) => {
  //   setTodos((prevText)=>{
  //     return prevText.filter(todo => todo.id !== todosId);
  //   })
  // }

  return (

      // {/* <NewTodo onAddTodo={addTodoHandler}/>
      // {/* <Todos items={['Learn React', 'Learn TypeScript']}/> */}
      // {/* <Todos items={todos} onRemoveTodo={removeTodoHandler}/> */}
      <TodosContextProvider>
      <NewTodo />
      <Todos/>
      </TodosContextProvider>


   
  );
}

export default App;
