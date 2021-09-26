import React, { useEffect, useState } from 'react';
import SelectedDeveloper from '../SelectedDeveloper/SelectedDeveloper';
import Developer from '../SingleDeveloper/Developer';
import './DeveloperArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMoneyCheckAlt,faDollarSign } from '@fortawesome/free-solid-svg-icons'
const DevelopersArea = () => {
    const element = <FontAwesomeIcon className="me-2" icon={faUser} />
    const money = <FontAwesomeIcon className="me-2" icon={faMoneyCheckAlt} />
    const dollar = <FontAwesomeIcon className="me-2" icon={faDollarSign} />
    const [developers, setDevelopers] = useState([])
    const [selecteDeveloper, setSelectDeveloper] = useState([])

    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])

    let salary = 0;

    const handleEvent = (event, developer) => {
        
        const select = [...selecteDeveloper, developer]
        setSelectDeveloper(select);

        event.target.setAttribute('disabled', true)
        event.target.classList.add('bg-danger')
        event.target.innerText = "Already Added"
    }

    for (const items of selecteDeveloper) {
        salary = salary + items.salary
        console.log(items);
    }

    return (
        <div className="py-5">
            <h2 className="py-5 fw-bold fs-1 mt-5">Developers</h2>
            <h3>{money}Estimeted Budget: $25,000</h3>
            <div className="p-3">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row row-cols-1 row-cols-md-3 g-2 ms-3 developer">
                            {
                                developers.map(developer => <Developer
                                    key={developer.id}
                                    developer={developer}
                                    handleEvent={handleEvent}
                                >

                                </Developer>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="bg-dark rounded text-white p-3  mb-4">
                                <h3 className="bg-danger p-2 fst-italic rounded">Developer List</h3>
                                <div className="text-start p-3">
                                    <h4>{element}Total Developer: {selecteDeveloper.length} </h4>
                                    <h5>{dollar}Total Salary: {salary}</h5>
                                </div>
                            </div>
                            {
                                selecteDeveloper.map(developer => <SelectedDeveloper
                                    key={developer.id}
                                    developer={developer}

                                >

                                </SelectedDeveloper>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopersArea;