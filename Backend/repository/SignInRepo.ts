import db  from './sequalize';

export class SignIn
{
     checkCorrectAdmin()
     {
      (async () => {
        await db['MenuItems'].create({ });

      })();
     }
     checkCorrectDelivery():String
     {
       return "fff";
     }
     checkCorrectCustomer(id:number)
     {

     }
    
}