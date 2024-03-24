import React, { useState } from 'react';
import './logAdmin.css';
import { useDispatch } from 'react-redux';
import { logUser } from '../../store/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LogAdmin() {
    const dispatch = useDispatch();
    const [userCredential, setUserCredential ] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const validateUser = () => {
        const newErrors = {};

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(userCredential.email.trim())) {
            newErrors.email = 'Invalid email address';
        }
        else if (!userCredential.email.trim()) {
            newErrors.email = 'Email account is required';
        }
        if (!userCredential.password.trim()) {
            newErrors.password = 'Password is required';
        }
        else if (userCredential.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if(validateUser()) {
            dispatch(logUser(userCredential)).unwrap().then((response) => {
                toast.success('Login successful');
                navigate('/dashboard');
            }).catch((error) => {
                toast.error(error)
            })
        }
        else {
            toast.error('Invalid password or username');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredential({
            ...userCredential,
            [name]: value
        });
    };
    

  return (
    <div className='form_admin' >
        <div className="form_cont">
            <div className="form_head">
                <h1>Lens Of Damiano</h1>
            </div>
            <form action="" className="form_main" onSubmit={handleLogin}>
                <div className="form_inp">
                    <div className="inp_ctrl">
                        <input onChange={handleChange} name='email' type="email" placeholder='Your Email' />
                    </div>
                    <div className="inp_ctrl">
                        <input onChange={handleChange} name='password' type="password" placeholder='Your Password' />
                    </div>
                </div>
                <div className="submit_btn">
                    <button>Login</button>
                </div>
                <div className="forget">
                    <p>Forgot password</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogAdmin