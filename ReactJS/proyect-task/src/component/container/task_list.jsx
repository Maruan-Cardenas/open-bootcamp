import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
   const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
   
   // Estado del componente
   const [tasks, setTasks] = useState([defaultTask])
   const [loading, setLoading] = useState(true)

   // Control del ciclo de vida del componentes
   useEffect(() => {
      console.log('Task State has been modifie')
      setLoading(false)
      return () => {
         console.log('taskList component is going to unmount')
      }
   }, [tasks])

   const changeCompleted = (id) => {
    console.log("Cambiar estado de una tarea")
   }

    return (
        <div>
           <div>
              <h1>Tús Tareas:</h1>
           </div> 
           <TaskComponent task={tasks}/>
        </div>
    )
}

export default TaskListComponent;
