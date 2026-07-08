import React from 'react'

function About() {

const a= "kumar";

const b = ()=>{
    alert("welcome to reactjs");
}
const students = [10,20,30,50,40,50];
const user = {name:"ravi",age:20,phone:"8542454545",working:true};
const working = false;
const age = 10;

const myinput = "username";


  return (

    <div>
        <h3>dyn name : {a}</h3>
        <h3>{60/90}</h3>
        <h2>{"ravi singh"}</h2>
        <div>{<h4>this is heading four</h4>}</div>
        <button onClick={b}>submit</button>
        <div> {students}</div>
        <div>{user.name}</div>
        <div>{working? "ok" : "cancel"}</div>
        <h1>{age>=50? "overage" : age>=30? "agerage" : age>20? "valid" : "not valid"}</h1>
            <input type='text' value={myinput}/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 border bg-danger'>
                        <h2>this is bootstrap</h2>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default About