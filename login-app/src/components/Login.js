import React , {useState, useEffect}from 'react';
import './Login.css'

function Login(){
    const [username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const [info, setInfo] = useState("Please Login !!");

    function usernameChangeHandler(event){
        setUsername(event.target.value);
    }


    function PasswordChangeHandler(event){
        setPassword(event.target.value);
    }

    // useEffect(() => {
    //     setInfo("Please Login !!");
    //   }, [info]);

    function submitHandler(event){
        event.preventDefault();


        if (username && password){
            if(username==="admin" &&password==="admin"){
                setInfo("Logged in successfully");
            }else{
                setInfo("Login Failed")
            }
        } else {
            alert('Please fill the data !!!');
        }
    }



    return(
        <div className='login-form'>
            <h2>Login Form</h2>
            <form onSubmit={submitHandler}>
                <div className='container'>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" onChange={usernameChangeHandler} value={username}/>

                <label>Password</label>
                <input type="password" placeholder="Enter Password"  onChange={PasswordChangeHandler} value={password}/>
            
                <button type="submit">Login</button>
                </div>
            </form>
            
            <h3>{info}</h3>
        </div>
    );
}


export default Login
