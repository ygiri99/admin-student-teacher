import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { MyContext } from '../App';

export default function UpdateTeacher() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [experience, setExperience] = useState(undefined);
    const navigate = useNavigate();

    const { updateTeacherData, updated, setUpdated } = useContext(MyContext);

    if(updated) {
        navigate('/teacher');
    }

    //Getting teacher details to update
    useEffect(() => {
        setUpdated(false);
        setId(sessionStorage.getItem('id'))
        setName(sessionStorage.getItem('name'))
        setEmail(sessionStorage.getItem('email'))
        setSubject(sessionStorage.getItem('subject'))
        setExperience(sessionStorage.getItem('experience'));

        sessionStorage.removeItem('id', 'name', 'email', 'subject', 'experience');
    }, [])

    return (
        <>
            <h3>Updating : {name}</h3>
            <Form>
                <FormGroup className="row">
                    <div className="col">
                        <Label for="name">
                            name
                        </Label>
                        <Input
                            id="name"
                            name="text"
                            placeholder="Enter name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <Label for="Email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <Label for="name">
                            subject
                        </Label>
                        <Input
                            id="subject"
                            name="subject"
                            type="select"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }} >
                            <option>
                                Select
                            </option>
                            <option>
                                UX/UI designer
                            </option>
                            <option>
                                Fullstack developer
                            </option>
                            <option>
                                Data science
                            </option>
                        </Input>
                    </div>
                </FormGroup>
                <FormGroup className="row">
                    <div className="col">
                        <Label for="experience">
                            Experience in Years
                        </Label>
                        <Input
                            id="experience"
                            name="experience"
                            type="number"
                            value={experience}
                            onChange={(e) => {
                                setExperience(e.target.value)
                            }} />
                    </div>
                </FormGroup>
                <Button className='bg-primary' onClick={() => updateTeacherData({ id, name, email, subject, experience })}>Update</Button>
            </Form>
        </>
    )
}
