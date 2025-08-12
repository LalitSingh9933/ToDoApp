import React from 'react';
import "../styles.css";
import type { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
  lists:Todo[];
  setLists:React.Dispatch<React.SetStateAction<Todo[]>>;
}
 const TodoList: React.FC<Props>=({lists, setLists}) =>{
  return (

    <div className='lists'>
      {lists.map((todo) => (
        <SingleTodo 
        todo={todo}
        key={todo.id}
        lists={lists}
        setLists={setLists}/>
       
      ))}
      
    </div>
  )
}
export default TodoList;
