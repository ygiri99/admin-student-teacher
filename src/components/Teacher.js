import { Button, Table } from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteApi, readApi } from './apidetails/StudentApi';
import {GrView} from 'react-icons/gr';

export default function Teacher() {

    const navigate = useNavigate();
    const [apiData,setApiData] = useState([]);
  

    const upDate = ({id,name,email,course,marks,result}) => {
      sessionStorage.setItem('id',id)
      sessionStorage.setItem('name',name)
      sessionStorage.setItem('email',email)
      sessionStorage.setItem('course',course)
      sessionStorage.setItem('marks',marks)
      sessionStorage.setItem('result',result)
      navigate('/UpdateUser');
    }
  
    const view = (id) => {
      navigate(`${id}`)
    }
 
    const del = (id,name) => {
      if(window.confirm(`Do you want to delete ${name}?`)){
        (async(id) => {
          await deleteApi(id);
          datas();
        })(id);
      } else {
        return;
      }
    }
  
    useEffect(() => {
      datas();
  },[]);
  
  const datas = async() => {
    try { const data =await readApi();
           setApiData(data);
    }
  
    catch(error){console.log(error); }
  }
  
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
            {apiData.map((data,index) => (
              <tr key={data.id}>
              <th scope="row">{index+1}</th>
              <td> {data.name} </td>
              <td> {data.course}</td>
              <td> {data.marks}</td>
              <td> {data.percent}</td>
              <td> {data.result}</td>
              <td><Button className= 'bg-white' onClick={() => view(data.id)}><GrView/></Button></td>
              <td><Button className= 'bg-warning' onClick={() => upDate(data)}>Edit</Button></td>
              <td><Button className='bg-danger' onClick={() => del(data.id,data.name)}>Delete</Button></td>
            </tr> 
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
