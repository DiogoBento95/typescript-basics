const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const carsByMake2 = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
// pop removes last element in the array.

// Prevent incompatible values
//carMakers.push(100); <- Can only push strings inside a string array.

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types  (avoid arrays with 'any' type)
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-15');
importantDates.push(new Date());
