import './App.css';

// Component import
import NotFoundPages from './pages/404/NotFoundPages';
import LoginPage from './pages/login/LoginPage'
import DashBoard from './pages/dashboard/DashBoard'

// Routes import
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  let loggedIn = true
  return (
    <>
      {/*Switch de rutas  */}
      <Routes>
        {/* Redirections to protect our rutes */}
        <Route 
          path="/" 
          element={
            loggedIn 
              ? <Navigate from='/' to="/dashboard" /> 
              : <Navigate from='/' to="/login" />
          }/>
        {/* Login route */}
        <Route 
          path="/login" 
          element={
            loggedIn 
              ? <Navigate from='/' to="/dashboard" /> 
              : <LoginPage />
          }/>

        {/* DashBoard Route */}
        <Route 
          path="/dashboard" 
          element={
            loggedIn 
              ? <DashBoard/> 
              : <Navigate from='/' to="/login" />
          }/>


        <Route path="/*" element={<NotFoundPages />}/>
      </Routes>
    </>
  );
}

export default App;
