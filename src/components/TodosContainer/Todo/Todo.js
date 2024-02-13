import css from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo

    return (
        <div className={css.todo}>
          <p>userId: {userId}</p>
          <p>id: {id}</p>
          <h3>title: {title}</h3>
          <p>completed: {completed?'complete':'not complete'}</p>
        </div>
    );
};

export {Todo};
