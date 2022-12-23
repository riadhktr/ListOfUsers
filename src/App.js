import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './App.css'
import { data } from './data';
import  Button  from 'react-bootstrap/Button';
import AddRow from './AddRow';


const App = () => {
  
const [search,setSearch] = useState()
const [tab, setTab] = useState(data)


/* nratebou tableau mel a lel z */
const sortTable = ()=>{
  setTab ([...data].sort((a, b) => a.first_name > b.first_name ? 1 : -1))
}
/* narej3ou lel tableau fel etat initial */
const unSortTable = ()=>{
  setTab (data)
}

/* add new user : n7el tableau w nzid element jdid */
const handelAdd =(newUser)=>{
  setTab([...tab,newUser])
}

const deleteUser =(ID)=>{
  setTab([...tab].filter(elem=> elem.id !== ID))
}

  return (
    <div >
      <div className='formulaire'>
      <Form>
        <Form.Control type="search" placeholder="search"
         style={{width:'200px'}}
         onChange={(e)=>setSearch(e.target.value)}/>
       </Form>
     </div>
     <div className='btn-box'>
     <div className='btnn'>
      <Button onClick={sortTable} > Sort Table</Button>
      <Button onClick={unSortTable}> reset</Button>
      <AddRow handelAdd={handelAdd}/>
    </div>
    </div>
    
      <div className='tableau'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {tab.filter((item)=>{
          return search ==="" || search=== undefined ? item :  item.first_name.toLowerCase().match(search)
        }).map(item=>{
         return (
         <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>
             <button onClick={()=>deleteUser(item.id)}>delete</button>
          </td>
         
        </tr>
        )
        })}
        
        
        
      </tbody>
    </Table>
     
    </div>
    </div>
  )
}

export default App