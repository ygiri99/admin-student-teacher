import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const Loginportal = () => {

    return (
        // Login links for student and teacher
        <div className='login-portal'>
            <Col xs='10' md='6'>
            <div className='bg-white p-4 rounded text-center'>
                <h2 className='mb-5'>Login as</h2>
                <Link to='/login' className='btn btn-primary me-3'>Student</Link>
                <Link to='/teacher' className='btn btn-success' >Admin</Link>
            </div>
            </Col>
        </div>
    )
}

export default Loginportal;