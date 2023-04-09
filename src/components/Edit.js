import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const [ id,setId]=useState('')
  const [ empname,setEmpname]=useState('')
  const [ age,setAge]=useState('')
  const [ designation,setDesignation]=useState('')
  const [ salary,setSalary]=useState(0)
 
  useEffect(()=>{
setId(localStorage.getItem("ID"))
setEmpname(localStorage.getItem("NAME"))
setAge(localStorage.getItem("AGE"))
setDesignation(localStorage.getItem("DESIGNATION"))
setSalary(JSON.parse(localStorage.getItem("SALARY")))
  },[]) 

console.log(id)
console.log(empname)

var index=Employee.map(item=>item.id).indexOf(id);
console.log(index)


let history=useNavigate()


const handleupdate=(e)=>{
  e.preventDefault()
  let emp=Employee[index]


  console.log(emp)
  emp.empname=empname
  emp.age=age
  emp.designation=designation
  emp.salary=salary

  console.log(emp)

  history('/')
}

  return (
    <>
   
    <h1 className='text-center fw-bold m-5'>Update Employee Details</h1>
    <p className='p-4'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. </p>
  <Row>
    <Col>
    <img style={{width:'600px' ,height:'500px'}} src='https://cdn-icons-png.flaticon.com/512/1869/1869679.png'></img>
    </Col>

    <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 className='text-center'>Update Your Details</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={empname}  onChange={(e)=>setEmpname(e.target.value)}  required/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age" value={age} onChange={(e)=>setAge(e.target.value)} required />
           </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation" value={designation} onChange={(e)=>setDesignation (e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleupdate(e)}>
        Update
      </Button>
    </Form>
    </Col>
  </Row>
    </>
  )
}

export default Edit