import Detail from "./Detail";
import Logo from "./logo";
import './team.css';
const TaskCard = (props) => {
  return (
<div className="card_content_team">
        <div className="name_team">
          <Logo img={props.img}/>
        </div>
      <div className="card_bottom_team">
        <Detail detailInfo={props.members} />

      </div>
    </div> 
     )
}

export default TaskCard