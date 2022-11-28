export class CustomerServices {
    static check_password(user_name : string, password : string) {
        return user_name == "ahmed" && password == "10";
    }
}