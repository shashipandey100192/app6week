import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast,ToastContainer } from 'react-toastify';


function Userlogin() {
    const mynav = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm();


const formsubmit = (formdata)=>{
    console.log(formdata);
    if(formdata.email==="admin@gmail.com" && formdata.pass==="admin")
    {
        toast.success("welcome to dashboard",{theme:'dark',autoClose:2000});
       setTimeout(()=>{
         mynav('landing');
       },2000);

    }
    else
    {
        toast.warning("your email and password is wrong",{theme:'dark',autoClose:500});
    }

}
    
    
    return (
        <form onSubmit={handleSubmit(formsubmit)}>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6 border bg-light shadow p-4'>
                    <ToastContainer/>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className="h3 mb-3">User Login</p>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" {...register("email",{required:true})}  />
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass",{required:true})} />
                                    {errors.pass && <p className='text-danger'>password is required</p>}
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                   
                                    <input type="submit" value="login" class="btn btn-success" />
                                    <Link to='registor' className='ms-5'>New Registor </Link>
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

export default Userlogin