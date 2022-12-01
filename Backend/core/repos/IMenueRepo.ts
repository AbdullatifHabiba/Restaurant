export interface IMenueRepo {
  
  AddItem(
    name: string,
    available: Number,
    location: String,
    description: String,
    price: Number
  ): Promise<string>;
  RemoveItemByID(Id: number): Promise<any>;
  RemoveItemByName(name: string): Promise<any>;
  UpdateItemByID(
    Id: number,
    name: string,
    available: Number,
    location: String,
    description: String,
    price: Number
  ): Promise<any>;
  UpdateItemByName(
    name: string,
    available: Number,
    location: String,
    description: String,
    price: Number
  ): Promise<any>;
  GetItemByID(Id: number): Promise<any>;
  GetItemByName(name: string): Promise<any>;
  GetAllItems(): Promise<any>;
  GetItemByAvailableAmount(amount: Number): Promise<any>;
}
