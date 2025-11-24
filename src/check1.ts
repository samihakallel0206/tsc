//définir l'interface
interface Vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}
//Implémenter la class
class Car implements Vehicule {
  make: string;
  model: string;
  year: number;
 
  constructor( make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year
  }
  start(): void {
    console.log("Engine started");
    // console.log(`The ${this.make} ${this.model} engine started`)
  }
}

//instance
let car1 = new Car("BMW", "Z8", 2025);
let car2 = new Car("Volkswagen", "Golf", 2025);
let car3 = new Car("Audi", "A3", 2025);
let car4 = new Car("Peugeot", "508", 2025);

car1.start()
