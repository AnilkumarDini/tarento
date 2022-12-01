import Card from "./TaskCard";
import taskData from "../TaskData";
// import './task.css';
const createCard = (taskData) => {
  return (
    <Card
    title={taskData.title}
    team={taskData.team}
    due={taskData.due}
    progress={taskData.progress}/>

  );
}

const Task = () => {
  return (
    <div>
      {taskData.map(createCard)}
    </div>
  )
}

export default Task