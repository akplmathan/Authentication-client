import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../slices/userSlice';
import './style.css'

const Navbar = () => {
    const user = useSelector((state) => state.userInfo.user);
    const dispatch = useDispatch()
    console.log('name',user);
    return (
    <div className='nav'>
        <div>
            <h2>Authorization</h2>
        </div>
    <div>
        <ul>
            <li ><Link to={'/signup'}>Home</Link></li>
            <li><Link to={'/user'}> User</Link></li>
            <li>{user?user.name:<Link to={'/'}>Login</Link>}</li>
            {user && <li><Link to={'/logout'}>Logout</Link></li>}
        </ul>
    </div>

    </div>
  )
}

export default Navbar