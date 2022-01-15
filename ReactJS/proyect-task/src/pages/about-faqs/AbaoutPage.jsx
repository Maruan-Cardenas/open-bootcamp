import React from 'react';
import { useNavigate } from 'react-router-dom';

const Abaoutpage = () => {
  const navigate = useNavigate()
  const navigation = (path) => {
    navigate(path)
  }
  const goBack = () => {
    navigate(-1)
  }
  const goForward = () => {
    navigate(1)
  }
  return (
    <div>
      <h1>About | FAQs Page</h1>
      <div>
        <button onClick={() => navigation('/')}>
          Go to Home
        </button>
        <button onClick={goBack}>
          Go to Back
        </button>
        <button onClick={goForward}>
          Go to forward
        </button>
      </div>
    </div>
  );
}

export default Abaoutpage;
