import Navbar from "./NavBar"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer";
import Addtasks from "./AddTasks";

const Home = () => {
  const navigate=useNavigate()
  const navigatetoaddtasks=()=>{
    navigate('/home/addtasks')
  }
  return (

    <div>
        <Navbar/>
        <div className="heading">
        <h1>
        <span>W</span>
        <span>a</span>
        <span>z</span>
        <span>z</span>
        <span>u</span>
        <span>p</span>
        <span>&nbsp;</span>
        <span>H</span>
        <span>o</span>
        <span>m</span>
        <span>i</span>
        <span>e</span>
        <span>!</span>
        </h1>
        </div>
        <div className="home_content">Would you like to add more tasks?
        <br></br>
        <button className="create_account" onClick={()=>navigatetoaddtasks()}><span>Add Tasks</span></button>
        </div>
        <Footer/>
    </div>
  )
}

export default Home