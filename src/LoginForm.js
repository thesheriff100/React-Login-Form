import { useEffect, useState } from "react";

const LoginForm = () => {
  const initialValues = {username: "", password: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)



  const handleChange =(e) =>{
  const {name, value} = e.target
  setFormValues({...formValues, [name]:value})
  console.log(formValues)
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
   setFormErrors(validate(formValues))
   setIsSubmit(true)
  }

  useEffect(()=>{
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0  && isSubmit){
     console.log(formValues) 
}
    },[formErrors])

  const validate = (values) =>{
  const errors = {}
  if (!values.username){
    errors.username = "Username is required!"
  }else if(values.username.length < 10){
    errors.username = "Username must be at least 10 characters!"
  }else if(values.username.length > 15){
    errors.username = "Username must be less than 15 characters!"
  }
  if(!values.password){
    errors.password = "Password is required!"
}else if(values.password.length < 6){
  errors.password = "Password must be at least 6 characters!"
}else if(values.password.length > 15){
  errors.password = "Password must be less than 15 characters!"
}
  return errors
}
  
  return (
    <div className="form">
      {Object.keys(formErrors).length === 0  && isSubmit ? (
             <div className="form-message">Login Successfully</div>
             ) :(
                 <pre></pre>
             )}
      <form onSubmit={handleSubmit}className="login-form">
      <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formValues.username}/>
    <p className="formm">{formErrors.username}</p>
   <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formValues.password}/>
    <p className="formm">{formErrors.password}</p>
    <button>Sign in</button>
    </form>
    </div>
  )
}

export default LoginForm
