import express from "express";
import { Router } from "express";
import { ISignUpService } from "../core/service/ISignUpService";
import { signupservice } from "../services/SignUpService";

import cors from "cors";
import fileupload from "express-fileupload";

//const app = express();
const router_signup =Router();
router_signup.use(express.json());
router_signup.use(express.urlencoded({ extended: true }));

router_signup.use(
    cors({
      origin: "*",
    })
  );

router_signup.use(
    fileupload({
      createParentPath: true,
    })
  );

const sign_upservice: ISignUpService = new signupservice();


// POST method route
router_signup.post("/signup", (req, res) => {
    let r = sign_upservice.sign_up(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
      res.status(404).send({ state: "failed to connect database" })
    );
  });

  router_signup.post("/addAdmin", (req, res) => {
    let r = sign_upservice.Add_Admin(req.body);
    r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
      res.status(404).send({ state: "failed to connect database" })
    );
  });
  

 export{router_signup}