import {  useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate()
  const navigatetosignup=()=>{
    navigate('/signup')
  }
  const navigatetohome=()=>{
    navigate('/home')
  }
  return (
    <div className='signin' >
      <div className='top'></div>
      <div className='bottom'></div>
      <div className='center'>

      <h2>Please Sign In</h2>
      {/* <label className='signin_label'>Name : </label> */}
      <input className='signin_input' placeholder='Username'></input>
      <br></br>
      {/* <label className='signin_label'>Password : </label> */}
      <input className='signin_input' placeholder='Password'></input>
      <br></br>
      <button className='sign_in' onClick={()=>navigatetohome()}>Log In</button>
      <br></br>
      <br></br>
      <button className='create_account' onClick={()=>navigatetosignup()}><span>Create Account</span></button>
      </div>
      </div>
  )
}

export default Signin