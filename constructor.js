class Parent {
    Pname;
    constructor(name) {
        this.Pname = name;
    }
}

class Child extends Parent {
    Cname;
    constructor(Cname, Pname) {
        super(Pname);          // Calls Parent's constructor with Pname
        this.Cname = Cname;    // Sets the child's own property
    }
}

// Creating an instance
let c1 = new Child('Rahul', 'Gandhi');

console.log(c1);  // Output: Child { Pname: 'Gandhi', Cname: 'Rahul' }
