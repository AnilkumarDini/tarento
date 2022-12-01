import { Link} from "react-router-dom";

const Navbar = () => {
  return (

    <div className="Navbar">
    <ul className="nav_list">
    <li><Link style={{textDecoration:'none',color:'#edead0'}} to ="/home">Home</Link></li>
    <li><Link style={{textDecoration:'none',color:'#edead0'}} to ="/tasks">Tasks</Link></li>
    <li><Link style={{textDecoration:'none',color:'#edead0'}} to ="/teams">Teams</Link></li>
    {/* <li><Link style={{textDecoration:'none',color:'#edead0'}} to ="/leaderBoard">Leader Board</Link></li> */}
    </ul>
    </div>
  );
};

export default Navbar;
