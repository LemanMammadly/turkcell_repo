import React, { useEffect, useState } from 'react'
import axios from "axios"

const UserList = ({setActiveUserid}) => {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch((error)=>{console.log(error)})
        .finally(()=>setLoading(false))
    },[])

   return (
    <div>
        <h2>Users</h2>
        {
          loading&& <div>Loading...</div>
        }

        <ul className='user-list'>
        {
          users.map((user)=>(
            <li key={user.id} onClick={()=>setActiveUserid(user.id)}>{user.name}</li>
          ))
        }
        </ul>
    </div>
  )
}

export default UserList