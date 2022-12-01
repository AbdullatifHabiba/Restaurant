import express from 'express'
import { menuserice } from '../services/MenuService';
import { signinservice } from '../services/SignInService';
import { signupservice } from '../services/SignUpService';
import cors from 'cors';
import db from './../repository/sequalize';



const app = express()

app.use(express.json());
app.use(cors({
  origin: '*'
}));

const sign_inservice = new signinservice();
const sign_upservice = new signupservice();
const menu_service = new menuserice();
(async () => {
  console.log("Initialize database connection...");
  await db.sequelize.sync({ force: false });

})();

// GET method route
app.post('/signin', (req, res) => {
  console.log(req.body);
      let r = sign_inservice.sign_in(req.body);
       r.then((result) => {
        res.send(result);
       }  ).catch((err) => {
        res.send(err);
       });   
      
})

app.get('/menu', (req, res) => {
      let r = menu_service.serve(req);
      if (r == "error") {
        res.sendStatus(404);
      } res.sendStatus(200).send(r)
})
  // POST method route
app.post('/signup', (req, res) => {
      let r = sign_upservice.sign_up(req.body).then((r) => {
        if (r ) {
          res.status(200).send(r)

        } else {
          res.sendStatus(404);

        }
      });
})
app.listen(5000);

