import {useGetUsers} from "../actions";
import React from "react";

const Index = () => {

    const {data, error, loading} = useGetUsers();

    return (
        <div>
            <h1>Users List</h1>

            {
                loading &&
                <div>Loading</div>

            }

            {
                error &&
                <div>{error.message}</div>
            }

            {
                data &&
                <ul>
                    {data.data.map(item => (
                        <li key={item.id}>{item.firstName} {item.lastName}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Index;
