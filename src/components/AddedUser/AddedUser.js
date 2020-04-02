import React from 'react';
import './AddedUser.css'

const AddedUser = (props) => {
    const addedUser = props.addedUser;

    const {name, img, salary} = addedUser;
    return (
        <div>
            <div className="addedUserContent">
                <div className="addedUserImg">
                    <img src={img} alt=""/>
                </div>
                <div className="addedUserText">
                    <h3>{name}</h3>
                    <p><small>&#36; {salary}</small></p>
                </div>
            </div>
        </div>
    );
};

export default AddedUser;