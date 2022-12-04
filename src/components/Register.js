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
        axios.post("https://react-assignment2-backend.herokuapp.com/api/user/signup", {
            username: username,
            email: email,
            password: password,
        },
        ).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Account has been registered successfully!")
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
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label > Email </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label > Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
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