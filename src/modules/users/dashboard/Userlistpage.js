import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Userlistpage() {

const [userlist, updateusers]=useState([])


const myapi = ()=>{
    axios.get("https://dummyjson.com/users").then((d)=>{
        console.log(d.data.users);
        updateusers(d.data.users);
    })
}

useEffect(()=>{
    myapi();
},[]);


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 mt-3'>
                    <div className='card p-3'>
                        <h3>Users List</h3>
                    <table class="table table-bordered border-primary   ">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userlist.map((u)=>{
                                return(
                                    <tr>
                                <th scope="row">{u.id}</th>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.email}</td>
                                <td>{u.phone}</td>
                                <td>{u.city}</td>
                                <td>actions</td>
                            </tr>
                                )
                            })}
                            

                        </tbody>
                    </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Userlistpage