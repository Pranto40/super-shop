import React from 'react';
import { Link } from 'react-router-dom';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
const provider = new GoogleAuthProvider();

const SignUp = () => {
    const googleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
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
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="confirm-password" name="confirm-password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" required/>
                </form>
                <p>New to Ema-John? <Link className='form-link' to='/login'>Login</Link></p>
                <button onClick={googleAuth} className='submitBtn'>Google</button>
            </div>
        </div>
    );
};

export default SignUp;