import React, {  useState } from "react";
import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/Firebase'
import FormInput from "../form-input/FormInput";
import './SignInForm.scss'
import Button from "../button/Button";
// import { UserContext } from "../../context/UserContext";

const defaultFormFeilds = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const [formFields, setFormFeilds] = useState(defaultFormFeilds);
  const {  email, password } = formFields;

  // const {setCurrentUser} = useContext(UserContext)

  const resetFormFeilds = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user)
      resetFormFeilds();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFeilds({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
    <h1>Sign In </h1>
    <h2>Already have an account?</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />
      <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}>
          Google sign in
        </Button>
      </div>
    </form>
  </div>
  );
};

export default SignInForm;
