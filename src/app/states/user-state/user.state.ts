export interface UserState {
    firstName:string,
    lastName:string,
    email:string,
    monthlyAdvertisingBudget:number,
    phoneNumber:number
}


export const initialState:UserState = {
    firstName:'Usman',
    lastName:'Abass',
    email:'usmanajibolaabass@gmail.com',
    monthlyAdvertisingBudget:null,
    phoneNumber:null,

}