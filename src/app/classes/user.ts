export class User {
    public firstName:string;
    public lastName:string;
    public email:string;
    public monthlyAdvertisingBudget:number;
    public phoneNumber:number;

    constructor(user) {
        this.firstName = user.firstName.value
        this.lastName = user.lastName.value 
        this.email = user.email.value 
        this.monthlyAdvertisingBudget = user.monthlyAdvertisingBudget.value 
        this.phoneNumber = user.phoneNumber.value
    }


}
