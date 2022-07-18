// 1 .
let obj1 = {
    Name1 : "X-Asis",
    Prop1 : "Horizental",
    Other1 : "Row Manner",
}

let Obj2 = {
    Name2 : "Y-Axis",
    Prop2 : "Vertical",
    Other2 : "Column Manner",
}

Obj2.__proto__=obj1;
console.log(Obj2.__proto__.Prop1); // Horizental
console.log(Obj2.__proto__.Name1); // X-Asis
console.log(Obj2.__proto__.Other1); // Row

// The prototype Relative to function & proto relative to object
// The __proto__ was created by the javascript 
// along by the object and it == to prototype 
// of the parent object

// 2 .

    function Person() {
        this.name = 'Prasanna'
    }
    
    Person.prototype.name = 'Ravi';
    Person.prototype.branch = 'Mechanical Engineering';
    
    const person1 = new Person();
    
    console.log(person1.name); // Ravi
    console.log(person1.branch); // Mechanical Engineering

// 3 .

let GroupOfArrays = [5,6,7,8,9];
    let Array = {
        Minimise : function () {
            let reduces = GroupOfArrays.reduce((acc,cur) => acc = acc + cur,0);
                console.log(reduces);
        }
    }
    Array.Minimise();

// 4 .   
let Result={
    PassMarks : "Above Or Equal to 35",
    FailMarks : "Below 35",
}

let Result1=Object.keys(Result);
    console.log(Result1);


 

   