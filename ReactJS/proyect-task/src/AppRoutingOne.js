import './App.css';
import NotfoundPage from './pages/404/NotFoundPage';
import HomePage from './pages/home/HomePage';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Abaoutpage from './pages/about-faqs/AbaoutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './component/container/task_list.jsx'
import LoginPage from './pages/login/LoginPage';
import TaskDetailPage from './pages/taskDetailPage/TaskDetailPage';
import PropsPage from './pages/home/PropsPage';

function AppRoutingOne() {
  let logged = sessionStorage.getItem('credential')
  const handleLogout = () => {
    sessionStorage.removeItem('credential')
  }

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
        {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  return (
    <>
      <div>
        <aside>
          <Link to="/">| Home | </Link>
          <Link to="/about"> About </Link>
          <Link to="/faqs">| Faqs | </Link>
          <Link to="/login"> login </Link>
          <Link to="/task/1"> | Task1 | </Link>
          <Link to="/task/2"> Task 2 </Link>
          <Link to="/not"> | 404 | </Link>
          <button onClick={handleLogout}>Logout</button>
        </aside>
      </div>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/state-online' element={<PropsPage />} />
        <Route path='/about' element={<Abaoutpage />} />
        <Route path='/faqs' element={<Abaoutpage />} />
        <Route path='/profile' element={logged ? <ProfilePage /> : <Navigate to="/login"/>} />
        <Route path='/tasks' element={<TaskListComponent />} />
        <Route 
          path='/task/:id'
          element={<TaskDetailPage task={taskList} />}
        />
        <Route path='/login' element={logged ? <Navigate to='/' /> : <LoginPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoutingOne;
