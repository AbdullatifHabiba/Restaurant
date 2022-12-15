import paypal from 'paypal-rest-sdk';
import dotenv from 'dotenv';
dotenv.config();
const client_id = process.env.Paypal_Client_ID;
const client_secret = process.env.Paypal_Client_SECRET;
const mode = process.env.mode;
const return_url = 'http://localhost:5000/success';
const cancel_url = 'http://localhost:5000/cancel';
const payment_method = 'paypal';
const currency = 'USD'

paypal.configure({
    'mode':'sandbox', 
    'client_id': client_id!,
    'client_secret': client_secret!
  });
  export function create_payment(order_id, total){
    return new Promise((resolve, reject) => {
      const create_payment_json = {
        "intent": 'sale',
        "payer": {
          "payment_method": payment_method
        },
        "redirect_urls": {
          "return_url": return_url,
          "cancel_url": cancel_url
        },
        "transactions": [{
          "item_list": {
            "items": [{
              "name": "sandwatch",
              "sku": "item",
              "price": total,
              "currency": currency,
              "quantity": 1000
            }]
          },
          "amount": {
            "currency": currency,
            "total": total
          },
          "description": "This is the payment description."
        }]
      };
      
      paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    })
  }
  
  export function execute_payment(payment_id, payer_id, total){
    return new Promise((resolve, reject) => {
      const execute_payment_json = {
        "payer_id": payer_id,
        "transactions": [{
          "amount": {
            "currency": currency,
            "total": total
          }
        }]
      };
      
      paypal.payment.execute(payment_id, execute_payment_json, function (error, payment) {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    })
  }
  export function get_payment(paymentId: string) {
    return new Promise((resolve, reject) => {
      paypal.payment.get(paymentId, function (error, payment) {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });
  }
  
  export function refund_payment(paymentId: string) {
    return new Promise((resolve, reject) => {
      paypal.payment.get(paymentId, function (error, payment) {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });
  }
  