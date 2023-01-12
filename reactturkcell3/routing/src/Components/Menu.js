import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Menu = () => {
    const navigate=useNavigate();
  return (
    <div>
        <ul className='menu'>
        <li>
            <Link to="#/" onClick={()=>navigate(-1)}>Back</Link>
        </li>

            <li>
                <Link to='/'>Home Page</Link>
            </li>
            <li>
                <Link to='users'>Users</Link>
            </li>
            <li>
                <Link to='contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu