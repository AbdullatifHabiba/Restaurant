import express from 'express'
import { ISignInService } from '../core/service/ISignInService';
import { ISignUpService } from '../core/service/ISignUpService';
import { IMenueService } from '../core/service/IMenuService';
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';
import db from './../repository/sequalize';
import cors from 'cors';

const app = express()
app.use(express.json());

(async () => {

  console.log("Initialize database connection...");
  await db.sequelize.sync({ force: true });

})();
app.use(cors(
  {
    origin: '*',
  }
))
const sign_inservice: ISignInService = new signinservice();
const sign_upservice: ISignUpService = new signupservice();
const menu_service: IMenueService = new menuserice();

// GET method route
app.post('/signin', (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({state:"failed to connect database"}));
})

app.get('/homemenu', (req, res) => {
  let r = menu_service.get6();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({state:"failed to connect database"}));
})

// POST method route
app.post('/signup', (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({state:"failed to connect database"}));
})

app.listen(5000);

