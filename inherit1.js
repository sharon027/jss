class Account{
    acc_Name;
    acc_Address;
    acc_Mobile;
    update_Address(){}
    update_Mobile(){}
}

class SA extends Account{
    acc_ID;
    acc_Bal;
    min_Bal=500
    open_Account(){}
    deposit_Amount(amount){}
    withdrawl(amount){}
    get_Bal(){}
}

let c1=new SA{101,'Rahul','Wayanad',9894842430,5000}
class CA extends Account{
     acc_ID;
    acc_Bal;
    min_Bal=5000

}