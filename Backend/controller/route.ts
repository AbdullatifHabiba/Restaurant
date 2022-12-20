import express from "express";
import { ISignInService } from "../core/service/ISignInService";
import { ISignUpService } from "../core/service/ISignUpService";
import { IMenueService } from "../core/service/IMenuService";
import { menuserice } from "../services/MenuService";
import { signinservice } from "../services/SignInService";
import { signupservice } from "../services/SignUpService";
import { IAdminService } from "../core/service/IAdminService";
import { adminsrevice } from "../services/AdminService";
import { CustomerServices } from './../services/CustomerService';
import { ICustomerService } from './../core/service/ICustomerService';

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

app.use(
  cors({
    origin: "*",
  })
);

const sign_inservice: ISignInService = new signinservice();
const sign_upservice: ISignUpService = new signupservice();
const menu_service: IMenueService = new menuserice();
const admin_service: IAdminService = new adminsrevice();
const customer_service: ICustomerService = new CustomerServices();
(
  async () => {
    await db.sequelize.sync({ force: false });

  }
)

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
    
  await admin_service.AddItem_toDB_and_s3(file.data,req.body,file.mimetype).then((accepted) => {
   res.status(200).send(accepted)
  }
    ).catch((rejected) => {
      res.status(404).send({ state: rejected });
    });
  
    
      

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

app.post("/addAdmin", (req, res) => {
  let r =sign_upservice.Add_Admin (req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});
app.post("/addDelivery", (req, res) => {
  let r =sign_upservice.Add_Delivery (req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );

});
app.post("/customer_data", (req, res) => {
  let r = customer_service.get_customer_details(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );

})

app.listen(5000);
