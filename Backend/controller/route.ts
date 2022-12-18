import express from "express";
import { ISignInService } from "../core/service/ISignInService";
import { ISignUpService } from "../core/service/ISignUpService";
import { IMenueService } from "../core/service/IMenuService";
import { menuserice } from "../services/MenuService";
import { signinservice } from "../services/SignInService";
import { signupservice } from "../services/SignUpService";
import { IAdminService } from "../core/service/IAdminService";
import { adminsrevice } from "../services/AdminService";
import db from "./../repository/sequalize";
import * as AWS from "../services/aws";
import * as paypal from "./paypal";
import cors from "cors";
import multer from "multer";
import crypto from "crypto";
import bodyParser from "body-parser";
import fileupload from "express-fileupload";
import { Json } from "sequelize/types/utils";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use(
  cors({
    origin: "*",
  })
);

const sign_inservice: ISignInService = new signinservice();
const sign_upservice: ISignUpService = new signupservice();
const menu_service: IMenueService = new menuserice();
const admin_service: IAdminService = new adminsrevice();
app.post("/or", (req, res) => {
   db.sequelize.sync({ force: true });

});
app.get("/cash", (req, res) => {});
app.get("/paypal", (req, res) => {

  paypal
    .create_payment(11, 140)
    .then((accepted: any) => {
      console.log(accepted.links);

      res.redirect(accepted.links[1].href);
    })
    .catch((rejected) => {
      console.log("rejected");
      res.status(404).send({ state: rejected });
    });
});
app.get("/cancel", (req, res) => {
  console.log(req.body);
});
app.get("/success", (req, res) => {
  paypal
    .execute_payment(req.query.paymentId, req.query.PayerID, 140)
    .then((accepted: any) => {
      console.log(accepted.state);
      res.status(200).send(accepted.state);
    })
    .catch((rejected) => {
      console.log(rejected);
      res.send(rejected);
    });
});

app.use(
  fileupload({
    createParentPath: true,
  })
);

//You're other codes

app.post("/additem", async (req: any, res) => {
  if (!req.files) {
    res.send({
      status: "failed",
      message: "No file uploaded",
    });
  } else {
    let file = req.files.File;
    console.log(req.body);
    console.log(file.name);
    await db.sequelize.sync({ force: false });
let resault:any;
  await admin_service.AddItem_toDB_and_s3(file.data,req.body,file.mimetype).then((accepted) => {
    resault=accepted
   // res.status(200).send(accepted)
  }
    )
    .catch((rejected) => {
      res.status(404).send({ state: rejected });
    });
  
    admin_service.getAllItems().then((accepted) => {
      res.status(200).send(accepted)
    }) .catch((rejected) => { console.log(rejected)});
      

  }
});

app.post("/order", (req, res) => {
  console.log(req.body);
  res.status(200).send({ state: "success" });
});
// GET method route
app.post("/signin", (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});

app.get("/homemenu", (req, res) => {
  let r = menu_service.get6();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});
app.get("/menu", (req, res) => {
  let r = menu_service.getAll();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});
// POST method route
app.post("/signup", (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});

app.listen(5000);
