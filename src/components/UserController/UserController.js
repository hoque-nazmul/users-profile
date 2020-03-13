import React, { useState } from 'react';
import './UserController.css'
import userData from '../../userData'
import User from '../User/User';

const UserController = () => {
    const [users, setUsers] = useState(userData)
    
    return (
        <div className="UserController">
            <div className="UsersPanel">
                {
                    users.map(user => <User users={user}></User>)
                }
            </div>
            <div className="AddedUser">
                <h2>this is from Added User</h2>
            </div>
        </div>
    );
};

export default UserController;