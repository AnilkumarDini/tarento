import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
const Addtasks = () => {
  const navigate=useNavigate()
  const navigateback=()=>{
    navigate('/home')
  }
  return (
    <div className="addtasks">
      {/* <div className='top'></div>
      <div className='bottom'></div> */}
      {/* <div className='center'> */}

        <h2>Add your tasks</h2>
        {/* <label >Task : </label> */}
        <input placeholder="Task"></input>
        <br></br>
        {/* <label >Due Date : </label> */}
        <input  placeholder="Due Date"></input>
        <br></br>
        {/* <label >Team Name: </label> */}
        <input  placeholder="Team Name"></input>
        <br></br>
        <button className="add_btn2">Add Task</button>
        <button className="add_btn1" onClick={()=>navigateback()}>Go Back</button>
    </div>
    // </div>
  )
}

export default Addtasks