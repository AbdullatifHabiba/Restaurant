import express from "express";
import { Router } from "express";
import cors from "cors";
import fileupload from "express-fileupload";
import { deliverymanservice } from "../services/DeliveryManService";

const router_Delivery = Router();
const deliveryService= new deliverymanservice();

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
    let r = deliveryService.get_all_orders();
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
      res.status(404).send({ state: rejected + "failed to connect database" })
    );
  });

export { router_Delivery }
