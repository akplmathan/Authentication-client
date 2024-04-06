import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Verify = () => {
    const [loading,setLoading] = useState(true);
    const {token} = useParams();
    const verifyToken=async()=>{
        try {
           
            let response = await axios.get(`https://authentication-e2m2.onrender.com/api/verify/${token}`);
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        verifyToken()
    },[token])
    if(loading){
        return(
            <div>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczN3cjd0dTU3OWZlaWU4a3V0eDYycnI2dndoc2F2cnR2bHdkN21mciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvtt4mtViPOSrLYNFh/giphy.gif" alt="" />
            </div>
        )
    }

  return (
    <div>
        <h2>Verified SuccessFully</h2>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNwMzdxZndhczRpcjNxYzZ6cjk5ZDFveHcxcmwxbWIzNWlhNHpkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tf9jjMcO77YzV4YPwE/giphy.gif" alt="" />
    </div>
  )
}

export default Verify