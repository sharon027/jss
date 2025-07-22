class Account{
    acc_id=101
    open_Account(){
        console.log("Account opened")
    }

}
let a1=new Account();
let a2=new Account();
console.log(a1)
console.log(a2)
console.log(a1.acc_id)
a1.open_Account()