// private can only be called inside its class. (by other methods)
// protected can only be called inside its class or child classes. (by other methods)
class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color); // orange

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car( 4, 'blue');
car.startDrivingProcess();