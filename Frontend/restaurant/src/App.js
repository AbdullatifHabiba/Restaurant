import './App.css';
import HomePage from './HomePage/HomePage';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />

      </Routes>
    </Router>
  );
}

export default App;
