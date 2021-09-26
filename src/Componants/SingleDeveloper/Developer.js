import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Developer = (props) => {
    const element = <FontAwesomeIcon className="me-3" icon={faUser} />
    const { img, name, profile, designation, location, salary } = props.developer
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top w-75 m-auto p-3 rounded-circle" alt="..." />
                    <div className="card-body text-start">
                        <h4 className="card-title text-center">{name}</h4>
                        <h6>Designation: {designation}</h6>
                        <h6>Location: {location}</h6>
                        <h6>Salary: ${salary}</h6>
                        <span>Linkedin:</span><a className="text-decoration-none" href={profile}>{profile}</a>
                    </div>
                    <div className="card-footer border-0 bg-white">
                        <button onClick={event => props.handleEvent(event, props.developer)} className="btn btn-warning px-5 py-1">{element}Add Developer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;