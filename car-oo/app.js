//Unit 12 Object Orientation Exercise

// console.log('appjs init');

// class Triangle {
// 	constructor(a, b, c) {
// 		if (!Number.isFinite(a) || a <= 0)
// 			throw new Error('sides must be non negative');
// 		console.log('triangle class init');
// 		this.a = a;
// 		this.b = b;
// 		this.c = c;
// 	}
// 	getArea() {
// 		const { a, b, c } = this;
// 		const s = (a + b + c) / 2;
// 		return s;
// 	}
// }

// Number.isFinite(n) <==== good number validator, will be false on strings, booleans, etc.
// On constructor validation, throw Error rather than returning a message because
// operation will continue and may be buggy.

// OO Challenge Part 1
// Create a class for each vehicle with make, model, year properties
// Each vehicle instance should have access to honk method, which returns string "Beep"
// Each vehicle should have method called toString, which returns the string containing
// the make, model, and year.

// let v = new Vehicle('honda','accord',1999)
// v.honk()
// v.toString()

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep...';
	}
	toString() {
		return `This vehicle is a ${this.year} ${this.make} ${this.model}`;
	}
}

// Part Two
// Create class for Car, inherit from Vehicle and have a property called numWheels with value of 4
class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}
// Part Three
// Create class for Motorcycle, inherit Vehicle, numWheels is 2. Method revEngine returns "VROOM."
class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM.';
	}
}

// Part Four
// Create a Garage class, property vehicles is array of Vehicles, property capacity number of vehicles
// that will fit in the garage. On creation, vehicles is empty, capacity needs to be provided.
// Method add() should add a Vehicle to the array if Vehicle class and garage is not full.

class Garage {
	constructor(capacity) {
		this.vehicles = [];
		//Valid capacity required, otherwise throw an Error
		if (capacity > 0) this.capacity = capacity;
		else throw new Error('Invalid capacity');
		console.log('Garage created with capacity of ' + this.capacity);
	}
	add(vehicle) {
		if (!(vehicle instanceof Vehicle))
			return 'can only add Vehicle class items to this garage';
		if (this.vehicles.length < this.capacity)
			return this.vehicles.push(vehicle);
		else return 'cannot add';
	}
}

// const a = new Car('Audi', 'S5', 2020);
// const b = new Motorcycle('BMW', 'EBike', 2019);
// const c = new Car('Honda', 'Accord', 1999);
// const g = new Garage(3);
//g.add('lol');
//g.add(a);
//g.add(b);
//g.add(c);
//const x = new Garage();
//const y = new Garage(-1);
//const z = new Garage('x');
