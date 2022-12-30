import express from "express";
import { IMenueService } from "../core/service/IMenuService";
import { menuserice } from "../services/MenuService";
import { router_signin } from "./SignIn-Routes";
import { router_signup } from "./SignUp-Routes";
import { router_Admin } from "./Admin-Routes";
import { router_Customer } from "./Customer-Routes";

import db from "../repository/sequalize";
import cors from "cors";
import fileupload from "express-fileupload";
import { router_Delivery } from "./Delivery-Routes";

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

app.use(router_signin);
app.use(router_signup);
app.use(router_Admin);
app.use(router_Delivery);
app.use(router_Customer);

const menu_service: IMenueService = new menuserice();

async () => {
  await db.sequelize.sync({ force: false });
};


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


app.listen(5000);