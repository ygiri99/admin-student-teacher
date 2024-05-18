import React from 'react';
import { Link } from 'react-router-dom';
import { LiaSchoolSolid } from 'react-icons/lia';
import { IoSchoolSharp }  from 'react-icons/io5';  


export default function Sidebar() {
    return (
        <div className='sidebar bg-info text-center text-black'>
            <h2><Link to='/' className='nav-link mt-3'><LiaSchoolSolid color='red'/>Layola<sup><IoSchoolSharp color='violet'/></sup></Link></h2><br />
            <Link className='nav-link' to="/student">Student</Link><br /><hr />
            <Link className='nav-link' to="/teacher">Teacher</Link><br /><hr />
        </div>
    )
}
