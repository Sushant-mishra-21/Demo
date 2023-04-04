import React,{useState} from 'react'

const SignUp = () => {
  const [error,setError]=useState();
  var email;
  function chng(e){
    email = e.target.value;
    setError('')
  }
  function submit1(){
    if(!email){
      setError('Email is Required');
    }
  }
  return (
    <form> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={email}
      onChange={chng}
    />
    <div id="emailHelp" className="form-text">
     {error}
    </div>
  </div>
  
 
  <button type="button" className="btn btn-primary" onClick={submit1}>
    Submit
  </button>
</form>

  )
}

export default SignUp