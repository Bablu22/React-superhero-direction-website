import React, { useEffect, useState } from 'react';
import Developer from '../SingleDeveloper/Developer';
import './DeveloperArea.css'
const DevelopersArea = () => {

    const [developers, setDevelopers] = useState([])


    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    return (
        <div>
            <h2 className="py-5 fw-bold fs-1 mt-5">Developers</h2>
            <div className="">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row row-cols-1 row-cols-md-3 g-2 ms-3">
                            {
                                developers.map(developer => <Developer
                                    key={developer.id}
                                    developer={developer}
                                >

                                </Developer>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h1>Add</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopersArea;