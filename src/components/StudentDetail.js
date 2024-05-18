import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../App';

export default function StudentDetail() {

  const { id } = useParams();
  const { getIdDetail, idDetail } = useContext(MyContext);



  useEffect(() => {
    getIdDetail(id);
  }, [id]);

  const { name, course, email, marks, percent } = idDetail;

  return (
    <div>
      <div className='px-3 fs-3'>
        <strong>StudentDetail</strong>
        <Link to='/student' className='nav-link float-end'>Back</Link>
      </div>
      {/* Student details */}
      <hr />
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Course: {course}</h4>
      <h4>Marks: {marks}</h4>
      <h4>Percent: {percent}</h4>
    </div>
  )
}
