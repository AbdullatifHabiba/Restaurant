import db  from './sequalize';

export class MenueRepo
{
     AddItem(id:number ,available:Number,location:String,description:String)
     {
      (async () => {
        await db['MenuItems'].create({ item_id: id ,available_amount: available ,image_location:location ,description:description});

      })();
     }
}