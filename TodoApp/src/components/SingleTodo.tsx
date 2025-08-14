import "../styles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import type { Todo } from "../model";
import React, { useState, useEffect } from "react";



type Props = {
    todo: Todo,
    lists: Todo[],
    setLists: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, lists, setLists }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (edit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [edit]);

    //This for handling  isDone
    const handleDone = (id: number) => {
        setLists(lists.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    };
    //This for deleteing  a todos 
    const handleDelete = (id: number) => {
        setLists(lists.filter(todo => todo.id !== id));
    }
    // This for editing a todo list;

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setLists(lists.map(todo =>
            todo.id === id ? { ...todo, todo: editTodo } : todo));
        setEdit(false);


    }
    return (
        <form className="single_todo"
            onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos_single_text"
                />
            ) : todo.isDone ? (
                <s className="todos_single_text">{todo.todo}</s>
            ) : (
                <span className="todos_single_text"> {todo.todo}</span>
            )}
            <div>
                <span className="icon_edit"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}>
                    <FaEdit />
                </span>
                <span className="icon_delete"
                    onClick={() => handleDelete(todo.id)}>
                    <FaTrash />
                </span>
                <span className="icon_done" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>

            </div>
        </form>
    )
}
export default SingleTodo;
