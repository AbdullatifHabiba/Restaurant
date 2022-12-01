import Signin from './signinpage/Signin';
import Page from './Page'
import SignUp from './signupPage/SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route  path="/page" element={<Page />} />
      </Routes>
    </Router>

  );
}

export default App;