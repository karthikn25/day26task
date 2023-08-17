import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

export function Add({students,setStudents}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [country,setCountry]=useState("");
    const [state,setState]=useState("");
    const [phone,setPhone]=useState("");
    const history = useHistory("");
    const createStudent = () =>{
      const newStudents={
         name:name,
         email:email,
         country:country,
         state:state,
         phone:phone,
      }
     setStudents([...students,newStudents])
     history.push("/")
     }
    return(
    <Base> <><><><><><><span className="stud-bar"><h3>Add StudentList</h3></span><br /><FormControl fullWidth sx={{ m: 1 }} variant="standard">
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
        </FormControl></><br /><br /><Button onClick={createStudent} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Add</Button></>
  
        </Base>
    )
  }