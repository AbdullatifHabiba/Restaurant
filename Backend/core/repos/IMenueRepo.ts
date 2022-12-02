export interface IMenueRepo {

  AddItem(
    name: string,
    available: Number,
    location: String,
    description: String,
    price: String
  ): Promise<string>;

  RemoveItemByName(name: string): Promise<any>;
  
  UpdateItemByName(
    name: string,
    available: Number,
    location: String,
    description: String,
    price: String
  ): Promise<any>;
  
  GetItemByName(name: string): Promise<any>;
  
  GetAllItems(): Promise<any>;
  get6():Promise<any>;
  
  GetItemByAvailableAmount(amount: Number): Promise<any>;
}
