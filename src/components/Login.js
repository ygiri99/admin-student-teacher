import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { readApi } from './apidetails/StudentApi';


export default function Login() {

  const [formData, setFormData] = useState({ email: '' });
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    datas();
  }, []);

  const datas = async () => {
    try {
      const data = await readApi();
      setApiData(data);
    }
    catch (error) { console.log(error); }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  //Checking email
  const checkMail = (data) => {
    console.log(apiData[2])
    for (let i = 0; i < apiData.length; i++) {
      if (apiData[i].email === data.value) {
        return (apiData[i].id);
      }
    }
    alert('Not found');
  }

  //Handling login detail
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = e.target; console.log(email.value);
    let id = 0;
    id = checkMail(email);
    if (id) {
      navigate(`/student/${id}`);
    }

  }
  return (
    <div className="login">     
      <div className="form w-50">
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                id="email"
                name="email"
                placeholder="Enter your Email"
                type="email"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col><Label
              for="checkbox2"
              sm={2}
            >
              Checkbox
            </Label></Col>
            <Col
              sm={10}
            >
              <FormGroup check>
                <Input
                  id="checkbox2"
                  type="checkbox"
                  required='true'
                />
                {' '}
                <Label>
                  Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup
            check
            row
          >
            <Col
              sm={{
                offset: 2,
                size: 10
              }}
            >
              <Button className=" btn btn-success" type="submit">Submit
              </Button>
            </Col>
          </FormGroup>
          <FormGroup
            row
          >
            <Col
              sm={{
                offset: 2,
                size: 10
              }}
            >
              <span className="me-2">If not a member? <Link to='/registration' className="nav-link text-primary d-inline-block">SignUp</Link></span>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}
