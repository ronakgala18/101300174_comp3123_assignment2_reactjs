import React, { useEffect, useState } from 'react';
// import { UilUser } from '@iconscout/react-unicons'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function View() {

    const [APIData, setAPIData] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        axios.get(`https://backend-assignment2.herokuapp.com/api/emp/employees`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const getData = () => {
        axios.get(`https://backend-assignment2.herokuapp.com/api/emp/employees`)
            .then((getData) => {
                setAPIData(getData.data);
            }).catch(error => {
                console.log(error)
            });
    }
    const onDelete = (id) => {
        axios.delete(`https://backend-assignment2.herokuapp.com/api/emp/employees/${id}`)
            .then(() => {
                setSuccessMessage("Employee has been deleted successfully")
                getData();
            })
            .catch(error => {
                console.log(error)
            });
    }

    const setData = (data) => {

        console.log(data);
        let { _id, first_name, last_name, email, gender, salary } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('First Name', first_name);
        localStorage.setItem('Last Name', last_name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Salary', salary);
    }

    return (
        <div >
            <div >
                <div>
                    <h2 >Employees</h2>
                    <Link to='/add'>
                        <button >
                    Add new employee</button>
                    </Link>

                    <a href="/">
                        Logout
                    </a>
                </div>
                <div >

                    <div >

                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {APIData.map((data) => {
                                return (
                                    <tbody>

                                        <tr>
                                            <td >
                                                <div>
                                                    <div >
                                                    </div>
                                                    <div >
                                                        <p >
                                                            {data.first_name} {data.last_name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td >
                                                <p >{data.email}</p>
                                            </td>
                                            <td >
                                            <span>
                                                    <span aria-hidden>
                                                        </span>
                                                    <Link to='/viewEmployee'>
                                                        <button onClick={() => setData(data)} >View</button>
                                                    </Link>

                                                </span>
                                                <span>
                                                    <span aria-hidden></span>
                                                    <Link to='/update'>
                                                        <button onClick={() => setData(data)} >Update</button>
                                                    </Link>

                                                </span>
                                                <span>
                                                    <span aria-hidden
                                                        ></span>
                                                    <button onClick={() => onDelete(data._id)} >Delete</button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                    <p >{successMessage}</p>
                </div>
            </div>
        </div>

    )
}