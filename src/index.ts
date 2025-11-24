//hello TS
// console.log(Math.floor(10.5))

//ceci est un commentaire

// let num = 10;
// num = "test";
// console.log(num)

// let age = 20;
// if (age > 30) {
//     console.log("Good")
// } else {
//     console.log(age +"Bad")
// }
// let age = "20";
// age = "10"
// if (age > "30") {
//     console.log("Good")
// } else {
//     console.log(age.repeat(3) +"Bad")
// }

// let  firstName: string = "Sami";
// let age: number = 40;
// let hire: boolean = true;
// let all :any = 'test de any'//cas particulier
// all = 5;
// firstName = 40;
// console.log(firstName)
// firstName = "Oussama"
// all = 100;

// function add(n1:number, n2:number):void {
//     //   return n1 + n2;
//     console.log(n1+n2)
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

// let fruits = ["apple", "orange", "banana", "ananas"]
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].repeat(2))
// }
// let fruit: string[] = ["apple", "orange", "banana", "ananas"]
// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i].repeat(2))
// }

// *****************!Array***********
// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ['a', 'b', 'c'];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, 'h', 't', 'l']
// let arrayFour: (string | number | number[])[] = [1, 2, 3, 4, 'h', 't', 'l', [7,8,3]]


// *********************!Function Optional and Default Parameters************************
// function displayData(name:string ="Un", age:number, country:string):string {
//     return `${name}, ${age}, ${country}`
// }

// console.log(displayData("Ali"))
// console.log(displayData("Ali", 40, "tunisia"))

// function displayData(name:string ="Un", age:number, country?:string) {
//     return `${name}, ${age}, ${country}`
// }
// console.log(displayData("ali", 10))

// function displayData(name:string ="Un", age:number, country?:string) {
//     return `${name}, ${age}, ${country}`
// }
// console.log(displayData("sam", 10, "tunisia"))
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
// const addArrow = (num1: number, num2: number) => num1 + num2
// console.log(addArrow(52, 8))

// *****************************!Tuple******************
// let article: [number, string, boolean] = [11, "Title", false]
// article= [1]
// article.push(100);
// console.log(article)

// let article:readonly [number, string, boolean] = [11, "Title", false]
// article.push(100);
// console.log(article)

// let article: [number, string, boolean] = [11, "Title", false]
// // // desctruction
// const [id, title, publish] = article;
// console.log(id)
// console.log(title)


// *********************************DATA TYPES: void never*******
// function logging(msg: string) {
//     console.log(msg);
//     return msg;
// }
// console.log(logging("I am a message"))
// let ch = logging("I am a message");
// console.log(ch)
// function logging(msg: string):void {
//     return 
//     console.log(msg);
//     // or ommitedit
// }
// console.log(logging("I am a message"))
// console.log("test") //never

// const fail = (msg: string)=>{
//     throw new Error(msg);
//     return msg;

// }
// fail("erreur exemple")
// function always(name:string) {
//     while (true) { console.log(name) }
//     console.log('bonjour')
// }
// function always(name:string):never {
//     while (true) { console.log(name) } 
//     console.log('bonjour')
// }

// always('Amine');// boucle infine 


// **********************!Enums*****************

// enum Level {
//  kids = 15,
// easy = 9,
// medium = 6,
//  hard = 3,
// }
// let lvl: string = "easy";
// if (lvl === "easy") {
//     console.log(`the level is ${lvl} and number of secondis ${Level.easy}`)
// }
// **********************!oBJECT!**************
// let myObject: {
//     //déclaration
//     userName: string,
//     id: Number,
//     hire: boolean
// } = {
//     //les cles/val
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

// interface User {
//     id: number,
//     userName: string,
//     country: string
// }

// let user: User = {
//     id: 100,
//     userName: 'Anis',
//     country: "Tunisie"
    
// }
// type person = {
//     x: number,
//     y:string
// }

// let moi:person ={x:20, y:"abc"}
// type genre = "Homme" | "femme"
// let person:genre = "Homme"