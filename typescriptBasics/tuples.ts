const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Tuple Type alias
type Drink = [string, boolean, number];

// These are Tuples
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Why tuples? Sometimes it's not worth it.
const carSpecs: [number, number] = [400, 3354];

const carSpecsObj = {
    horsepower: 400,
    weight: 3354
};