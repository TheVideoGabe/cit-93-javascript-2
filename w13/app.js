'use strict'
let total = 0;

const render = (output) => {
    const sale = document.createElement('h3');
    sale.textContent = output.summary();
    document.querySelector('#output').appendChild(sale);
    const hr = document.createElement('hr');
    document.querySelector('#output').appendChild(hr);
    document.querySelector('#total').innerHTML = ' ';
    const showTotal = document.createElement('p');
    showTotal.textContent = `Total Sales: $${output.trackSales().toFixed(2)}`;
    document.querySelector('#total').appendChild(showTotal);
};

const donutShop = function (customer, donuts, price) {
    this.customer = customer;
    this.donuts = donuts;
    this.price = price;
};

const customers = ['Tony', 'Steve', 'Bruce', 'Loki', 'Sylvie', 'Dexter', 'Peter'];
const donuts = ['Chocolate', 'Vanilla', 'Coconut', 'Bacon',];
const prices = [1, 1.5, 2,];

donutShop.prototype.summary = function () {
    return `${this.customer} ordered a ${this.donuts} donut for $${this.price.toFixed(2)}`
};

donutShop.prototype.trackSales = function () {
    return total += this.price
};

document.querySelector('#process').addEventListener('click', () => {
    const process = new donutShop(
        customers[random(0, 6)],
        donuts[random(0, 3)],
        prices[random(0, 2)],
    );
    render(process);
});

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};