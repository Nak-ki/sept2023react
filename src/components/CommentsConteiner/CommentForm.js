import {commentsService} from "../../services/commentsService";
import {useForm} from "react-hook-form";

const CommentForm = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm()

    const save = (item) =>{
        commentsService.create(item).then(({data}) => setComments(prev=>[...prev, data]));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'Name'} {...register('name')}/>
                <input type="text" placeholder={'Email'} {...register('email')}/>
                <input type="text" placeholder={'Text'} {...register('body')}/>

                <button>Submit</button>

            </form>
        </div>
)};

export {
    CommentForm
};
