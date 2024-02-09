import {useForm} from "react-hook-form";

import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm()

    const save = (item)=>{
        userService.create(item).then(({data}) => setUsers(prev=>[...prev, data]));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'Name'} {...register('name')}/>
                <input type="text" placeholder={'Username'} {...register('username')}/>
                <input type="text" placeholder={'Email'} {...register('email')}/>

                <button>Create</button>

            </form>
        </div>
    );
};

export {UserForm};
