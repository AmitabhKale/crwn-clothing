import './Authentication.scss'
import SignUpForm from '../../components/signup-form/SignUpForm';
import SignInForm from '../../components/signin-form/SignInForm';

const Authentication = () => {

  return (
    <div className='authentication-container'>
    <SignInForm />
    <SignUpForm />
  </div>
  )
}

export default Authentication