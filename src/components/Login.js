import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    const postData = () => {
        axios.post("https://react-assignment2-backend.herokuapp.com/api/user/login", {
            username: username,
            password: password,
        },
        ).then((response) => {
            navigate("/view")
        }).catch(error => {
            console.log(error)
            if (!error.response.data.status) {
                setLogin("Invalid username or password!")
            }
        });
    }

    return (
        <div >
            <div >
                <span >Login to your account</span>
                <div >
                    <div></div>
                    <div >
                        <label > Username </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label > Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <p >{login}</p>
                        <div >
                            <button onClick={postData} type="submit">Login</button>
                            <Link to='/register'>
                                <button  >Register!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}