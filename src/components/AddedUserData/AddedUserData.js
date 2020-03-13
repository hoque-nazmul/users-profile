import React from 'react';
import './AddedUserData.css'

const AddedUserData = (props) => {
    const addedUser = props.addedUserData;
    const totalSalary = addedUser.reduce((total, addedUser) => total + addedUser.salary, 0)
    
    return (
        <div className="AddedUsersData">
            <h2>Added User: <span>{addedUser.length}</span></h2>
            <h5>Added Users Yearly Salary: <span>{totalSalary}</span></h5>
        </div>
    );
};

export default AddedUserData;