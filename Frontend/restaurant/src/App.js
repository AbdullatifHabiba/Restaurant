import './App.css';
import HomePage from './HomePage/HomePage';

import Signin from './signinpage/Signin';
import SignUp from './signupPage/SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
  
}



export default App;