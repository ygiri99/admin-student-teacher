import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { readIdApi } from '../components/apidetails/StudentApi'
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default function Student() {

  //Id from url
  const { id } = useParams();

  const [studentDetail, setStudentDetail] = useState('');

  const studentData = async (id) => {
    try {
      const data = await readIdApi(id);
      setStudentDetail(data);
    } catch (error) { console.log(error) }
  }

  useEffect(() => {
    studentData(id);
  }, [id]);

  // console.log(studentDetail);

  const { name, course, email, marks, percent } = studentDetail;


  return (
    <>
      <div className='px-1 fs-2'>
        <strong>StudentDetail</strong>
        <Link to='/' className='nav-link float-end'>Log Out</Link>
      </div>

      {/* Student details  and get record*/}

      <hr />
      <div className='px-1'>
        <h4>Name: {name}</h4>
        <h4>Course: {course}</h4>
        <h4>Marks: {marks}</h4>
        <h4>Percent: {percent}</h4>
        <h4>Email: {email}</h4><br />
        <div className=''>
          <Form>
            <FormGroup>
              <Label for="exampleFile">
                <h4> Choose record to upload:</h4>
              </Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
              />
            </FormGroup>
          </Form>
        </div>
      </div>
    </>
  )
}
