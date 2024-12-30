import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {

  var [input, setinput] = useState({ Name: "", Age: "", Department: "", sal: "" })
  var navigate = useNavigate()
  
  var location = useLocation()
  console.log("a", location.state)
  
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const addHandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3004/update/" + location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate('/')
        })
    }
  
    else {
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate('/')
        })
    }
    
  }
  useEffect(() => {
    if (location.state !== null)
      setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Sal: location.state.val.Sal
      })
  },[])
  
  return (
    <div>
      <br /><b></b><br /><br />
      <Typography variant="h5" color="secondary">DETAILS</Typography><br />
      <TextField label="NAME" variant="filled" name='Name' value={input.Name} onChange={inputHandler}  /><br /><br />
      <TextField label="AGE" variant="filled" name='Age' value={input.Age} onChange={inputHandler}/><br /><br />
      <TextField label="DEPARTMENT" variant="filled" name='Department' value={input.Department} onChange={inputHandler} /><br /><br />
      <TextField label="SALARY" variant="filled" name='Sal' value={input.Sal} onChange={inputHandler}/><br /><br />
      <Button variant="contained" color="secondary" onClick={addHandler}> SUBMIT</Button>
    </div>
  )
}

export default Add