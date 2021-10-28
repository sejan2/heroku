import React, { useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
import './Volunteer.css'
import { Container } from 'react-bootstrap';


const Volunteer = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const desRef = useRef();
    const bookLibrary = useRef();
    const imgRef = useRef();

    const handlehtmlForm = e => {
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const book = bookLibrary.current.value;
        const image = imgRef.current.value;

        const Newuser = { name: name, email: email, description: description, library: book, img: image }

        fetch('http://localhost:7000/volunteer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Newuser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We Successfully added your collection on our database.');

                }
                e.target.reset()
            })


        e.preventDefault()
    }
    return (
        <Container>
            <div className="font register-volunteer">
                <h2 className="text-primary">Register as a Volunteer.</h2>
                <form onSubmit={handlehtmlForm}>
                    <input ref={nameRef} type="text" required placeholder="Full name" />
                    <input ref={emailRef} type="text" required placeholder="Type email or username" />
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Event Description.." />
                    <input ref={bookLibrary} required type="text" id="lname" name="lastname" placeholder="Organize book at library." />
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Insert image link" />
                    <input type="submit" value="Registration" />
                </form>
            </div>
        </Container>
    );
};

export default Volunteer;

