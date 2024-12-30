import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const View = () => {
  var [user, setuser] = useState([])
  var navigate=useNavigate()
 
    axios.get("http://localhost:3004/view").then((response) => {
      console.log(response.data);
      setuser(response.data);
    })
  
    // .catch((error) => console.log(error)
const delvalue = (id) => {
  console.log(id)
  axios.delete('http://localhost:3004/remove/' + id)
    .then((res) => {
        alert(res.data.message)
        window.location.reload()
    })
  
//  .catch((error) => console.log(error))
}
  const updatevalue = (val) => {
    navigate("/add",{ state: { val } })
    
  }
  return (
    <div>
      <br /><br /><br />
      <TableContainer component={Paper}>
        <Table border="2">
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>NAME</b></TableCell>
              <TableCell align="center"><b>AGE</b></TableCell>
              <TableCell align="center"><b>DEPARTMENT</b></TableCell>
              <TableCell align="center"><b>SALARY</b></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val) => {
              return (
                <TableRow>
                  <TableCell align="center">{val.Name}</TableCell>
                  <TableCell align="center">{val.Age}</TableCell>
                  <TableCell align="center">{val.Department}</TableCell>
                  <TableCell align="center">{val.Sal}</TableCell>
                  <TableCell>
                    <Button variant='contained' color="error" onClick={() => {delvalue(val._id)}}>Delete</Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color="inherit" onClick={() => { updatevalue(val) }}>Update</Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View