import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addData } from "./apidetails/StudentApi";

export default function Addstudent() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCoures] = useState('');
  const [marks, setMarks] = useState(undefined);
  const [percent, setPercent] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  //Adding data to Api
  const postData = async () => {
    if (checked) {
      try { await addData({ name, email, course, marks, percent, result }) }
      catch (error) { console.log(error) }
      navigate('/teacher');
    } else {
      alert("tick the agree box");
    }
  }

  //Calculating marks percentage
  useEffect(() => {
    if (marks) {
      let markArray = String(marks).split(',').map((mark) => Number(mark));
      let total = markArray.reduce((total, current) => total + current, 0);
      let p = (parseFloat(total) / 5).toFixed(2);
      setPercent(`${p}%`);
      p >= 40 ? setResult('PASS') : setResult('FAIL');
    }
    else setPercent('')
  }, [marks]);

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
            course
          </Label>
          <Input
            id="course"
            name="course"
            type="select"
            value={course}
            onChange={(e) => { setCoures(e.target.value) }} >
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
            5 Subject marks each out of 100
          </Label>
          <Input
            id="marks"
            name="marks"
            type="text"
            value={marks}
            onChange={(e) => {
              setMarks(e.target.value)
            }} />
        </div>
        <div className="col">
          <Label for="name">
            Percent
          </Label>
          <Input
            id="percentage"
            name="percentage"
            type="text"
            defaultValue={percent}

          />
        </div>
        <div className="col">
          <Label for="name">
            Result
          </Label>
          <Input
            id="Result"
            name="Result"
            type="text"
            defaultValue={result}

          />
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
