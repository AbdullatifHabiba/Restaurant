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
  'mode': 'sandbox',
  'client_id': client_id!,
  'client_secret': client_secret!
});
export function create_payment(items: any, order_id: any, total: any) {
  let item_list: any = [];
  items.forEach((item: any) => {
    item_list.push({
      "name": item.name,
      "sku": item.id,
      "price": item.price,
      "currency": currency,
      "quantity": item.count
    })
  });
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
          "items": item_list
        },
        "amount": {
          "currency": currency,
          "total": total
        },
        "order_id": order_id,
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

export function execute_payment(payment_id: any, payer_id: any) {
  let transactions = payment_id.transactions;

  return new Promise((resolve, reject) => {
    const execute_payment_json = {
      "payer_id": payer_id,
      "transactions": transactions
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
export function get_payment(paymentId: any) {
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

export function refund_payment(paymentId: any) {
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
