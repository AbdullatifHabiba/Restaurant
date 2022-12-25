import db from './sequalize';
export class PaymentRepo {
    async create_payment(customer_id: Number, payment_id: String,order_id:Number): Promise<any> {
        let item = await db['Payment'].findAll({
            where: {
                customer_id: [customer_id],
            }
        });
        let response: any;
        await db['Payment'].create({ customer_id: customer_id, payment_id: payment_id,order_id:order_id }).then(async (ress: any) => {
            item = JSON.parse(JSON.stringify(ress));
            response = {
                id: item.payment_id,
                state: "accepted"
            };
        }).catch((err: any) => {
            response = { state: "can't create payment because" + err };
        });
        console.log(response);
        return response;
    }
    async get_payment(payment_id: Number) {
        let item = await db['Payment'].findAll({
            where: {
                payment_id: [payment_id],
            }
        });
        if (JSON.stringify(item).length >= 3) {
            const response = {
                order_id: item[0].order_id,
                customer_id: item[0].customer_id,
                state: "accepted"
            };
            return response;
        } else {
            const response = {
                state: "can't get payment"
            };
            return response;
        }

    }
    async delete_payment(payment_id: Number) {
        let item = await db['Payment'].findAll({
            where: {
                payment_id: [payment_id],
            }
        });
        if (JSON.stringify(item).length >= 3) {
            await db['Payment'].destroy({
                where: {
                    payment_id: [payment_id],
                }
            });
            const response = {
                state: "accepted"
            };
            return response;
        } else {
            const response = {
                state: "can't delete payment"
            };
            return response;
        }

    }

}