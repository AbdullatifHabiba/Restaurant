import express from "express";
import { Router } from "express";
import { ISignInService } from "../core/service/ISignInService";
import { signinservice } from "../services/SignInService";

import cors from "cors";
import fileupload from "express-fileupload";

//const app = express();


const router_signin = Router();
router_signin.use(express.json());
router_signin.use(express.urlencoded({ extended: true }));

router_signin.use(
  cors({
    origin: "*",
  })
);



const sign_inservice: ISignInService = new signinservice();


router_signin.post("/signin", (req, res) => {
  let r = sign_inservice.sign_in(req.body);
  r.then((accepted) => res.status(200).send(accepted)).catch((rejected) =>
    res.status(404).send({ state: "failed to connect database" })
  );
});

export { router_signin }
//router.listen(5000);