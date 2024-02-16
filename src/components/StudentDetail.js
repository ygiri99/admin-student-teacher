import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { readIdApi } from '../components/apidetails/StudentApi'

export default function StudentDetail() {

  const {id} = useParams();

  const [studentDetail, setStudentDetail] = useState('');

  const studentData = async(id) => {
    try {
     const data = await readIdApi(id);
     setStudentDetail(data);
    } catch (error) {console.log(error)}
 }

 useEffect(() => {
  studentData(id);
 },[]);

 console.log(studentDetail);
 const {name,course,email,marks,percent} = studentDetail;


  return (
    <div>
      <div className='px-3 fs-3'>
      <strong>StudentDetail</strong>
      <Link to='/teacher' className='nav-link float-end'>Back</Link>
      </div>
      {/* Student details */}
      <hr/>
      <h4>Name: {name}</h4>
      <h4>Course: {course}</h4>
      <h4>Marks: {marks}</h4>
      <h4>Percent: {percent}</h4>
      <h4>Email: {email}</h4>
    </div>
  )
}
