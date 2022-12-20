import { MenueRepo } from './../repository/MenueRepo';
import { ICustomerService } from "../core/service/ICustomerService";
import { customerRepo } from "../repository/CustomerRepo"
import { OrderRepo } from "../repository/OrderRepo";
import * as paypal from "./paypal";
import { OrderItem } from '../repository/OrderItemRepo';


export class CustomerServices implements ICustomerService {
    customerRepo = new customerRepo();
    order_repo = new OrderRepo();
    menueRepo=new MenueRepo();
    orderitem_repo=new OrderItem();
    get_Available_Items() {
        return this.customerRepo.get_Available_Items();
    }

    async make_new_order(req: any) {
        let create = this.order_repo.create_order(req.customer_id, req.price);

        create.then((accepted) => {
            if (accepted.state === "accepted") {
                let id: number = accepted.id;
                for (let i = 0; i < req.items.length; i++) {
                    this.order_repo.order_item_repo.create_orderItem(id, req.items[i].id, req.items[i].count, req.items[i].price);
                }
                const response = {
                    id: id,
                    state: "accepted"
                };
                return response;
            } else {
                const response = {
                    state: "can't create order"
                };
                return response;
            }
        }).catch((rejected) => { return rejected });
    }
    async paypal_payment(req: any,res:any) {

    const items:any=[];
    for (let i = 0; i < req.body.arr.length-2; i++) 
    {
        await this.menueRepo.GetItemByName(req.body.arr[i].Name).then((item:any)=>{
           item=JSON.parse(JSON.stringify(item));
            items.push({id:item[0].item_id,count:req.body.arr[i].Count,price:item[0].price})
        });
    }

    let customer_id=req.body.arr[req.body.arr.length-1].Count;
    let price=req.body.arr[req.body.arr.length-2].Count;
    
        let order = this.order_repo.create_order(customer_id, price);


        order.then((accepted) => {
            if (accepted.state === "accepted") {
                paypal.create_payment(items, price).then((createpay: any) => {
                    console.log(createpay.links);
                    res.send(createpay.links);
                }).catch((rejpay) => {
                    console.log("rejected");
                    res.status(404).send({ state: rejpay });
                });
            } else {
                res.status(404).send({ state: "can't create order" });
            }
        }).catch((rejected) => { res.status(404).send({ state: rejected }) });


    }
    async cash_payment(req: any,res:any) {
    const items:any=[];
    for (let i = 0; i < req.body.arr.length-2; i++) 
    {
        await this.menueRepo.GetItemByName(req.body.arr[i].Name).then((item:any)=>{
           item=JSON.parse(JSON.stringify(item));
            items.push({id:item[0].item_id,count:req.body.arr[i].Count,price:item[0].price})
        });
    }

    let customer_id=req.body.arr[req.body.arr.length-1].Count;
    let price=req.body.arr[req.body.arr.length-2].Count;
    
    let order = this.order_repo.create_order(customer_id, price);
        order.then((accepted) => {
            if (accepted.state === "accepted") {
                let id: number = accepted.id;
                for (let i = 0; i < items.length; i++) {
                    
                    this.orderitem_repo.create_orderItem(id, items[i].id, items[i].count, items[i].price);
                }
                const response = {
                    state: "accepted"
                };
                res.status(200).send(response);
            } else {
                
                res.status(404).send(accepted);
            }

        }).catch((rejected) => { 
            console.log("rejected");
            console.log(rejected);
            res.status(404).send({ state: rejected }) }
            );

    }

    edit_order(req: any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }

    delete_order(req: any) {
        return new Promise<void>((resolve, reject) => {
            null
        });
    }
    async get_customer_details(req: any) {
        return this.customerRepo.get_customer_details(req.id);
    }
}