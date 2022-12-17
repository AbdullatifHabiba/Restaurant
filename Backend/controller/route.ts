import express from 'express'
import { ISignInService } from '../core/service/ISignInService';
import { ISignUpService } from '../core/service/ISignUpService';
import { IMenueService } from '../core/service/IMenuService';
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';
import { IAdminService } from '../core/service/IAdminService';
import { adminsrevice } from '../services/AdminService';
import db from './../repository/sequalize';
import * as AWS from '../services/aws';
import*as paypal from'./paypal'
import cors from 'cors';
import multer from 'multer';
import crypto from 'crypto';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// (async () => {

  

//   //AWS.getPutSignedUrl("test");
//   // await AWS.upload_images("sandwatch").then(acc=>{
//   //   console.log("successfully sand at "+acc.Location);
//   //   const readStream = AWS.getFileStream("sandwatch");
//   //   console.log("successfully readStream");

//   //  console.log(readStream.readable);
//   });
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
const admin_service: IAdminService = new adminsrevice();
app.get('/order', (req, res) => {
   //req.body.item,quantity,price
  //paypal,cash
  //res.redirect('/paypal')


});
app.get('/cash', (req, res) => {

});
app.get('/paypal', (req, res) => {

  paypal.create_payment(11,140).then((accepted:any) => {
    
    console.log(accepted.links)

    res.redirect(accepted.links[1].href)

  }).catch((rejected) => {
    console.log("rejected");
    res.status(404).send({ state: rejected });
  });

});
app.get('/cancel', (req, res) => {
  console.log(req.body);
});
app.get('/success', (req, res) => {
  paypal.execute_payment(req.query.paymentId,req.query.PayerID,140).then((accepted:any) => {
    console.log(accepted.state);
    res.status(200).send(accepted.state);
  }).catch((rejected) => {
    console.log(rejected);
  res.send(rejected)

 });

});

const storage=multer.memoryStorage();

const upload=multer({storage:storage});
//app.use(bodyParser.urlencoded({ extended: false }));
const fs = require('fs')

const imageURL = 'G:/Fifth Term/Software Engineering/Project/Frontend/restaurant/public/Images/Bignine.jfif'
  const fileStream = fs.createReadStream(imageURL);
app.post('/additem',upload.any() ,async(req,res)=>{
  
  console.log(req);
  console.log(storage)
  const fileBuffer =req.file;
  console.log(fileBuffer)
  await admin_service.AddItem_toDB_and_s3(fileBuffer,req.body).then((accepted) => {
    res.status(200).send(accepted);})
    .catch((rejected) => {
      res.status(404).send({ state: rejected });
    });

// admin_service.getAllItems().then((acc)=>{
//   console.log(acc);
// })

});


  




app.post('/order',(req, res) => {
  console.log(req.body);
  res.status(200).send({ state: "success" });
})
// GET method route
app.post('/signin', (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})

app.get('/homemenu', (req, res) => {
  let r = menu_service.get6();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})
app.get('/menu', (req, res) => {
  let r = menu_service.getAll();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})
// POST method route
app.post('/signup', (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => res.status(404).send({ state: "failed to connect database" }));
})

app.listen(5000);

