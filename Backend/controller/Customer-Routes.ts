import express from "express";
import { CustomerServices } from "../services/CustomerService";
import { ICustomerService } from "../core/service/ICustomerService";
import { Router } from "express";

import * as paypal from "../services/paypal";
import cors from "cors";
import fileupload from "express-fileupload";

const router_Customer =Router();
router_Customer.use(express.json());
router_Customer.use(express.urlencoded({ extended: true }));

router_Customer.use(
    cors({
      origin: "*",
    })
  );

  router_Customer.use(
    fileupload({
      createParentPath: true,
    })
  );

const customer_service: ICustomerService = new CustomerServices();

router_Customer.post("/customer_data", (req, res) => {
    let r = customer_service.get_customer_details(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => {
      console.log(rejected);
      res.status(404).send({ state: "failed to connect database" });
    });
  });

  
  router_Customer.post("/cash", (req, res) => {
    customer_service.cash_payment(req, res);
  });
  
  router_Customer.post("/paypal", (req, res) => {
    customer_service.paypal_payment(req, res);
  });
  
  router_Customer.get("/cancel", (req, res) => {
    res.send("cancel");
  });
  
  router_Customer.get("/success", (req, res) => {
    paypal
      .execute_payment(req.query.paymentId, req.query.PayerID)
      .then((accepted: any) => {
        console.log(accepted.transactions);
        res.status(200).send(accepted.state);
      })
      .catch((rejected) => {
        console.log(rejected);
        res.send(rejected);
      });
  });
  
export{router_Customer}
