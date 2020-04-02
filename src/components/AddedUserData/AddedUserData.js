import React from 'react';
import './AddedUserData.css'
import AddedUser from '../AddedUser/AddedUser';

const AddedUserData = (props) => {
    const addedUsers = props.addedUserData;
    // console.log(addedUser);
    const totalSalary = addedUsers.reduce((total, addedUser) => total + addedUser.salary, 0)
    
    return (
        <div className="AddedUsersData">
            <div className="fixedData">
            <h2>Added User: <span>{addedUsers.length}</span></h2>
            <h5>Added Users Yearly Salary: <span>&#36; {totalSalary}</span></h5>
            </div>
            <div>
                {
                    addedUsers.map(user => <AddedUser key={user.id} addedUser = {user}></AddedUser>)
                }
            </div>
        </div>
        
        
    );
};

export default AddedUserData;