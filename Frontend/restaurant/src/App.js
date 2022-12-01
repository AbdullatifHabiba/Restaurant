
import signin from './signinpage/Signin';
import page from './Page'
import './App.css';
import SignUp from './signupPage/SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<signin/>}/>
        <Route  path="/page" element={<page />} />
              <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  );
}

export default App;