const fruits = ['Banana', 'Orange', 'Apple', 'Grapes', 1];

const first_fruit = fruits[0];
fruits[fruits.length - 1] = 'Mango';

console.log('First Fruit:', first_fruit);
fruits.forEach( fruit =>
{
    console.log(fruit);
})