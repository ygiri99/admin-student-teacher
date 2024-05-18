import { Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { deleteApi } from './apidetails/StudentApi';
import { GrView } from 'react-icons/gr';
import { MyContext } from '../App';

export default function Teacher() {

  const navigate = useNavigate();
  const { apiData, getData } = useContext(MyContext);


  const upDateTeacher = ({ id, name, email, subject, experience }) => {
    sessionStorage.setItem('id', id)
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('subject', subject)
    sessionStorage.setItem('experience', experience)
    navigate('/UpdateTeacher');
  }

  const view = (id) => {
    navigate(`${id}`)
  }

  const del = (id, name, dataof) => {
    if (window.confirm(`Do you want to delete ${name}?`)) {
      (async (id) => {
        await deleteApi(id);
        getData(`${dataof}`);
      })(id);
    } else {
      return;
    }
  }

  useEffect(() => {
    getData("teacher");
  }, []);

  return (
    <>
      <Button className='bg-success' onClick={() => navigate('/addteacher')}>AddTeacher</Button>
      <Button className='bg-info float-end' onClick={() => navigate('/')}>Dashboard</Button>
      <div>
        <Table hover>
          <thead className='container'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Experience</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data, index) => (
              <tr key={data.id}>
                <th scope="row">{index + 1}</th>
                <td> {data.name} </td>
                <td> {data.subject}</td>
                <td> {data.experience}</td>
                <td><Button className='bg-secondary' onClick={() => view(data.id)}><GrView /></Button></td>
                <td><Button className='bg-warning' onClick={() => upDateTeacher(data)}>Edit</Button></td>
                <td><Button className='bg-danger' onClick={() => del(data.id, data.name, data.dataof)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
