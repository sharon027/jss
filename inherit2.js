class Account{
    acc_Name;acc_Address;acc_Mobile;
    constructor(name,addr,mobile){
        this.acc_Name=name;
        this.acc_Address=addr;
        this.acc_Mobile=mobile;
    }
    
}

class SA extends Account{
    acc_ID;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,addr,mobile,Bal){
        super(name,addr,mobile)
        this.acc_ID=id;
        this.acc_Bal=Bal;
    }
}

let c1=new SA(101,'Rahul','Wayanad',9894842430,5000)
console.log(c1);
