import { OrderService } from './../services/OrderService';
import express from "express";
import { CustomerServices } from "../services/CustomerService";
import { ICustomerService } from "../core/service/ICustomerService";
import { Router } from "express";

import * as paypal from "../services/paypal";
import cors from "cors";

const router_Customer = Router();
router_Customer.use(express.json());
router_Customer.use(express.urlencoded({ extended: true }));

router_Customer.use(
  cors({
    origin: "*",
  })
);

const customer_service: ICustomerService = new CustomerServices();
const orderService = new OrderService();

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
  orderService.Set_paypal_order(req, res);
});

router_Customer.post("/assignOrder", (req, res) => {
  orderService.order_to_deliveryman(req, res);
});

router_Customer.post("/orderStatus", (req, res) => {
  orderService.Set_status_of_order(req, res);
});

export { router_Customer }
