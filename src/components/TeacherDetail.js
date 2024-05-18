import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../App';

export default function TeacherDetail() {

    const { id } = useParams();
    const { getIdDetail, idDetail } = useContext(MyContext);

    useEffect(() => {
        getIdDetail(id);
    }, [id]);

    //  console.log(idDetail);
    const { name, email, subject, experience } = idDetail;


    return (
        <div>
            <div className='px-3 fs-3'>
                <strong>teacherDetail</strong>
                <Link to='/teacher' className='nav-link float-end'>Back</Link>
            </div>
            {/* teacher details */}
            <hr />
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>subject: {subject}</h4>
            <h4>experience: {experience}</h4>
        </div>
    )
}
