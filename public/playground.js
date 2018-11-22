class Car { //original setting of class - defining stuff
    constructor() {
        this.wheels = 4;
        this.type= 'hatchback'
    }
}

class Ford extends Car { // extends Car takes the information from Car and puts it in Ford
    constructor() { //this literally makes shit
        super() //this will take then take the props from Car and allow the ability to add more props to be called 
                // later on from the Ford class that are added onto the Car class in this instance of Car (Ford class)

        this.windows = 4; // this takes the props from Car and adds onto them 
    }

}

const car = new Car(); // car calls the car class
const ford = new Ford(); // Ford takes the props from the Car class - sets it into the ford const 

console.log(ford.wheels) // therefor ford can take the Ford class which has the Car properties and call wheels from it 
                         // and display it 

//this is called INHERITING