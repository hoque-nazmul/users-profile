import React, { useState } from 'react';
import './UserController.css'
import userData from '../../userData'
import User from '../User/User';
import AddedUserData from '../AddedUserData/AddedUserData';



const UserController = () => {
    const [users, setUsers] = useState(userData)
    const [addedUser, setAddedUser] = useState([])
    const addUser = (user) => {
        const newUser = [...addedUser, user];
        setAddedUser(newUser)
    }
    return (
        <div className="UserController">
            <div className="UsersPanel">
                {
                    users.map(user => <User addUserHandler={addUser} users={user}></User>)
                }
            </div>
            <div className="AddedUser">
                <AddedUserData addedUserData={addedUser}></AddedUserData>
            </div>
        </div>
    );
};

export default UserController;