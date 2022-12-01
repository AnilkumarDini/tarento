import Detail from "./Detail";
import './task.css';
const TaskCard = (props) => {
return (

<div className="card_content">
        <div className="name">{props.title}</div>
      <div className="card_bottom">
        <Detail detailInfo={props.team} />
        <Detail detailInfo={props.due} />
        <Detail detailInfo={props.tstatus} />

      </div>
    </div> 
    )
}

export default TaskCard