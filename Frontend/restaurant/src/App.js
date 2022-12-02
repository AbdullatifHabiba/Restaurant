import './App.css';
import HomePage from './HomePage/HomePage';

import Signin from './signinpage/Signin';
import Page from './Page'
import SignUp from './signupPage/SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
     <Signin/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
  //AQSCVD14789
  //a9866do@gmail.com
}



export default App;