import React, { useEffect, useState } from 'react'
import { json, Link, useParams, useLocation } from 'react-router-dom'

const UserDetail = () => {
    const {id}=useParams();
    const location=useLocation();
    const [user,setUser]=useState(location.state)

    console.log(location);

    useEffect(()=>{
        if(!user?.id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    }
    },[id,user])

  return (
    <div>
        <h2>User Detail</h2>
       {
        user && <pre>{JSON.stringify(user,null,2)}</pre>
       }

       <Link to={`/users/${Number(id)+1}`}>Next User</Link>
    </div>
  )
}

export default UserDetail