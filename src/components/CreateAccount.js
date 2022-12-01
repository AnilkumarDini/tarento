import { useNavigate } from "react-router-dom";
  const CreateAccount = () => {
  const navigate = useNavigate()
  const navigatetosignin=()=>{
    navigate('/')
  }
  return (
    <div className='signin' >
    <div className='top'></div>
    <div className='bottom'></div>
    <div className='center'>
      <h2>Hey! Let's Catch Up</h2>
      <input placeholder='Enter username'></input>
      <br></br>
      <input placeholder='Enter Password'></input>      
      <br></br>
      <input placeholder='Confirm Password'></input>
      <br></br>
      <button className='sign_in' onClick={()=>navigatetosignin()}>Create Account</button>
    </div>
    </div>
  )
}

export default CreateAccount