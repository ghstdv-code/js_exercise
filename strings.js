
const fullName = (firstName, lastName) => {
    return (firstName + ' ' + lastName).toUpperCase();
}

console.log(fullName('Gernel', 'Esguerra'));
console.log(fullName('Esguerra', 'Gernel'));

// Refactorted to object parameter

const personFullName = {
    firstName: 'Gernel',
    lastName : 'Esguerra'
};

const fullNameRefactored = ({firstName, lastName}) => { return (firstName + ' ' + lastName).toUpperCase(); }

console.log(fullNameRefactored(personFullName));
