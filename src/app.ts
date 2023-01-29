import express from 'express';
import bodyParser from "body-parser"
import validator from './validator';
import bmi from './bmi';



const app = express();
const router=express.Router()

app.use(bodyParser.json())


router.post.("/bmi",validator,(req,res,next)=>{
  res.send(bmi(req.body))
})


router.get('/bmi',validator, function(req, res,next) {

  let {param}=req.params
   res.send(bmi(param))


});








app.use()

app.router.






// Your task is to implement a BMI calculator server.

// You have to write an endpoint that accept weight and height with their units and response with the BMI value and its state. The endpoint should support query string, forms submission and JSON requests.

// For example:

// Input of 80Kg weight and 180cm height should output BMI: 25, state: 2

// TODO implement me :)


export default app;
