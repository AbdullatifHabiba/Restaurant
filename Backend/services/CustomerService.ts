import { MenueRepo } from './../repository/MenueRepo';
import { ICustomerService } from "../core/service/ICustomerService";
import { customerRepo } from "../repository/CustomerRepo"
import { OrderRepo } from "../repository/OrderRepo";
import * as paypal from "./paypal";
import { OrderItem } from '../repository/OrderItemRepo';
import { PaymentRepo } from '../repository/PaymentRepo';


export class CustomerServices implements ICustomerService {
    customerRepo = new customerRepo();
    order_repo = new OrderRepo();
    menueRepo = new MenueRepo();
    orderitem_repo = new OrderItem();
    paypal_repo = new PaymentRepo();
    get_Available_Items() {
        return this.customerRepo.get_Available_Items();
    }

    
    async paypal_payment(req: any, res: any) {

        const items: any = [];
        for (let i = 0; i < req.body.arr.length - 2; i++) {
            await this.menueRepo.GetItemByName(req.body.arr[i].Name).then((item: any) => {
                item = JSON.parse(JSON.stringify(item));
                items.push({ id: item[0].item_id, count: req.body.arr[i].Count, price: item[0].price })
            });
        }

        let customer_id = req.body.arr[req.body.arr.length - 1].Count;
        let price = req.body.arr[req.body.arr.length - 2].Count;

        let order = this.order_repo.create_order(customer_id, req.body.info.address,"paypal");


        order.then((accepted) => {
            if (accepted.state === "accepted") {
                paypal.create_payment(items, accepted.id, price).then((createpay: any) => {
                    console.log(createpay);
                    this.paypal_repo.create_payment(customer_id, createpay.id, accepted.id);
                    res.send(createpay.links);
                }).catch((rejpay) => {
                    console.log("rejected");
                    res.status(404).send({ state: rejpay });
                });
            } else {
                res.status(404).send({ state: "can't create order" });
            }
        }).catch((rejected) => { 
            console.log(rejected);
            res.status(404).send({ state: rejected }) });


    }
    async cash_payment(req: any, res: any) {
        const items: any = [];
        for (let i = 0; i < req.body.arr.length - 2; i++) {
            await this.menueRepo.GetItemByName(req.body.arr[i].Name).then((item: any) => {
                item = JSON.parse(JSON.stringify(item));
                items.push({ id: item[0].item_id, count: req.body.arr[i].Count, price: item[0].price })
            });
        }

        let customer_id = req.body.arr[req.body.arr.length - 1].Count;

        let order = this.order_repo.create_order(customer_id, req.body.info.address,"cash");
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
            res.status(404).send({ state: rejected })
        }
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