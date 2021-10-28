import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import './AddVolunteer.css'

const AddVolunteer = () => {
    const nameRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();


    const handlehtmlForm = e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const des = desRef.current.value;
        const imgs = imgRef.current.value;
        const newValunteer = { title: name, desc: des, banner: imgs };
        console.log(newValunteer)

        fetch('http://localhost:7000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newValunteer)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Added Successfully.")
                }
                e.target.reset();

            });
    }

    return (
        <div>
            <Container>
                <h2 className="h2-title text-danger">Add Event</h2>
                <hr />
                <br />
                <br />
                <form onSubmit={handlehtmlForm} >
                    <label className="label-text"><b>Event Name</b></label>
                    <input ref={nameRef} type="text" required placeholder="name" />
                    <label htmlFor="lname"><b>Event Description</b></label>
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Event Description.." />
                    <label htmlFor="lname"><b>Image Link</b></label>
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Image Link.." />

                    <input type="submit" value="Submit" />
                </form>

            </Container>
        </div>
    );
};

export default AddVolunteer;