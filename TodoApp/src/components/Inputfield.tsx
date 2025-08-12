import { useRef } from 'react';
import '../styles.css'
interface Props{
todo: string;
setTodo: React.Dispatch<React.SetStateAction<string>>;
handled: ( e:React.FormEvent) => void;
}
const Inputfield: React.FC<Props> = ({todo, setTodo ,handled}) => {
    const inputRef= useRef<HTMLInputElement>(null);
    return (
        <form 
        className='input' 
        onSubmit={(e)=>{
            handled(e);
            inputRef.current?.blur();
        }}>
            <input
             type='text'
              placeholder='Enter a task ...'
              value={todo}
              onChange={
                (e)=>setTodo(e.target.value)
              }
               className='input_box' />
            <button
             type='submit'
             className='input_submit'
             >
                Add
                </button>
        </form>
    );
};
export default Inputfield;