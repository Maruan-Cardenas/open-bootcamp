import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailPage = ({task}) => {
  const {id} = useParams()
  const tasks = task[id-1]
  return (
    <div> 
       <h1>Task Detail {id}</h1>
       <h2>{tasks.name}</h2>
       <h3>{tasks.description}</h3>
    </div>
  );
}

export default TaskDetailPage;
