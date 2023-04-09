import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  
  const [ id,setId]=useState('')
  const [ empname,setEmpname]=useState('')
  const [ age,setAge]=useState('')
  const [ designation,setDesignation]=useState('')
  const [ salary,setSalary]=useState(0)

let history=useNavigate()

 const handledata=(e)=>{
  e.preventDefault();
  let ids=uuid()
  console.log(ids);
  let uniqueId=ids.slice(0,8)
  console.log(uniqueId);
  Employee.push({
    id: uniqueId,
    empname:empname,
    age:age,
    designation:designation,
    salary:salary,
  })
  history('/')

  }
  return (
    <div>
       <>
   
   <h1 className='text-center fw-bold m-5'>Add Employee Details</h1>
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
       <Form.Control type="text" placeholder="Enter Your Name"
        // value={empname} 
         onChange={(e)=>setEmpname(e.target.value)}  required
        />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Age</Form.Label>
       <Form.Control type="text" placeholder="Enter Your Age" 
      //  value={age} 
      onChange={(e)=>setAge(e.target.value)} required
        />
          </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Designation</Form.Label>
       <Form.Control type="text" placeholder="Enter your Designation" 
      //  value={designation}
       onChange={(e)=>setDesignation (e.target.value)} required
        />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Salary</Form.Label>
       <Form.Control type="text" placeholder="Enter your Salary"
        // value={salary} 
        onChange={(e)=>setSalary(e.target.value)} required
         />
     </Form.Group>



     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check type="checkbox" label="I Agree" />
     </Form.Group>
     <Button variant="primary" type="submit" onClick={(e)=>handledata(e)}>
       Add
     </Button>
   </Form>
   </Col>
 </Row>
   </>
    </div>
  )
}

export default Add