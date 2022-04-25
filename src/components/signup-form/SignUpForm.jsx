import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword ,createUserDoucmentFromAuth} from '../../utils/firebase/Firebase';

const defaultFormFeilds = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
   const [formFields, setFormFeilds] = useState(defaultFormFeilds);
   const {displayName,email,password,confirmPassword} = formFields;

   const resetFormFeilds = () => {
       setFormFeilds(defaultFormFeilds);
   }

   const handleSubmit = async (event) => {
       event.preventDefault();

       if(password !== confirmPassword){
           alert('Passwords do not match')
           return;
       }

       try {
           const {user} = await createAuthUserWithEmailAndPassword(email, password);
           
           await createUserDoucmentFromAuth(user, {displayName })
            resetFormFeilds();
       } catch (error) {
           if(error.code === 'auth/email-already-in-use'){
               alert('Cannot Create User, email already exists')
           }
           console.log('User creation encouterd an error', error)
           
       }
   }

   const handleChange = (event) => {
       const {name, value} = event.target

       setFormFeilds({ ...formFields, [name]: value})
   }

  return (
    <div>
        <h2>Sign Up with Your Email and Password</h2>
        <form onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input type="text" onChange={handleChange} name="displayName" value={displayName} required />

            <label>Email</label>
            <input type="email" onChange={handleChange} name="email" value={email} required />

            <label>Password</label>
            <input type="password" onChange={handleChange} name="password" value={password} required />

            <label>Confirm Password</label>
            <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm