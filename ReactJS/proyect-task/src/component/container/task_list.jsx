import React from 'react'
import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

   const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

   const changeState = () => {
    console.log("Cambiar estado de una tarea")
   }

    return (
        <div>
           <div>
              <h1>Tús Tareas:</h1>
           </div> 
           <TaskComponent task={defaultTask}/>
        </div>
    )
}

export default TaskListComponent;
