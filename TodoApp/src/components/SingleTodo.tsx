import "../styles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import type { Todo } from "../model";


type Props = {
    todo: Todo,
    lists: Todo[],
    setLists: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<Props> = ({ todo, lists, setLists }) => {
    return (
        <form className="single_todo">
            <span className="todos_single_text">{todo.todo}</span>
            <div>
                <span>
                    <FaEdit />
                </span>
                <span>
                    <FaTrash/>
                </span>
                <span>
                    <MdDone/>
                </span>

            </div>

        </form>
    )
}
export default SingleTodo;
