'use strict'

const transaction = new DonutShop()
const errorEl = document.querySelector('#error')
let total = 0;

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.innerText = ""
    transaction.customer = document.getElementById('name').value
    transaction.donuts = document.getElementById('order').value
    transaction.amount = document.getElementById('amount').value
    transaction.many = document.getElementById('amount').options[amount.selectedIndex].text;
    transaction.validate()
    transaction.render()
    document.getElementById("form").reset();
})