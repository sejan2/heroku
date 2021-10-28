import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowPeople from '../ShowPeople/ShowPeople';
import './volunteer.css'

const VolunteersTotal = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/volunteers')
            .then(res => res.json())
            .then(data => {
                setVolunteer(data)
                console.log(data)
            })
    }, [])
    return (
        <>

            <div className="edit-flex">
                <h3>name</h3>
                <h4>Email</h4>
                <h3>passsword</h3>
                <h3>Delete</h3>
            </div>
            {
                volunteer.map(volume => <ShowPeople key={volume._id} volume={volume}></ShowPeople>)
            }

        </>
    );
};

export default VolunteersTotal;