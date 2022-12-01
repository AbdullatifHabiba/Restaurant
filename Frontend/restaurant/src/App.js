
import Signin from './signinpage/Signin';
import Page from './Page'
import SignUp from './signupPage/SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
      <Signin/>
      <SignUp />
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
         <Route  path="/page" element={<Page />} /> 
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  );
}



export default App;