import React, { useState } from 'react'

const LoginPopup = ({closeButton, fetchPaidData}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    

  return (
    <div style={{
        border: "2px solid",
        width: "500px",
        height: "300px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center horizontally and vertically
        backgroundColor : "white",
        zIndex : "2"
      }}>
    <button onClick={closeButton} style={{position: "relative", left: "44%", top: "1%"}}>Close</button>
    <h4 style={{fontSize : "24px"}}>Login Below</h4>
    <form onSubmit={(e) => fetchPaidData(username, password, e)}>
        <label style={{fontSize : "24px"}}>
            Username: 
            <input type='text' name='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} style={{height : "30px"}}/> <br/>
        </label>
        <label style={{fontSize : "24px"}}>
            Password: 
            <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={{height : "30px"}}/><br/>
        </label>
        <input type='submit' name='button' value="Submit" style={{marginTop : "24px" , width : "200px", height : "50px"}}/>
    </form>
    </div>
      
  )
}

export default LoginPopup
