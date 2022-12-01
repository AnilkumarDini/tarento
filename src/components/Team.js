import Card from "./TeamCard";
import teamData from "../TeamData";
// import './task.css';
const createCard = (teamData) => {
  return (
    <Card 
    img={teamData.img}
    members={teamData.members}
    />

  );
}

const Team = () => {
  return (
    <div>
      {teamData.map(createCard)}
    </div>
  )
}

export default Team