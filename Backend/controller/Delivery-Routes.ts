import express from "express";
import { Router } from "express";
import cors from "cors";
import fileupload from "express-fileupload";
import { deliverymanservice } from "../services/DeliveryManService";
import { OrderService } from "../services/OrderService";
import { order } from "paypal-rest-sdk";

const router_Delivery = Router();
const deliveryService = new deliverymanservice();
const orderService = new OrderService();

router_Delivery.use(express.json());
router_Delivery.use(express.urlencoded({ extended: true }));

router_Delivery.use(
    cors({
        origin: "*",
    })
);

router_Delivery.use(
    fileupload({
        createParentPath: true,
    })
);

router_Delivery.get("/orders", (req, res) => {
    let r = deliveryService.get_available_orders();
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
        res.status(404).send({ state: rejected + "failed to connect database" })
    );
});

router_Delivery.post("/customerData", (req, res) => {
    let r = deliveryService.get_customer_details_by_order_id(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => {
        console.log(rejected);
        res.status(404).send({ state: "failed to connect database" });
    });
});

router_Delivery.post("/order-data", (req, res) => {
    let r = orderService.get_order_details(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => {
        console.log(rejected);
        res.status(404).send({ state: "failed to connect database" });
    });
})

router_Delivery.post("/assignorder", (req, res) => {
    let r = deliveryService.assign_order(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => {
        console.log(rejected);
        res.status(404).send({ state: "failed to connect database" });
    });
})

router_Delivery.post("/delivered", (req, res) => {
    let r = deliveryService.deliver_order(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) => {
        console.log(rejected);
        res.status(404).send({ state: "failed to connect database" });
    });
})

export { router_Delivery }
