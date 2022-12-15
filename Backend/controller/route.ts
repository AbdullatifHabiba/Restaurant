import express from 'express'
import { ISignInService } from '../core/service/ISignInService';
import { ISignUpService } from '../core/service/ISignUpService';
import { IMenueService } from '../core/service/IMenuService';
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';
import db from './../repository/sequalize';
import * as AWS from './aws';
import*as paypal from'./paypal'

import cors from 'cors';
const app = express()
app.use(express.json());

(async () => {

  

  //AWS.getPutSignedUrl("test");
  // await AWS.upload_images("sandwatch").then(acc=>{
  //   console.log("successfully sand at "+acc.Location);
  //   const readStream = AWS.getFileStream("sandwatch");
  //   console.log("successfully readStream");

  //  console.log(readStream.readable);
  });
 // console.log("Initialize database connection...");
 // await db.sequelize.sync({ force: false });

//})();

app.use(cors(
  {
    origin: '*',
  }
))

const sign_inservice: ISignInService = new signinservice();
const sign_upservice: ISignUpService = new signupservice();
const menu_service: IMenueService = new menuserice();
app.get('/paypal', (req, res) => {
  paypal.create_payment(100,15).then((accepted) => {
    console.log("successfully sand at " + accepted);
    res.status(200).send(accepted);
  }).catch((rejected) => {
    console.log("rejected");
    res.status(404).send({ state: rejected });
  });

});
app.get('/cancel', (req, res) => {
  console.log(req.body+"cancel");
});
// GET method route
app.post('/signin', (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})

app.get('/homemenu', (req, res) => {
  let r = menu_service.get6();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})

// POST method route
app.post('/signup', (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})

app.listen(5000);

