import { render, screen } from '@testing-library/react';
import App from './App';
import Signin from"./signinpage/Signin"
import {BrowserRouter} from "react-router-dom"
import SignUp from './signupPage/SignUp';
test('App testing', () => {
  render( <App />);
  render(<BrowserRouter>
    <Signin />
  </BrowserRouter>);
  render(<BrowserRouter>
    <SignUp />
  </BrowserRouter>);
  
});
