import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const googleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/');
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" required/>
                </form>
                <p>New to Super-Shop? <Link className='form-link' to='/signUp'>Create an account</Link></p>
                <button onClick={googleAuth} className='submitBtn'>Google</button>
            </div>
        </div>
    );
};

export default Login;