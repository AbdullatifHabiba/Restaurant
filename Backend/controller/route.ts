import express from 'express'
import { config } from './config'

const app = express()

app.listen(3000);
app.use(express.json());

// GET method route
app.get('/', (req, res) => {
    res.send(config.sign_in(req.body.user_name, req.body.password))
})
  
  // POST method route
app.post(`/customer/{id}`, (req, res) => {
  
    res.send(req.body.id)
})