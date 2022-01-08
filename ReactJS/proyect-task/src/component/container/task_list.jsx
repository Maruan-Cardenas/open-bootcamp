import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import React, { useState, useEffect } from 'react'
import TaskComponent from '../pure/task'
import Taskform from '../pure/forms/taskForm'

const TaskListComponent = () => {
   const defaultTask1 = new Task('Example 1', 'Descripton 1', false, LEVELS.NORMAL)
   const defaultTask2 = new Task('Example 2', 'Descripton 2', false, LEVELS.URGENT)
   const defaultTask3 = new Task('Example 3', 'Descripton 3', true, LEVELS.BLOCKING)

   // Estado del componente
   const [tasks, setTasks] = useState([
      defaultTask1,
      defaultTask2,
      defaultTask3
   ])
   const [loading, setLoading] = useState(true)

   // Control del ciclo de vida del componente
   useEffect(() => {
      console.log('Task State has been modifie')
      setTimeout(() =>{
         setLoading(false)
      },2000)
      return () => {
         console.log('taskList component is going to unmount')
      }
   }, [tasks])

   function completeTask(task) {
      console.log('Complete this task:', task)
      const index = tasks.indexOf(task)
      const tempTasks = [...tasks]
      tempTasks[index].completed = !tempTasks[index].completed
      // We update the state of the componenet with the new list of tasks and it will updaate the Iteration of the tasks in order to show the task updated
      setTasks(tempTasks)
   }

   function deleteTask(task) {
      console.log(task, 'is going to remove')
      const index = tasks.indexOf(task)
      const tempTasks = [...tasks]
      tempTasks.splice(index, 1)
      setTasks(tempTasks)
   }

   function addTask(task) {
   console.log(task, 'is added')
   const tempTasks = [...tasks]
   tempTasks.push(task)
   setTasks(tempTasks)
   }

   const Table = () => {
      return (
         <table>
            <thead>
               <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
               </tr>
            </thead>
            <tbody>
               {/* ToDo: Iterar sobre una lista de tareas */}
               {
                  tasks.map((res, index) => {
                     return <TaskComponent 
                              key={index} 
                              task={res} 
                              complete={completeTask}
                              remove={deleteTask}
                              />
                     
               })
               }
            </tbody>
         </table>
      )
   }

   let taskTable 
   if (tasks.length > 0) taskTable = <Table />
   else {
      taskTable = (
         <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one</h4>
         </div>
      ) 
   }  

   const loadingStyles = {
      color: 'grey',
      fontWeight: 'bold',
   }
      

    return (
        <div>
           <div className='col-12'>
              <div className='card'>
                  {/* Card Header {title} */}
                  <div className='card-header p-3'>
                     <h5>Tús Tareas:</h5>
                  </div>
                  {/* Card Body (content)*/}
                  <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                     {/* Add Loading Spinner */}
                     {loading ? <p style={loadingStyles}>Loading...</p> : taskTable}
                  </div>
              </div>
           </div> 
                  <Taskform add={addTask} length={tasks.length} />
        </div>
    )
}

export default TaskListComponent;
