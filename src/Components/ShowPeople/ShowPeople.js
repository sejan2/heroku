import React from 'react';


import './ShowPeople.css'
const ShowPeople = (props) => {
    const { _id, name, description, price } = props.volume;
    const handleDelete = id => {
        const url = `http://localhost:7000/volunteers/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }


    return (

        <div className="ul-edit" >
            <ul>
                <li>{name}</li>
            </ul>
            <ul>
                <li>{description}</li>
            </ul>
            <ul>
                <li>{price}</li>
            </ul>
            <ul>
                <button onClick={() => handleDelete(_id)}>Delete</button>
            </ul>
        </div>


    );
};

export default ShowPeople;

