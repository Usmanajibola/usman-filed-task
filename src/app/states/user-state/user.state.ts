export interface UserState {
    firstName:string,
    lastName:string,
    email:string,
    monthlyAdvertisingBudget:number,
    phoneNumber:number
}


export const initialState:UserState = {
    firstName:'',
    lastName:'',
    email:'',
    monthlyAdvertisingBudget:null,
    phoneNumber:null,

}