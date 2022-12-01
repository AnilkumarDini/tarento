import Navbar from "./NavBar"
import Task from "./Task"
import Footer from "./Footer";
import { useState } from "react";
import './task.css';
const Tasks = () => {
  return (
    <div>
        <Navbar/>
        <div className="task_content">
          <h1>
          <span>Howdy!</span>
          <br></br>
          <span>Lets</span>
          <span>&nbsp;</span>
          <br></br>
          <span>catch</span>
          <span>&nbsp;</span>
          <span>up</span>
          <span>&nbsp;</span>
          <br></br>
          <span>your</span>
          <br></br>
          <span>tasks</span>
          </h1>
          </div>

      <Task/>

        <Footer/>
    </div>
  )
}

export default Tasks