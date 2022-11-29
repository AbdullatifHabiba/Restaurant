import express from 'express'
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';


const app = express()

app.listen(5000);
app.use(express.json());

// GET method route
app.get('/signin', (req, res) => {
      res.send(signinservice.sign_in)
})

app.get('/menu', (req, res) => {
  res.send(menuserice)
})
  
  // POST method route
app.post('/signup', (req, res) => {
      res.send(signupservice.sign_up(req));
})
