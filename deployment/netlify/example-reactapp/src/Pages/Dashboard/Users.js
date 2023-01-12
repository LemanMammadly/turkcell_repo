import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]) 
  return (
    <div>
        <h2>Users</h2>
        <ul>
        {
            users.map((user)=>(
                <li key={user.id}>
                   <Link to={`${user.id}`} state={user}>{user.name}</Link>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Users