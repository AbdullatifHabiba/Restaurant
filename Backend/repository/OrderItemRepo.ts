import db  from './sequalize';

export class OrderItem
{

     async GetAll()
     { 
          try{ 
            return await db['MenuItems'].findAll();
          }catch(err){
            throw Error("error in connection"); 
          }
     }
     async RemoveItemByID(Id:number)
     { 
         await db['MenuItems'].destroy({
          where: { 
            id:[Id]
          }
        });
     }
}