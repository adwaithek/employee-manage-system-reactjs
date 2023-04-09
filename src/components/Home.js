import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaEdit,FaRegTrashAlt,FaUserPlus} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';

function Home() {
  const history=useNavigate();
  const handleDelete=(id)=>{
    alert('Are you sure you want to delete :)')
    console.log(Employee.map((item)=>item.id).indexOf(id))
    let index=(Employee.map((item)=>item.id).indexOf(id))
    console.log(index)
    Employee.splice(index,1)
    console.log(Employee)
    history('/')
  }

  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id)
    localStorage.setItem("NAME",empname)
    localStorage.setItem("AGE",age)
    localStorage.setItem("DESIGNATION",designation)
    localStorage.setItem("SALARY",JSON.stringify(salary))
  }

  
  return (             
    <div>
        <h1 className='text-center mt-5'>Employee Management System</h1>
        <p className='p-4'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. </p>
     <Link to={'/add'}><Button className='btn btn-success ms-5'>Add<FaUserPlus/></Button></Link>  
         <Table striped bordered hover  style={{margin:"50px",border:"2px solid "}}  >
      <thead>
        <tr>
         <th>Id</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Designatoin</th>
          <th>Salary</th>
          <th>Action</th>
           </tr>
      </thead>
      <tbody>
       {
        Employee && Employee.length > 0 ?
        Employee.map(item=>(
            <tr>
                 <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>    <Link to={'/edit'}><Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaEdit/></Button></Link>  
                 <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaRegTrashAlt/></Button> </td>
               
            </tr>
        ))
        :"no data here"
       }
        
      </tbody>
    </Table>
    </div>
    
  )
}

export default Home