import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputVal;
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setInputVal({...inputVal, [name]: value});
    };

    const handleError = (err) => 
        toast.error(err, {
            position: "top-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right"
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3002/signup", {...inputVal}, { withCredentials: true });
            const { success, message } = data;
            console.log(data);
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                navigate("/login");
                }, 1000);
            } else {
                    handleError(message);
            }
        } catch (error) {
                    console.log(error);
        }
        setInputVal({...inputVal, email: "", password: "", username: ""});
    };
    

    return ( 
        <div className='form_container'>
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' value={username} placeholder='Enter your username' onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} placeholder='Enter your email' onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} placeholder='Enter your password' onChange={handleOnChange}/>
                </div>
                <button type='submit'>Create your Zerodha Account</button>
                <span>
                    Already have an account? <Link to={'/login'}>login</Link>
                </span>
            </form>
           <ToastContainer />
        </div>
     );
}

export default Signup;