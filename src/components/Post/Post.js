import css from './Post.module.css'

const Post = ({post, ShowDetails}) => {
    const {id, title} = post

    return (
        <div className={css.post}>
            <h3>ID: {id}</h3>
            <h2>{title}</h2>
           <button onClick={() => ShowDetails(post)}>Show</button>
        </div>
    );
};

export {Post};
