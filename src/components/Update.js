import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [id, setID] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setGender(localStorage.getItem('Gender'));
        setSalary(localStorage.getItem('Salary'));

    }, []);

    const updateAPIData = () => {
        axios.put(`https://backend-assignment2.herokuapp.com/api/emp/employees/${id}`, {
            first_name,
            last_name,
            email,
            gender,
            salary
        }).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Employee has been updated successfully!")
        }).catch(error => {
            setSuccessMessage("")
            setErrorMessage(error.response.data.message)
        }
        );
    }

    return (
        <div >
            <div>
                <span >Update employee</span>
                <div >
                    <div ></div>
                    <div>
                        <label > First Name </label>
                        <input value={first_name} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                        <label > Last Name </label>
                        <input value={last_name} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                        <label > Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"  />
                        <label > Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="countries">
                            <option selected disabled>Choose a gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        <label > Salary</label>
                        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder="Salary"  />
                        <p >{successMessage}</p>
                        <p >{errorMessage}</p>
                        <div >
                            <button onClick={updateAPIData} type="submit" >Update</button>
                            <Link to='/view'>
                                <button  >Back</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}