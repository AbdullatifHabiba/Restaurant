import { rejects } from 'assert';
import express from 'express'
import { SignUp } from '../repository/SignupRepo';
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';


const app = express()
app.use(express.json());

const sign_inservice: ISignInService = new signinservice();
const sign_upservice: ISignUpService = new signupservice();
const menu_service: IMenueService = new menuserice();

// GET method route
app.get('/signin', (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send(rejected));
})

app.get('/homemenu', (req, res) => {
  res.status(200).send(menu_service.get6());
})

// POST method route
app.post('/signup', (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send(rejected));
})

app.listen(5000);