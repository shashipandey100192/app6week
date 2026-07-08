import React from 'react'
import { Link } from 'react-router-dom'


function Userlogin() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6 border bg-light shadow p-4'>

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className="h3 mb-3">User Login</p>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="button"  value="login" class="btn btn-success" />
                                    <Link to='registor' className='ms-5'>New Registor </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Userlogin