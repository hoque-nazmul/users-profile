import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const {img, name, email, phone, salary, profession} = props.users;
    return (
        <div className="UserWrapper">
            <div className="UserContent">
                <img src={img} alt=""/>
                <h5>Hey! I am</h5>
                <h2>{name}</h2>
                <h4>{profession}</h4>
                <p>Email: {email}</p>
                <p>phone: {phone}</p>
                <p>Yearly Salary:  &#36;{salary}</p>
                <button className="btn addUser"><FontAwesomeIcon icon={faCoffee} /><span>Add User</span></button>
                <button className="btn addedUser"><FontAwesomeIcon icon={faCoffee} /><span>Added User</span></button>
            </div>
        </div>
    );
};

export default User;