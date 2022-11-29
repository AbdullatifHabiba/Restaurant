import db  from './sequalize';

export class ItemRepo{
    
    async AddItem(id:number ,available:Number,location:String,description:String)
    {
     let item= await db['Item'].findAll({
       where: {
         item_id: [id]
       }
     });

     if(JSON.stringify(item).length < 3)
     {
       await db['Item'].create({ item_id: id ,available_amount: available ,image_location:location ,description:description});
       return "item added correctly" ;
     }else{
       return "item id already exist" ;
     }
 
    }
    async RemoveItemByID(Id:number)
    { 
        await db['Item'].destroy({
         where: { 
            item_id:[Id]
         }
       });
    }
}


