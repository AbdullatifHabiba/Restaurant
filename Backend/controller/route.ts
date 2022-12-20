import express from "express";
import { ISignInService } from "../core/service/ISignInService";
import { ISignUpService } from "../core/service/ISignUpService";
import { IMenueService } from "../core/service/IMenuService";
import { menuserice } from "../services/MenuService";
import { signinservice } from "../services/SignInService";
import { signupservice } from "../services/SignUpService";
import { IAdminService } from "../core/service/IAdminService";
import { adminsrevice } from "../services/AdminService";
import { CustomerServices } from "./../services/CustomerService";
import { ICustomerService } from "./../core/service/ICustomerService";

import db from "./../repository/sequalize";
import * as paypal from "../services/paypal";
import cors from "cors";
import fileupload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);
app.use(
  fileupload({
    createParentPath: true,
  })
);

const sign_inservice: ISignInService = new signinservice();
const sign_upservice: ISignUpService = new signupservice();
const menu_service: IMenueService = new menuserice();
const admin_service: IAdminService = new adminsrevice();
const customer_service: ICustomerService = new CustomerServices();

async () => {
  await db.sequelize.sync({ force: false });
};


//You're other codes


// POST method route
app.post("/signup", (req, res) => {
  let r = sign_upservice.sign_up(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
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
app.post("/additem", async (req: any, res) => {
  if (!req.files) {
    res.send({
      status: "failed",
      message: "No file uploaded",
    });
  } else {
    let file = req.files.File;

    await admin_service
      .AddItem_toDB_and_s3(file.data, req.body, file.mimetype)
      .then((accepted) => {
        res.status(200).send(accepted);
      })
      .catch((rejected) => {
        res.status(404).send({ state: rejected });
      });
  }
});


app.post("/addAdmin", (req, res) => {
  let r = sign_upservice.Add_Admin(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});
app.post("/addDelivery", (req, res) => {
  let r = sign_upservice.Add_Delivery(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});
app.post("/customer_data", (req, res) => {
  let r = customer_service.get_customer_details(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => {
    console.log(rejected);
    res.status(404).send({ state: "failed to connect database" });
  });
});
app.post("/cash", (req, res) => {
  customer_service.cash_payment(req, res);
});
app.post("/paypal", (req, res) => {
  customer_service.paypal_payment(req, res);
});

app.get("/cancel", (req, res) => {
  res.send("cancel");
});
app.get("/success", (req, res) => {
  paypal
    .execute_payment(req.query.paymentId, req.query.PayerID)
    .then((accepted: any) => {

      console.log(accepted);
    
      res.status(200).send(accepted.state);
    })
    .catch((rejected) => {
      console.log(rejected);
      res.send(rejected);
    });
});
app.listen(5000);
