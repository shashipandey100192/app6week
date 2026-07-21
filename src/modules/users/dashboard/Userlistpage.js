import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Userlistpage() {

    const [userlist, updateusers] = useState([])


    const myapi = () => {
        axios.get(`${"https://sixweekbackend.onrender.com"}/alldata`).then((d) => {
            console.log(d.data.userslist);
            updateusers(d.data.userslist);
        })
    }

    useEffect(() => {
        myapi();
    }, []);


    const userdelete = (r) => {

            axios.delete(`${"https://sixweekbackend.onrender.com"}/userdelete/` + r).then((res) => {
                console.log(res);
                if(res.data.status===209)
                {
                alert(res.data.msg);
                }
                myapi();
            });
            
        }
       
        

    

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
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userlist.map((u) => {
                                    return (
                                        <tr>
                                            <th scope="row">{u._id}</th>
                                            <td>{u.email}</td>
                                            <td>{u.phone}</td>
                                            <td>{u.gender}</td>
                                            <td>{u.pass}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm' onClick={() => userdelete(u._id)}>Del</button>
                                            </td>
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