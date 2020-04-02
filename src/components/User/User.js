import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const User = (props) => {
    const [addedUser, setAddedUser] = useState(true);
    const addedBtn = props.addedBtn;
    console.log(addedBtn);
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

                {
                    addedUser ? <button id="addBtn" onClick={ () => { props.addUserHandler(props.users); setAddedUser(false) } } className="btn addUser"><span className="btnIcon"><FontAwesomeIcon icon={faPlus} /></span><span className="btnText">Add User</span></button> : <button className="btn addedUser" onClick={() => alert("Already Added this User!")}><span className="btnIcon" style={{ color:'white' }}><FontAwesomeIcon icon={faCheck} /></span><span className="btnText">Added User</span></button>
                }
                
                
            </div>
        </div>
    );
};

export default User;