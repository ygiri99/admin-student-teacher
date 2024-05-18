import { Button, Table } from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import {GrView} from 'react-icons/gr';
import { MyContext } from '../App';

export default function Student() {

    const navigate = useNavigate();
    const {apiData,getData, del} = useContext(MyContext);

    const upDate = ({id,name,email,course,marks,result}) => {
      sessionStorage.setItem('id',id)
      sessionStorage.setItem('name',name)
      sessionStorage.setItem('email',email)
      sessionStorage.setItem('course',course)
      sessionStorage.setItem('marks',marks)
      sessionStorage.setItem('result',result)
      navigate('/updatestudent');
    }
  
    const view = (id) => {
      navigate(`${id}`)
    }
  
    useEffect(() => {
      getData("student");
  },[]);
  
  return (
    <>
        <Button className='bg-success' onClick={() => navigate('/addstudent')}>AddStudent</Button>
        <Button className='bg-info float-end' onClick={() => navigate('/')}>Dashboard</Button>
      <div>
        <Table hover>
          <thead className='container'>
            <tr>
              <th >Id</th>
              <th >Name</th>
              <th >Course</th>
              <th >marks</th>
              <th >Percent</th>
              <th>Result</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((stud,index) => (
              <tr key={stud.id}>
              <th scope="row">{index+1}</th>
              <td> {stud.name} </td>
              <td> {stud.course}</td>
              <td> {stud.marks}</td>
              <td> {stud.percent}</td>
              <td> {stud.result}</td>
              <td><Button className= 'bg-secondary' onClick={() => view(stud.id)}>{<GrView/>}</Button></td>
              <td><Button className= 'bg-warning' onClick={() => upDate(stud)}>Edit</Button></td>
              <td><Button className='bg-danger' onClick={() => del(stud.id,stud.name,stud.dataof)}>Delete</Button></td>
            </tr> 
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
