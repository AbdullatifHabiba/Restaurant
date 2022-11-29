import db  from './sequalize';

export class SignUp
{
  //  async AddNewAdmin(Email:string )
  //    {
  //     let item= await db['Admin'].findAll({
  //       where: {
  //         email: [Email]
  //       }
  //     });
  //     // check if string more than '[]'
  //     if(JSON.stringify(item).length >=3)
  //     {
  //       return false ;
  //     }
  //     else{
  //       return true ;
  //     }
  //    }
  //    async checkNewDelivery(Email:string )
  //    {
  //     let item= await db['Deliveryman'].findAll({
  //       where: {
  //         email: [Email]
  //       }
  //     });
  //    // check if string more than '[]'
  //     if(JSON.stringify(item).length >=3)
  //     {
  //       return false ;
  //     }
  //     else{
  //       return true ;
  //     }
  //    }

     async checkNewEmailCustomer(Email:string )
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
        return true ;
      }
     }
    
}