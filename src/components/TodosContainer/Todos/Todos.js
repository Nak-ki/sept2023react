import {useEffect, useState} from "react";
import {todosService} from "../../../services/todosService";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'

const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    }, []);


    return (
        <div className={css.todos}>
            {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </div>
    );
};

export {Todos};
