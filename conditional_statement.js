class Person {
    name;
    age;
    status;
}

let person1 = new Person();
person1.name = 'Natoy';
person1.age = 16;
person1.status = 'resident';

let person2 = new Person();
person2.name = 'Jomarie';
person2.age = 24;
person2.status = 'resident';

if (person1.age > 18 && person1.status == 'resident')
    console.log(`${person1.name} you are allowed to vote!`);

else console.log(`${person1.name} you are not allowed to vote!`);

if (person2.age > 18 && person2.status == 'resident')
    console.log(`${person2.name} you are allowed to vote!`);

else console.log(`${person2.name} you are not allowed to vote!`);
