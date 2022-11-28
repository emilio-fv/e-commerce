import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const LoginForm = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', { email: email, password: password }, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" onChange={ e => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password"onChange={ e => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm;