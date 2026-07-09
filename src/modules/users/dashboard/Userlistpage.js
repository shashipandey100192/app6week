import React, { useState } from 'react'

function Userlistpage() {

const [userlist, updateusers]=useState({
    id:10,
    first:"kumar",
    last:"singh",
    email:"kumar@gmail.com",
    phone:"8754545",
    city:"noida",
})




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
                            <tr>
                                <th scope="row">{userlist.id}</th>
                                <td>{userlist.first}</td>
                                <td>{userlist.last}</td>
                                <td>{userlist.email}</td>
                                <td>{userlist.phone}</td>
                                <td>{userlist.city}</td>
                                <td>actions</td>
                            </tr>

                        </tbody>
                    </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Userlistpage