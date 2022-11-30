import Signin from './signinpage/Signin';
import SignUp from './signupPage/SignUp'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route  path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;