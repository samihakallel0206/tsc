"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Engine started");
    }
}
let car1 = new Car("BMW", "Z8", 2025);
let car2 = new Car("Volkswagen", "Golf", 2025);
let car3 = new Car("Audi", "A3", 2025);
let car4 = new Car("Peugeot", "508", 2025);
car1.start();
