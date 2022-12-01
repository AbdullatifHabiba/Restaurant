import db from './sequalize';
import{ISignUpRepo} from '../core/repos/ISignUpRepo';

export class SignUp implements ISignUpRepo
{

 
     async AddNewEmailCustomer(phone:String,Name:String,Email:string,password:String  )
     {
      let item= await db['Customer'].findAll({
        where: {
          email: [Email]
        }
      });
    // check if string more than '[]'
      if(JSON.stringify(item).length >=3)
      {
        return false ;
      }
      else{
        await db['Customer'].create({phone:phone,name:Name,email:Email,HPassword:password});
        return true ;
      }
     }
      async AddNewEmailDelivery(phone:String,Name:String,Email:string,password:String  )
      {
        let item= await db['Deliveryman'].findAll({
          where: {
            email: [Email]
          }
        });
      // check if string more than '[]'
        if(JSON.stringify(item).length >=3)
        {
          return false ;

        }
        else{
          await db['Deliveryman'].create({phone:phone,name:Name,email:Email,HPassword:password});
          return true ;
        }

      }
      async AddNewEmailAdmin(phone:String,Name:String,Email:string,password:String  )
      {
        let item= await db['Admin'].findAll({
          where: {
            email: [Email]
          }
        });
      // check if string more than '[]'
        if(JSON.stringify(item).length >=3)
        {
          return false ;

        }
        else{
          await db['Admin'].create({phone:phone,name:Name,email:Email,HPassword:password});
          return true ;
        }

      }
    
}