const car = {
    make: "Chevrolet",
    model: "Corvette Stingray",
    year: 2023,
    colors: [
        "Red",
        "Green",
        "Black"
    ],
    hybrid: true,

    drive: () => {
        return 'Engine start';
    },

    stop: () => {
        return 'Engine Stop';
    }
};

console.log(car.make);
console.log(car.colors[0]);

console.log(car.drive());
console.log(car.stop());