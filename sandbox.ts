// const ch = 'mario';

// console.log(ch);

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach(input => {
//     console.log(input);
// })

// const circ = (d:number) => {
//     return d*Math.PI;
// }

// // console.log(circ('Hello'));
// console.log(circ(2));

// //arrays
// let names = ['abc', 'mario', 'yoshi'];
// names.push('toad');
// // names.push(3);
// let mixed = ['ken', 4, 'alala', 8, 9];
// mixed.push('xyz');
// mixed.push(10);
// mixed[0] = 3;
// console.log(mixed);
// // mixed.push(true);

// //objects
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }
// ninja.age = 40;
// ninja.name='ryu';
// //cant add additional properties as well
// //ninja.skills = [1,2,3] - cant do this as well
// //ninja.age='30' - cant do this as well
// //ninja = '' cant change the type from object to string
// //can change it to another object though! with the same properties
// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
//     age: 40,
// }

// //explicit types
// let char: string;
// let age: number;
// let isLoggedIn: boolean;

// console.log(char);

// //arrays
// let ninjas: string[];

// //this gives error- ninjas.push('shruti') because we havent initialized it yet

// ninjas = ['yoshi', 'mario'];

// //union types mixed types
// let mixed2: (string|number)[] = [];
// mixed2.push('hello');
// mixed2.push(20);

// //objects
// let ninjaOne: object;
// ninjaOne = {name: 'yoshi', age: 30};
// ninjaOne = [];

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }

// ninjaTwo = {name: 'mario', age: 20, beltColour: 'red'}

// //any type
// let ages: any = 25;

// ages = true;
// console.log(ages);
// ages = 'hello';
// console.log(ages);
// ages = {name: 'luigi'};
// console.log(ages);

// let mixed3: any[] = [];
// //now we can add value of any type

// //for boject pf any type
// let ninja4: { name: any, age: any} 

// console.log('test');

// let greet: Function;

// greet = () => {
//     console.log('hello again');
// }

// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a+b);
//     console.log(c);
// }

// add(5,10);

// const add2 = (a: number, b: number, c?: number | string = 10) => {
//     console.log(a+b);
//     console.log(c);
// }
// add2(5,10);

// const minus = (a: number, b: number): number => {
//     return a+b;
// }
// let result = minus(10, 7);
// console.log(result);

//new lesson
let greet: (a: string, b:string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

//example 2
let calc: (a: number, b: number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne+numTwo;
    }else{
        return numOne-numTwo;
    }
}

