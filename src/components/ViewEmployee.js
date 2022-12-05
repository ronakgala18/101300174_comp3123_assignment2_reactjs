import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ViewEmployee() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setGender(localStorage.getItem('Gender'));
        setSalary(localStorage.getItem('Salary'));

    }, []);

    return (
        <div >
            <div>
                <span >Employee Information</span>
                <div>
                    <div></div>
                    <div >
                        <span > Name </span>
                        <span ><span></span>{first_name} {last_name}</span>
                        <span > Email</span>
                        <span ><span></span>{email}</span>
                        <span > Gender</span>
                        <span ><span></span>{gender}</span>
                        <span > Salary</span>
                        <span ><span></span>{salary}</span>
                        <div >
                            <Link to='/view'>
                                <button >Back</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}