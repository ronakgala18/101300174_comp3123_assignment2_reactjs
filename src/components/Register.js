import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const postData = () => {
        axios.post("https://backend-assignment2.herokuapp.com/api/user/signup", {
            username: username,
            password: password,
            email: email,
        },
        ).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Account has been created successfully!")
        }).catch(error => {
            setErrorMessage(error.response.data.message)

        });
    }

    return (
        <div >
            <div >
                <span >Create new account</span>
                <div >
                    <div ></div>
                    <div >
                        <label > Username </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"  />
                        <label > Email </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" />
                        <label > Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <p >{successMessage}</p>
                        <p >{errorMessage}</p>
                        <div >
                            <button onClick={postData} type="submit" >Register</button>
                            <Link to='/'>
                                <button >Back</button>
                            </Link>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}