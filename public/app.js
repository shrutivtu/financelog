import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 235);
docTwo = new Payment('mario', 'plumbing work', 200);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('lulgi', 'work on the lulgi website', 250);
// console.log(invOne);
// console.log(invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // console.log(inv.format());
});
// invOne.client = 'yoshi';
// invTwo.amount = 400;
// console.log(invOne, invTwo);
// console.log(invoices);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
