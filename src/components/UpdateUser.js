import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateApi } from './apidetails/StudentApi';

export default function UpdateUser() {
    const [id,setId] = useState('');
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [course, setCoures] = useState('');
    const [marks, setMarks] = useState(null);
    const [percent, setPercent] = useState('');
    const navigate = useNavigate();
    
    const updateData = async() => {
        try{ await updateApi({id,name,email,course,marks,percent});}
        catch(error) {console.log(error)}
        navigate('/teacher');
    }
   
    //Getting student details to update
    useEffect(() => {
        setId(sessionStorage.getItem('id'))
        setName(sessionStorage.getItem('name'))
        setEmail(sessionStorage.getItem('email'))
        setCoures(sessionStorage.getItem('course'))
        setMarks(sessionStorage.getItem('marks'));
        sessionStorage.removeItem('id','name','email','course','mark');
    },[])
    
    useEffect(() => {
      if (marks) {
        let markArray = String(marks).split(',').map((mark) => Number(mark));
        let total = markArray.reduce((total, current) => total + current, 0);
        let p = (parseFloat(total) / 5).toFixed(2);
        setPercent(`${p}%`);
        // p >= 40 ? setResult('PASS') : setResult('FAIL');
      }
      else setPercent('')
    },[marks]);
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
                        course
                    </Label>
                    <Input
                        id="course"
                        name="course"
                        type="select"
                        value={course}
                        onChange={(e) => {setCoures(e.target.value)}} >
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
                    <Label for="marks">
                    5 Subject marks out of 100
                    </Label>
                    <Input
                        id="marks"
                        name="marks"
                        type="text"
                        value={marks}
                        onChange={(e) => {
                            setMarks(e.target.value)}}/>
                </div>
                <div className="col">
                    <Label for="name">
                        Percent
                    </Label>
                    <Input
                        id="percentage"
                        name="percentage"
                        type="text"
                        defaultValue={percent}/>                   
                </div>
            </FormGroup>
            <Button className='bg-primary' onClick={updateData}>Update</Button>
        </Form>
    </>
  )
}
