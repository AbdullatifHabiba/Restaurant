import db  from './sequalize';

export class MenueRepo
{
     AddItem(id:number ,available:Number,location:String,description:String)
     {
      (async () => {
        await db['MenuItems'].create({ item_id: id ,available_amount: available ,image_location:location ,description:description});
      })();
     }
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
     updatePrice(price:number)
     {

     }
}