import React from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";



function StudentDashboard({students,setStudents,setEditStudent}){
    const history = useHistory("");  
    const deleteStudent=(studId)=>{
        const remainingStudents=students.filter((stud,idx)=>idx !== studId)
        setStudents(remainingStudents)
    }
   
   return(
        <Base>
             
       <span className="stud-bar"><h3>StudentList</h3> <button onClick={()=>history.push("/add")} style={{marginRight:"100px"}} >Add Students</button> </span>
        <br/>
        <div className="container">
      
        <div className="card-container">
           
          {students.map((stud,idx)=>(
            <div className="stud-card" key={idx}>
               <h3>{stud.name}</h3>
               <p>{stud.email}</p>
               <p>{stud.country}</p>
               <p>{stud.state}</p>
               <p>{stud.phone}</p>
               <div className="control">
               <button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>{" "}
               <button onClick={()=>deleteStudent(idx)}>Delete</button></div>
               
             </div>
           ))}
        </div>
        </div>

        </Base>
       
    )
}

export default StudentDashboard


