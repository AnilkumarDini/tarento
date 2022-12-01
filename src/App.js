import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount"
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Teams from "./components/Teams";
import Progress from "./components/Progress";
import AddTasks from './components/AddTasks';
const App=()=>{
  return (
    <BrowserRouter>  
    <div className="App">
      <Routes>
        <Route path='/' element ={<SignIn/>}></Route>
      </Routes>
      <Routes>
      <Route path='/signup' element ={<CreateAccount/>}></Route>
      </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      <Routes>
      <Route  path='/tasks' element={<Tasks />}></Route>
    </Routes>
    <Routes>
      <Route  path='/teams' element={<Teams />}></Route>
    </Routes>
    <Routes>
      <Route  path='/leaderBoard' element={<Progress />}></Route>
    </Routes>
    <Routes>
      <Route  path='/home/addtasks' element={<AddTasks />}></Route>
    </Routes>
    </div>
     </BrowserRouter>
    
  );
}

export default App;
