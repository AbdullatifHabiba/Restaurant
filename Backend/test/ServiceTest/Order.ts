import  express  from 'express';
import { OrderService } from './../../services/OrderService';
import { expect} from 'chai';

describe("Order Service layer Tests", () => {
    const orderService = new OrderService();

 it("shoud return paypal status of paypal excute", () => {
    let query={
        paymentId:"123",
        PayerID:"123"
    };
    let res:express.Response;
   expect(orderService.Set_paypal_order({query},res)).to.be.a("promise");
 });
 it("shoud return order status", () => {
    let body={
        order_id:1,
        delivery_id:2,
        status:false
    };
    let res:express.Response;
   expect(orderService.Set_status_of_order({body},res)).to.be.a("promise");}
 );
    it("shoud return order to deliveryman", () => {
        let body={
            order_id:1,
            delivery_id:3
        };
        let res:express.Response;
       expect(orderService.order_to_deliveryman({body},res)).to.be.a("promise");});
    it("shoud return change order deliveryman", () => {
        let body={
            order_id:2,
            delivery_id:3
        };
        let res:express.Response;
       expect(orderService.change_order_deliveryman({body},res)).to.be.a("promise");
    });
 



});