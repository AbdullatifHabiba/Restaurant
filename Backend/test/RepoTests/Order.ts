import{expect} from 'chai';
import { OrderRepo } from '../../repository/OrderRepo';

describe("Order Repo Tests", async() => {
    const obj = new OrderRepo();

    it("check add order to delivery return promise", async() => {
        expect(obj.add_order_to_delivery(2,1)).to.be.a("promise");
    });

    it("check assign order to delivery return promise", async() => {
        expect(obj.assign_order_to_delivery(2,1)).to.be.a("promise");
    });
    it("check create order  return promise", async() => {
        expect(obj.create_order(1,"alex","pay12222")).to.be.a("promise");
    });
    it("check delete_order by id  return promise", async() => {
        expect(obj.delete_order(2)).to.be.a("promise");
    });
    it("check get order by id  return promise", async() => {
        expect(obj.get_order(1)).to.be.a("promise");
    });
    it("check get get_All_orders_not_in_deliveryorder  return promise", async() => {
        expect(obj.get_All_orders_not_in_deliveryorder()).to.be.a("promise");

    });
    it("check get_delievry_by_order  return promise", async() => {
        expect(obj.get_delievry_by_order(3)).to.be.a("promise");

    });
    it("check get_order_by_customer  return promise", async() => {    
        expect(obj.get_order_by_customer(1)).to.be.a("promise");
    }); 
    it("check get_order_by_delivery  return promise", () => {
        expect(obj.get_order_by_delivery(1)).to.be.a("promise");
    });
    it("check set status to order", async() => {
        expect(obj.set_order_status(3,2,false)).to.be.a("promise");
    });



});