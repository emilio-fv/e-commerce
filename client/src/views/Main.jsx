import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Main = () => {
    const [ loggedInUser, setLoggedInUser ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/loggedInCheck', { withCredentials: true })
            .then(res => {
                console.log(res);
                setLoggedInUser(res.data);
            })
            .catch(err => {
                console.log(err)
                navigate('/');
            })
    }, []);

    const handleLogoutButton = (e) => {
        console.log("logout button works");
        axios.get('http://localhost:8000/api/users/logout', { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Welcome, { loggedInUser.firstName }!</h1>
            <button onClick={e => handleLogoutButton(e) }>Logout</button>
        </>
    )
}

export default Main;