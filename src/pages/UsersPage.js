import {Outlet, useLoaderData} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users/Users";

const UsersPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <Users users={data}/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
