import './App.css';
import SignUp from './signupPage/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
  );
}

export default App;
