import { rejects } from 'assert';
import express from 'express'
import { SignUp } from '../repository/SignupRepo';
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';


const app = express()
app.use(express.json());

const sign_inservice = new signinservice();
const sign_upservice = new signupservice();
const menu_service = new menuserice();

// GET method route
app.get('/signin', (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send(rejected));
})

app.get('/menu', (req, res) => {
  let r = menu_service.serve(req.body);
  if (r == "error") {
    res.sendStatus(404);
  } res.send(r)
})

const signup = new SignUp();
// POST method route
app.post('/signup', (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send(rejected));
})

app.listen(5000);