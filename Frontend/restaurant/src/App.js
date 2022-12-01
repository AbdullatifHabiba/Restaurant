
import Signin from './signinpage/Signin';
import Page from './Page'
import SignUp from './signupPage/SignUp';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
     <Signin/>
      <Routes>
        <Route path='/Signin' element={<Signin/>}/>
         <Route  path="/page" element={<Page />} /> 
        <Route path="/" element={<SignUp />} />

      </Routes>
    </Router>

  );
  //AQSCVD14789
  //a9866do@gmail.com
}



export default App;