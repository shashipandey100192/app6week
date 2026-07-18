import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
function Userregistor() {

 const {register,handleSubmit,formState: { errors }} = useForm();

const myform = (d)=>{
    console.log(d)
    axios.post("http://localhost:8900/registor",d).then((r)=>{
        console.log(r);
        if(r.data.status===211)
        {
            alert(r.data.msg);
            
        }
    })
}


  return (
    <form onSubmit={handleSubmit(myform)}>
   <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 border bg-light shadow p-4'>

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className="h3 mb-3">Registor Users</p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" {...register("email")} name='email'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input type="text" class="form-control" {...register("phone")} name='phone'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")} name='gender'>
                                      <option>Gender</option>
                                      <option>male</option>
                                      <option>female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass")} name='pass'/>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="submit"  value="login" class="btn btn-success" />
                                    {/* <Link to='registor' className='ms-5'>New Registor </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </form>
  )
}

export default Userregistor