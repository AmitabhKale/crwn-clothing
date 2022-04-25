
import SignUpForm from '../../components/signup-form/SignUpForm';
import { signInWithGooglePopup, createUserDoucmentFromAuth,} from '../../utils/firebase/Firebase'

const SignIn = () => {
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoucmentFromAuth(user)
  }

  return (
    <div>
      <h2>SignIn Page</h2>
    <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

    <SignUpForm />
    </div>
  )
}

export default SignIn