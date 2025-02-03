//hello TS
// console.log(Math.floor(12))

//ceci est un commentaire

// let num = 10;
// num = "test";
// console.log(num)

// let age = 40;
// if (age > 30) {
//     console.log("Good")
// } else {
//     console.log(age +"Bad")
// }
// let age = 40;
// if (age > 30) {
//     console.log("Good")
// } else {
//     console.log(age.repeat(3) +"Bad")
// }

// let  firstName: string = "Sami";
// let age: number = 40;
// let hire: boolean = true;
// let all :any = 'test de any'

// firstName = 40;
// firstName = "Oussama"
// all = 100;

// function add(n1:number, n2:number) {
//   return n1 + n2;
// }
// console.log(add(10, 20));
// console.log(typeof add(10, 20));
// console.log(add(10, "20"));
// console.log(typeof add(10, "20"));

// let a
// let b: string | number

// a = 100;
// a = "test of any"
// a = true;
// b=5.2
// b = false;

// let fruits = ["apple", "orange", "banana", "ananas",10]
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].repeat(2))
// }
// let fruits: string[] = ["apple", "orange", "banana", "ananas",10]
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].repeat(2))
// }

// *****************!Array***********
// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ['a', 'b', 'c'];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, 'h', 't', 'l']
// let arrayFour: (string | number | number[])[] = [1, 2, 3, 4, 'h', 't', 'l', [7,8,3]]


// *********************!Function Optional and Default Parameters************************
// function displayData(name:string ="Un", age:number, country:string) {
//     return `${name}, ${age}, ${country}`
// }

// console.log(displayData("Ali"))
// console.log(displayData("Ali" 40, "tunisia"))

// function displayData(name:string ="Un", age:number, country?:string) {
//     return `${name}, ${age}, ${country}`
// }
// function displayData(name?:string ="Un", age:number, country?:string) {
//     return `${name}, ${age}, ${country}`
// }

// ******************************!function Rest parameter
// function add(...nums: number[]):number {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++){
//         result += nums[i]
//     }
//     return result
// }

// console.log(add(10,20,30,100))
// console.log(add(10,20,30,100, true))
// console.log(add(10,20,30,100, +true))

// *****************!Arrow function***************
// const add = function (num1: number, num2: number): number{
//     return num1+num2
// }
// console.log(add(5, 8))
// const addArrow = (num1: number, num2: number): number => num1 + num2
// console.log(addArrow(52, 8))

// *****************************!Tuple******************
// let article: [number, string, boolean] = [11, "Title", false]
// article= [1].
// article.push(100);
// let article:readonly [number, string, boolean] = [11, "Title", false]
// article.push(100);

// let article: [number, string, boolean] = [11, "Title", false, 4]
// desctruction
// const [id, title, publish] = article;
// console.log(id)
// console.log(title)


// *********************************DATA TYPES: void never*******
// function logging(msg: string) {
//     console.log(msg);
//     return msg;
// }
// console.log(logging("I am a message"))
// function logging(msg: string):void {
//     console.log(msg);
//     // return or ommitedit
// }
// console.log(logging("I am a message"))
// console.log("test") //never

// const fail = (msg: string)=>{
//     throw new Error(msg);
//     return msg;

// }

// function always(name:string) {
//     while (true) { console.log(name) }
//     console.log('bonjour')
// }
// function always(name:string):never {
//     while (true) { console.log(name) }
//     console.log('bonjour')
// }

// always('Amine');
// console.log(5)

// **********************!Enums*****************

// enum Level {
//  kids = 15,
// easy = 9,
// medium = 6,
//  hard = 3,
// }
// let lvl: string = "Easy";
// if (lvl === "easy") {
//     console.log(`the level is ${lvl} and number of secondis ${Level.easy}`)
// }
// **********************!oBJECT!**************
// let myObject: {
//     userName: string,
//     id: Number,
//     hire: boolean
// } = {
//     userName: "salem",
//     id: 10,
//     hire:true,
// }
// myObject.userName = "Ali";
// myObject.id = 200
// console.log(myObject.userName)
// console.log(myObject)
// nested Object
// let myObject: {
//     userName: string,
//     id: Number,
//     hire: boolean,
//     skills: {
//         one:string,
//         two:string
//     }
// } = {
//     userName: "salem",
//     id: 10,
//     hire: true,
//     skills: {
//         one: "html",
//         two:"css"
//     }
// }

// console.log(myObject.userName)
// console.log(myObject.skills.one)
// let myObject: {
//     userName: string,
//     id: Number,
//     hire?: boolean,
//     skills: {
//         one:string,
//         two:string
//     }
// } = {
//     userName: "salem",
//     id: 10,
//     skills: {
//         one: "html",
//         two:"css"
//     }
// }

// console.log(myObject.userName)
// console.log(myObject.skills.one)

// *************************!Interface**************
interface User {
    id: number,
    userName: string,
    country: string
}

let user: User = {
    id: 100,
    userName: 'Anis',
    country: "Tunisie"
    
}
console.log(object)
