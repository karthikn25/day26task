import './App.css';
import {Switch,Route} from "react-router-dom";
import StudentDashboard from './Component/StudentDashboard';
import { Add } from './Component/Add';
import { useState } from 'react';
import data from './Component/Data/Data';
import Update from './Component/Update';






function App() {
  const [students,setStudents]=useState(data);
  const [editStudent,setEditStudent]=useState({});
 
  return (
    <div className="App">
     
       <Switch>
     
         
       <Route exact path="/">
        <StudentDashboard
        students={students}
        setStudents={setStudents}
        setEditStudent={setEditStudent}
        />
        </Route>
        <Route path="/add">
        <Add 
        students={students}
        setStudents={setStudents}
        />
        </Route>
        <Route path="/edit/:id">
        <Update
        students={students}
        setStudents={setStudents}
        editStudent={editStudent}
        />
        </Route>
       </Switch>



      
    </div>
  );
}

export default App;
