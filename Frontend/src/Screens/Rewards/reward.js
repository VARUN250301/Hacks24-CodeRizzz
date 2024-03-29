import React from "react";
import Card from "react-bootstrap/Card";
import './reward.css';
import Navbar from "../../components/Navbar/Navbar";

const rewardData = [
  {
    level: 1,
    tasks: [
      { id: 1, title: "Step 1", description: "Check relevant CSR Initiatives and apply " },
     // { id: 2, title: "Task 1.2", description: "Description for Task 1.2" },
    ],
  },
  {
    level: 2,
    tasks: [
      { id: 3, title: "Step 2", description: "Awating Approval " },
      //{ id: 4, title: "Task 2.2", description: "Description for Task 2.2" },
    ],
  },

  {
    level: 3,
    tasks: [
      { id: 3, title: "Step 3", description: "Approved and send for review!" },
      //{ id: 4, title: "Task 2.2", description: "Description for Task 2.2" },
    ],
  },
  {
    level: 4,
    tasks: [
      { id: 3, title: "Step 4", description: "Schedule and allocate funds for sub domains!" },
     // { id: 4, title: "Task 2.2", description: "Description for Task 2.2" },
    ],
  },
  {
    level: 5,
    tasks: [
      { id: 3, title: "Step 5", description: "Track Real Time implementation to DashBoard!!" },
     // { id: 4, title: "Task 2.2", description: "Description for Task 2.2" },
    ],
  },
  // Repeat this for levels 3, 4, and 5
];

function TaskCard({ title, description }) {
  return (
    <div className="task-card">
          <Card.Title className="titleer">{title}</Card.Title>
            Some quick example text to build on the card title.
      {/* <h3>{title}</h3>*/}
      <p>{description}</p> 
    </div>
  );
}

function LevelCard({ level, tasks }) {
  return (
    <div className="level-card">
      {/* <h2>Level {level}</h2> */}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
}

function RewardPage() {
  return (
    <>
    <Navbar/>
    <div
      className="reward-page"
      style={{
        marginTop: "2.3%",
        textAlign: "left",
        marginRight: "1rem",
      }}
    >      
    <h1 style={{color:'rgb(255, 217, 0)',marginLeft:'9%'}}>Track and Monitor Progress</h1>

      <div className="points"><i class="fa-regular fa-star"></i>Check Your Progress Bar!</div>
      <div className='horizontalLevelLine' />
      <div className='horizontalLevelLine horizontalLevelLineGrey' />
      {rewardData.map((levelData,index) => (
        <div className='level'>
        {index<3?(<div className={'index'+index}><i class="fa-solid fa-medal" aria-hidden="true"></i></div>):
                 (<div className={'index'+index}><i class="fa fa-trophy" aria-hidden="true"></i></div>)}
        <LevelCard
          key={levelData.level}
          level={levelData.level}
          tasks={levelData.tasks}
        />
        {index<2?(<i class="fa fa-check-circle" aria-hidden="true"></i>):(<></>)}
        {index<2?(<div className="completee">Congrats ! Level complete !</div>):(<></>)}
        </div>
      ))}
    </div>
    </>
  );
}

export default RewardPage;
