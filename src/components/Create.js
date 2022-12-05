import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Create() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const postData = () => {
        axios.post("https://backend-assignment2.herokuapp.com/api/emp/employees", {
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            salary: salary,
        },
        ).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Employee has been successfully added")
        }).catch(error => {
            setSuccessMessage("")
            setErrorMessage(error.response.data.message)
        });
    }


    return (
        <div>
            <div>
                <span>Add new employee</span>
                <div>
                    <div></div>
                    <div>
                        <label> First Name </label>
                        <input value={first_name} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label > Last Name </label>
                        <input value={last_name} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label > Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label > Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="countries" >
                            <option selected>Choose a gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        <label > Salary</label>
                        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder="Salary" />
                        <p >{successMessage}</p>
                        <p >{errorMessage}</p>
                        <div>
                            <button onClick={postData} type="submit" >Add</button>
                            <Link to='/view'>
                                <button>Back</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}