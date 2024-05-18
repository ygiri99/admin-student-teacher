import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addTeacherData } from "./apidetails/StudentApi";

export default function AddTeacher() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [experience, setExperience] = useState(undefined);
  const navigate = useNavigate();

  //Adding data to Api
  const postData = async () => {
    const dataof = 'teacher';
    if (checked) {
      try { await addTeacherData({ name, email, subject, experience, dataof }) }
      catch (error) { console.log(error) }
      navigate('/teacher');
    } else {
      alert("tick the agree box");
    }
  }

  return (
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
        
        <div className="col">
          <FormGroup check className="mt-5">
            <Input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <Label check>
              Agree terms and condition
            </Label>
          </FormGroup>
        </div>
      </FormGroup>
      <Button className='bg-danger' onClick={() => postData()}>Submit</Button>
    </Form>
  )
}
