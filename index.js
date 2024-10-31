"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("engine started");
    }
}
const voiture = new Car("jack", "kia", 2004);
voiture.start();
