export class signinservice {
    static sign_in(req) {
        switch (req.user) {
            case "customer":
                this.customer_sign_in(req.email, req.password);
                break;
            case "delivery":
                this.delivery_sign_in(req.email, req.password);
                break;
            case "admin":
                this.admin_sign_in(req.email, req.password);
                break;
            default:
                return "error";
                break;
        }
    }

    static customer_sign_in(email : string, password :string) {

    }

    static delivery_sign_in(email : string, password :string) {

    }

    static admin_sign_in(email : string, password :string) {

    }

}