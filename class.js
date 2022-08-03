'use strict'

class DonutShop {
    constructor() {
        this.customer = document.getElementById('name').value
        this.donuts = document.getElementById('order').value
        this.amount = document.getElementById('amount').value
        this.many = document.getElementById('amount').options[amount.selectedIndex].text;
        this.price = this.random()
    }
    summary() {
        this.price = this.random()
        return `${this.customer} Ordered ${this.many} ${this.donuts} Donut/s For $${this.price}`
    }
    trackSales() {
        return total += this.price
    };
    random() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1 * this.amount
    }
    render() {
        if (errorEl.textContent) {
            return
        } else {
            const sale = document.createElement('h3');
            sale.textContent = transaction.summary()
            document.querySelector('#output').appendChild(sale);
            const hr = document.createElement('hr');
            document.querySelector('#output').appendChild(hr);
            document.querySelector('#total').innerHTML = ' ';
            const showTotal = document.createElement('p');
            showTotal.textContent = `Total Sales: $${transaction.trackSales().toFixed(2)}`;
            document.querySelector('#total').appendChild(showTotal);
        }
    }
    validate() {
        let errors = [];
        errorEl.textContent = ""
        if (this.customer === '') {
            errors.push('Please input Your Name')
        }
        if (this.donuts <= 0) {
            errors.push('Please Choose a Type of Donut')
        }
        if (this.amount <= 0) {
            errors.push('Please Choose How Many')
        }
        if (errors.length > 0) {
            errorEl.textContent = errors.join(", ")
        }
    }
}
