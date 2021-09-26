import React from 'react';

const SelectedDeveloper = (props) => {
    const { img, name,designation } = props.developer
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small className="text-muted">{designation}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedDeveloper;