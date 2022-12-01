import db  from './sequalize';

export class ItemRepo{
    
    async AddItem(item_id:number,order_id:Number,name:String,price:String,amount_required:number)
    {
     
       await db['Item'].create({item_id:item_id,order_id: order_id ,name:name,price:price,amount_required:amount_required});     
 
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


