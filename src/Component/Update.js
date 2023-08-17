import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Update({students,setStudents}) {
        const history = useHistory("");
        const{id}=useParams();
        const editStudent = students[id];
        const [name,setName]=useState("");
        const [email,setEmail]=useState("");
        const [country,setCountry]=useState("");
        const [state,setState]=useState("");
        const [phone,setPhone]=useState("");
       
        useEffect(()=>{
          console.log(id);
        
          setName(editStudent.name)
          setEmail(editStudent.email)
          setCountry(editStudent.country)
          setState(editStudent.state)
          setPhone(editStudent.phone)
          console.log(students)
        },[editStudent]);
       function updateStudent(){
         const editData = {
          name : name,
          email : email,
          country : country,
          state : state,
          phone:phone
         } 
         
         students[id]= editData
         setStudents([...students])
         history.push("/");
       }
    
    return (
    <Base>
      
       
        
        <><><><><><><><span className="stud-bar"><h3>Update Student</h3></span><br /></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Enter NAME</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Enter Email</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Enter Country</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={country}
              onChange={(e) => setCountry(e.target.value)} />
          </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Enter State</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={state}
              onChange={(e) => setState(e.target.value)} />
          </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Enter Phone No</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
          </FormControl></><br /><br /><Button onClick={updateStudent} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Update</Button></>
    
      )
    </Base>
  )
}
