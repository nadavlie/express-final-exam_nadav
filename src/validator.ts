import type { NextFunction, Request, Response } from 'express';
import { BmiInput } from './bmi';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
// export interface BmiInput {
//   weight: number;
//   weightUnit: number;
//   height: number;
//   heightUnit: number;
// }

export default function validator(req: Request, res: Response, next: NextFunction) {
    // TODO implement me
    if(req.body){
        
    }
    let content=req.body;
    //cheks both types and value names-->if one fails invalid (dont care if its the incorrect type or lack of values)

    if(typeof content.weight==="number" &&typeof content.height==="number" && typeof content.heightUnit==="number" &&typeof content.weightUnit==="number")
    {
        next()
    }
    res.status(422).send({msg:"invalid params"})

  

}
 function instanceOfbmi(object: any): object is BmiInput {

    if(bo)
   return (
     "weight" in object &&
     "weightUnit" in object &&
     "height" in object &&
     "heightUnit" in object)
   );
 }
// weight: number;
//   weightUnit: number;
//   height: number;
//   heightUnit: num