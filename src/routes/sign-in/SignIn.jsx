import React from 'react'
import {signInWithGooglePopup, createUserDoucmentFromAuth} from '../../utils/firebase/Firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoucmentFromAuth(user)
  }
  return (
    <div>
      <h2>SignIn Page</h2>
    <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn