import signin from './signinpage/Signin';
import page from './Page'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<signin/>}/>
        <Route  path="/page" element={<page />} />
      </Routes>
    </Router>
  );
}

export default App;