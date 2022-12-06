function calculateTotal(subTotal, tax){
    return subTotal + tax;
}

const order1 =  485, order2 = 360, order3 = 1000;
const tax = 0.05; // 5% tax

console.log(`Order1\nSub-Total: ${order1}\nTax: ${order1 * tax}\nFinal Total: ${calculateTotal(order1, order1 * tax)}\n`);
console.log(`Order2\nSub-Total: ${order2}\nTax: ${order2 * tax}\nFinal Total: ${calculateTotal(order2, order2 * tax)}\n`);
console.log(`Order3\nSub-Total: ${order3}\nTax: ${order3 * tax}\nFinal Total: ${calculateTotal(order3, order3 * tax)}`);
