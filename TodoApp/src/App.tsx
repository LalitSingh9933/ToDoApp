import { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import  type {Todo} from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo]= useState<string>("");
  const[lists, setLists]=useState<Todo[]>([]);

  const handled=(e:React.FormEvent) =>{
    e.preventDefault();
    if(lists){
      setLists([...lists, { id: Date.now(), todo,isDone:false} ]);
      setTodo("");
    }
  };
 
  return (
  <div className='App'>
  <span className='heading'>Todo App</span>
   <Inputfield
    todo={todo}
     setTodo={setTodo}
     handled={handled}/>
     <TodoList  lists={lists} setLists={setLists}/>
  </div>
 
  )
}

export default App
