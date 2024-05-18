import { createContext, useState } from 'react';
import { readApi, updateApi, updateTeacherApi, readIdApi, deleteApi } from './components/apidetails/StudentApi';
import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Teacher from './components/Teacher';
import Student from './components/Student';
import Addstudent from './components/Addstudent';
import UpdateStudent from './components/UpdateStudent';
import StudentDetail from './components/StudentDetail';
import TeacherDetail from './components/TeacherDetail';
import AddTeacher from './components/AddTeacher';
import UpdateTeacher from './components/UpdateTeacher';

//Creating Context Hook
export const MyContext = createContext(); 

function App() {
   const [apiData, setApiData] = useState([]);
   const [updated, setUpdated] = useState(false);
  const [idDetail, setIdDetail] = useState('');

  // Reading data from api
  const getData = async (required) => {
    try {
      const data = await readApi();
      setApiData(data.filter(ele => {
        if (required === "student") {
          return ele.dataof === "student";
        }
        else return ele.dataof === "teacher";
      }));
    }
    catch (error) { console.log(error); }
  }

  // Updating Student detail
  const updateStudentData = async ({ id, name, email, course, marks, percent, result }) => {
    try { await updateApi({ id, name, email, course, marks, percent, result }); }
    catch (error) { console.log(error) }
    setUpdated(true);
  }

  // Updating Teacher detail
  const updateTeacherData = async ({ id, name, email, subject, experience }) => {
    try { await updateTeacherApi({ id, name, email, subject, experience }); }
    catch (error) { console.log(error) }
    setUpdated(true);
  }

  // Getting user data using Id
  const getIdDetail = async (id) => {
    try {
      const data = await readIdApi(id);
      setIdDetail(data);
    } catch (error) { console.log(error) }
  }

  // Deleting user data
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

  const values = {
    apiData,
    setApiData,
    getData,
    updateStudentData,
    updateTeacherData,
    updated,
    setUpdated,
    idDetail,
    setIdDetail,
    getIdDetail,
    del
  };

  return (
    <MyContext.Provider value={values}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='student' element={<Student/>}/>
            <Route path='teacher' element={<Teacher/>}/>
            <Route path='addstudent' element={<Addstudent/>}/>
            <Route path='addteacher' element={<AddTeacher/>}/>
            <Route path='updatestudent' element={<UpdateStudent/>}/>
            <Route path='updateteacher' element={<UpdateTeacher/>}/>
            <Route path='teacher/:id' element={<TeacherDetail/>}/>
            <Route path='student/:id' element={<StudentDetail/>}/>
          </Route>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
