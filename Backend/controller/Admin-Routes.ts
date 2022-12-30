import express from "express";
import { IAdminService } from "../core/service/IAdminService";
import { adminsrevice } from "../services/AdminService";
import { Router } from "express";

import cors from "cors";
import fileupload from "express-fileupload";

const admin_service: IAdminService = new adminsrevice();

const router_Admin = Router();

router_Admin.use(express.json());
router_Admin.use(express.urlencoded({ extended: true }));

router_Admin.use(
  cors({
    origin: "*",
  })
);

router_Admin.use(
  fileupload({
    createParentPath: true,
  })
);

router_Admin.post("/additem", async (req: any, res) => {
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

router_Admin.post("/addDelivery", (req, res) => {
  let r = admin_service.Add_Delivery(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: rejected + "failed to connect database" })
  );
});

router_Admin.get("/getAllDelivery", (req, res) => {
  let r = admin_service.getAllDelivery();
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: rejected + "failed to connect database" })
  );
});

router_Admin.post("/delete-delivery", (req, res) => {
  let r = admin_service.Remove_Delivery(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: rejected + "failed to connect database" })
  );
});

export { router_Admin }