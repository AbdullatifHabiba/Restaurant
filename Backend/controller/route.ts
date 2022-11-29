import express from 'express'
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';


const app = express()

app.listen(5000);
app.use(express.json());

const sign_inservice = new signinservice();
const sign_upservice = new signupservice();
const menu_service = new menuserice();

// GET method route
app.get('/signin', (req, res) => {
      let r = sign_inservice.sign_in(req);
      if (r == "error") {
        res.sendStatus(404);
      } res.send(r)
})

app.get('/menu', (req, res) => {
      let r = menu_service.serve(req);
      if (r == "error") {
        res.sendStatus(404);
      } res.send(r)
})
  
  // POST method route
app.post('/signup', (req, res) => {
      let r = sign_upservice.sign_up(req);
      if (true) {
        res.sendStatus(404);
      } res.send(r)
})
