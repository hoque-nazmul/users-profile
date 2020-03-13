import React from 'react';
import './AddedUserData.css'

const AddedUserData = (props) => {
    const addedUser = props.addedUserData;
    const totalSalary = addedUser.reduce((total, addedUser) => total + addedUser.salary, 0)
    
    return (
        <div className="AddedUsersData">
            <h2>Hello , i am from {addedUser.length}</h2>
            <h5>AddedUser Yearly Salary: {totalSalary}</h5>
        </div>
    );
};

export default AddedUserData;