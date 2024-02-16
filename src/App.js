import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Teacher from './components/Teacher';
import Loginportal from './components/Loginportal';
import Student from './components/Student';
import Addstudent from './components/Addstudent';
import UpdateUser from './components/UpdateUser';
import StudentDetail from './components/StudentDetail';

function App() {
  // const MyContext = createContext();
  return (
    
      <div className="App">
        {}
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='teacher' element={<Teacher/>}/>
            <Route path='addstudent' element={<Addstudent/>}/>
            <Route path='updateuser' element={<UpdateUser/>}/>
            <Route path='teacher/:id' element={<StudentDetail/>}/>
            <Route path='student/:id' element={<Student/>}/>
          </Route>
          <Route path='loginportal' element={<Loginportal/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </div>
   
  );
}

export default App;
