import './App.css';
import NotfoundPage from './pages/404/NotFoundPage';
import HomePage from './pages/home/HomePage';
import { Routes, Route, Link } from 'react-router-dom'
import Abaoutpage from './pages/about-faqs/AbaoutPage';
import ProfilePage from './pages/profile/ProfilePage';

function AppRoutingOne() {
  return (
    <>
      <div>
        <aside>
          <Link to="/">| Home | </Link>
          <Link to="/about"> About </Link>
          <Link to="/faqs">| Faqs | </Link>
          <Link to="/not"> 404 </Link>
        </aside>
      </div>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<Abaoutpage />} />
        <Route path='/faqs' element={<Abaoutpage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutingOne;
