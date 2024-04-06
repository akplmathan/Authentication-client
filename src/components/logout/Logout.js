import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../slices/userSlice';
import './style.css'

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const ok=()=>{
        dispatch(removeUser());
        localStorage.removeItem('token');
        navigate('/')    
    }
    const cancel=()=>{
        navigate('/user')
    }
  return (
    <div className='logout'>
        
        <div className="container">
        <p>Are You Sure Want to Logout?</p>
        <ul>
            <p onClick={ok}>Ok</p>
            <p onClick={cancel}>Cancel</p>
        </ul>
        </div>
    </div>
  )
}

export default Logout