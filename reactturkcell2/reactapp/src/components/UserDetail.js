import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserDetail = ({activeUserid}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserid}`)
        .then(res=>setUser(res.data))
        .finally(()=>setLoading(false))
    },[activeUserid])
  return (
    <div>
        <h2>Detail</h2>

        {
            loading&& <div>Loading...</div>
        }

       {!loading &&  <pre>{JSON.stringify(user,null,2)}</pre>}
    </div>
  )
}

export default UserDetail