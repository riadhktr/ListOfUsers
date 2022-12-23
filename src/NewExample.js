import React,{useState} from 'react'

const NewExample = () => {

    const tab = [{id:1,name:'fraise'},{id:2,name:'kiwi'},{id:3,name:'ananas'}]
    const [res,setRes] = useState(tab);

    const sortedArray = ()=>{

    let result= [...res].sort((a,b)=> a.name > b.name ? 1 : -1)

    setRes(result)
    }

  return (
    <div>
<table>
<tr>
          
          <th>Name</th>
          
</tr>
{res.map((item)=>{
    return(
<tr key={item.id}>
    <td>{item.name}</td>
</tr>
    )
})}

</table>

<button onClick={sortedArray}>sort </button>
    </div>
  )
}

export default NewExample