import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const [ newUser, setNewUser ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser);
        axios.post('http://localhost:8000/api/users/register', newUser, { withCredentials: true})
          .then(res => {
            console.log(res)
            navigate('/home');
          })
          .catch(err => console.log(err))
      }

    return (
        <div>
          <h1>Register</h1>
          <form onSubmit={ handleSubmit }>
            <div>
              <label >First Name: </label>
              <input value={ newUser.firstName } onChange={ e => setNewUser({...newUser, firstName: e.target.value})} type="text" />
            </div>
            <div>
              <label >Last Name: </label>
              <input value={ newUser.lastName } onChange={ e => setNewUser({...newUser, lastName: e.target.value})} type="text" />
            </div>
            <div>
              <label >Email: </label>
              <input value={ newUser.email } onChange={ e => setNewUser({...newUser, email: e.target.value})} type="email" />
            </div>
            <div>
              <label >Password: </label>
              <input value={ newUser.password } onChange={ e => setNewUser({...newUser, password: e.target.value})} type="password" />
            </div>
            <div>
              <label >Confirm Password: </label>
              <input value={ newUser.confirmPassword } onChange={ e => setNewUser({...newUser, confirmPassword: e.target.value})} type="password" />
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
    )
}

export default RegisterForm;