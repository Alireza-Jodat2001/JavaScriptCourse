29;
// switch (key) {
//     case "ali":
//     case "reza":
//         console.log("first");
//         console.log("second");
//         break;
//     default:
//         break;
// }
31;
// const ali = 12 > 3 ? console.log("first") : console.log("second");
// 12 > 3 ? console.log("first") : console.log("second");
34;
// "jonas.io for support javaScript in browser"
36;
// "use strict"; /* on first line in javaScript pages */
38;
// function expression
// const func = function (ali) {
//     return ali;
// }
// func("reza");
39;
// arrow function
// const func1 = ali => console.log("first");
// const func2 = (ali , reza) => {
//     return ali;
// }
// func("reza");
44;
// const Arr = new Array('reza', 22, true)
// console.log(Arr[Arr.length - 1]);
// Arr[0] = 'mohsen'

// const arr2 = [2 - 1, Arr, 'var']

// const calc = birth => 2023 - birth
// const arr3 = [calc(1991), calc(2000), calc(Arr[Arr.length - 2])]
45;
// array push method
// Arr.push('alireza') /* add to last array */

// const len = Arr.push('ali') /* return arr.length */

// array unshift method
// Arr.unshift("mehran") /* add to first array */

// array remove last element method
// Arr.pop() /* remove to last element in array */

// const popped = Arr.pop() /* return last element */
// Arr.unshift(popped)

// array remove first element method
// Arr.shift() /* remove to first element in array */
// const firstEl = Arr.shift() /* return first element */

// indexOf array method
// const mehArr = [0, 1, 'ali']
// console.log(mehArr.indexOf('ali')); /* if not found element -1 returned */

// includes array method
// console.log(Arr.includes("john")); /* return true or false */
48;
// const aliObj = {
//     friends: ['bezi', 'mehran'],
// }
49;
// const obj = {
//     firstName: "alireza",
//     lastName: "jodat",
//     fre: ["bezi", "ali"]
// }
// console.log(obj.firstName);

// second whay...
// const concatName = "Name"
// console.log(obj[`first${concatName}`]); /* better than for oprating */
// console.log(obj[`last${concatName}`]); /* better than for oprating */

// const prompt1 = prompt('what do you think?')
// console.log(obj[prompt1]);

// how to add
// obj.friend = "ali"
// obj["friend"] = "ali"

// how to accsses to array in
// console.log(`${obj.fre[0]} - ${obj.fre.length}`);
50;
// const newObj = {
//     firstName: "ali",
//     func1: function (params) {
//         // for create new item in object
//         this.age = 19;

//         console.log(this.firstName);
//     },
//     func2: () => console.log("first")
// }
// console.log(newObj.func1(19));
// /* second way */
// console.log(newObj["func1"](19));
54;
// const arr = []
// for (let i = 0; i < 5; i++) {
//     arr[i] = i;

//     // second way
//     arr.push(10 - i)
// }

// const arr4 = ['ali', 2, true, 'mehran']
// for (let i = 0; i < arr4.length; i++) {
//     if (typeof arr4[i] !== "string") continue; /* jump to next step by continue */
//     console.log(arr4[i]);
// }
// for (let i = 0; i < arr4.length; i++) {
//     if (typeof arr4[i] !== "number") break; /* console.log is empty (end for loop) */
//     console.log(arr4[i]);
// }
56;
// let random = Math.trunc(Math.random() * 7) + 1
// while (random !== 6) {
//     console.log("first")
//     random = Math.trunc(Math.random() * 7) + 1
// }
63;
// how to use prettier customize
// how to use user snippets
// intro yourself extentions
64;
// how to install live server by node js
// npm install live-server -g
65;
// codewars.com for many challanges javaScript
67;
// how to find min and max in array on stackoverflow website
// continue keywords in to find min and max (arr[i] !== "string" && continue)
// concat method for merge 2 array (there is solution on stackoverflow website)

// concat method for merge 2 array
// const arrNew = arr3.concat(arr2)
// console.log(arrNew);
69;
// intro new console
// console.error(calc())
// console.warn(calc())

// how to make breakpoint in console in chrome (sources tab) for debugging
70;
// let str = "... "
// const array = [1, 2, 3]
// for (let i = 0; i < array.length; i++) {
//     str += `${array[i]} in ${i} day`
// }
78;
// console.log(document.querySelector(".div").textContent)
// document.querySelector(".div").textContent = "ali"
81;
// document.querySelector(".div").addEventListener("click", function () {
//     console.log("first");
// })
86;
// const innerHtml = message => document.querySelector("message").textContent = message
// innerHtml("you lost...")
88;
// const btns = document.querySelectorAll("btns")
// for (let i = 0; i < btns.length; i++) btns[i].addEventListener("click", () => {
//     document.querySelector("modal").classList.remove("hidden")
// })

// const closeModal= () => document.querySelector("modal").classList.add("hidden")
// btnClose.addEventListener("click", closeModal)
89;
// document.addEventListener("keydown", (event) => {
//     event.key === "Escape" && !modal.classList.contains("hidden")
//         ? closeModal()
//         : console.log("first")
// })
91;
// bntRoll.addEventListener("click", () => {
//     const dice = Math.trunc(Math.random() * 6) + 1
//     diceImg.src = `dice-${dice}.png`
// })
92;
// let activePlayer = 0
// document.querySelector(`curren--${activePlayer}`).textContent = 0
// activePlayer = activePlayer === 0 ? 1 : 0

// second way
// activePlayer = !activePlayer ? 1 : 0

// player0El.classList.toggle("player-active")
// player1El.classList.toggle("player-active")
94;
// let t1, t2, t3;
99;
// arrow function have not (arguments object and this keyword)
101;
// const calcAge = () => {
//     console.log(`${firstName}`)
// }
// const firstName = "ali"
// calcAge()

// let and const (block)
// var (global)
103;
// hoisting

// for variable

// console.log(ali) /* undifind */
// var ali = "reza"

// console.log(reza) /* error */
// const reza = "alli"

// console.log(m) /* error */
// let m = "g"

// for functions

// a() /* OK! */
// function a() {
//     console.log("a")
// }

// a() /* error */
// const a = () => console.log("a")

// a() /* error */
// const a = function() {
//     console.log("a")
// }

// a(1, 2) /* undifind(1, 2) => error: is not a function */
// var a = (a, b) => console.log(a, b)

// you dont use of (var)
105;
// console.log(this) /* => window object */

// const a = function() {
//    console.log(this) /* => undifind */
// }

// const a = () => console.log(this) /* => window */

// const a = {
//     func: function() {
//         console.log(this) /* return => a object */
//     }
// }
// a.func()

// const a = {
//     func: function() {
//         console.log(this)
//     }
// }
// const b = {
//     firstName: "ali"
// }
// b.func2 = a.func
// b.func2() /* this => b object */

// const a = {
//     func: () => console.log(this) /* return => window object */
// }

// const a = {
//     /* a not code block */
// }

106;
// const a = {
//     first: "ali",
//     func: function() {
//         const func2 = function() {
//             console.log(this) /* this => undifind */
//             console.log(this.first) /* this.year => undifind */
//         }
//         func2()
//     }
// }
// a.func()

// solution top problem 👆

// const a = {
//     first: "ali",
//     func: function() {
//         const self = this
//         const func2 = function() {
//             console.log(self.first) /* self.first => "ali" */
//         }
//         func2()
//     }
// }
// a.func()

// arguments keyword

// const a = (a, b) => {
//     console.log(arguments)
// }
// a()
107;
// const me = {
//     age: 12
// }
// const friend = me
// friend.age = 30
// console.log(me.age) /* age => 30 */
// console.log(friend.age) /* age => 30 */
108;
// const me = {
//     firstName: "ali"
// }
// const friend = me
// friend.firstName = "reza" /* OK! */
// friend = {} /* error because friend is a (constant) */

// coppying object but is not deep
// const a = {
//     age: 12,
//     arr: [1, 3]
// }
// const b = Object.assign({}, a)
// b.age = 30
// console.log(a.age) /* 12 */
// console.log(b.age) /* 30 */
// b.arr.push("ali")
// console.log(a.arr) /* [1, 3, "ali"] not deep! */
// console.log(b.arr) /* [1, 3, "ali"] not deep! */
111;
// const arr = [1, 2, 3]
// const [a, b, c] = arr
// console.log(a, b, c)

// const a = {
//     categories: ["car", "game", "food"]
// }
// const [first, second] = a.categories
// console.log(first, second) /* "car" "game" */
// const [x, ,y] = a.categories
// console.log(x, y) /* "car" "food" */

// reverse first and second
// const a = {
//     cat: ["car", "game", "food"]
// }
// let [first, ,second] = a.cat
// console.log(first, second) /* "car" "food" */
// [first, second] = [second, first] /* reversed to first and second */
// console.log(first, second) /* "food" "car" */

// example for reverse first and second
// const a ={
//     arr1: ["ali", "reza"],
//     arr2: ["mohsen", "behzad"],
//     func1: function(startIndex, endIndex) {
//         return [this.arr1[startIndex], this.arr2[endIndex]]
//     }
// }
// let [first, second] = a.func1(0, 1)
// [first, second] = [second, first]
// console.log(first, second) /* "behzad" "ali" */

// for nested destructuring
// const arr = [1, 2, [3, 5]]
// const [i, , [j, k]] = arr
// console.log(i, j, k) /* 1 3 5 */

// destructuring
// const [a, b, c] = [8, 9]
// console.log(a, b, c) /* 8 9 undifind */

// default values in destructuring
// const [a = 0, b = 0, c = 0] = [8]
// console.log(a, b, c) /* 8 0 0 */
112;
// const obj = {
//     fName: "ali",
//     lName: "jodat",
//     age: 22
// }
// const {fName, age, lName} = obj /* order is unimportant */
// console.log(fName, age, lName) /* "ali" 22 "jodat" */

// destructure obj with custom name variable
// const obj = {
//     fName: "ali",
//     lName: "jodat",
//     age: 22
// }
// const {fName: fN, lName: lN, age: a} = obj
// console.log(fN, lN, a)

// default values in destructuring obj
// const obj = {
//     a: [1, 2],
//     b: ["a", "b"]
// }
// const {menu = "", b: str1 = [], a: num1 = 0} = obj /* if menu = [] => [], else if menu => undifind */
// console.log(menu, str1, num1) /* "" ["a", "b"] [1, 2] */

// let a = 100
// let b = 200
// const obj = {
//     a: 12,
//     b: 13,
//     c: 14
// }
// ({a, b} = obj) /* if {a, b} = obj => error, but ({a, b} = obj) is OK! */
// console.log(a, b) /* 12 13 */

// nested object
// const obj = {
//     obj2: {
//         open: 10,
//         close: 20
//     }
// }
// const {obj2} = obj
// console.log(obj2) /* {open: 10, close: 20} */
// const {obj2: {open, close}} = obj
// console.log(open, close) /* 10 20 */
// const {obj2: {open: op = {}, close: cl = "-"}} = obj
// console.log(op, cl) /* 10 20 */

// destructure with argument function
// const obj = {
//     func: function({fName: fN = "none", lName: lN = "none"}) {
//         console.log(fN, lN)
//     }
// }
// obj.func({fName: "ali", lName: "jodat"})

// const obj = {
//     a: "a"
// }
// const {a: str1 = "none", b = 0} = obj
// console.log(str1, b) /* "a" 0 */
113;
// const arr = [7, 8, 9]
// const newArr = [1, 2, ...arr]
// console.log(newArr) /* [1, 2, 7, 8, 9] */
// const nA = [1, 2, arr]
// console.log(nA) /* [1, 2, Array(3)] */
// console.log(...arr) /* 7 8 9 */

// const obj = {
//     menu: ["a", "b", "c"]
// }
// const newArr = [...obj.menu, "ali"]
// console.log(newArr) /* ["a", "b", "c", "ali"] */

// Iterables => string, array, maps, sets. but not object
// const str = "ali"
// const arr = [...str, "s"]
// console.log(arr) /* ["a", "l", "i", "s"] */
// console.log(`${...str}`) /* => error */

// const obj = {
//     func: function(num1, num2) {
//         console.log(`${num1} , ${num2}`)
//     }
// }
// obj.func([prompt("enter num..."), prompt("enter num...")])
// second way
// const arr = [prompt("enter num..."), prompt("enter num...")]
// obj.func(...arr)

// copy with spread oprator
// const obj = {
//     fN: "ali",
//     lN: "jodat"
// }
// const obj2 = {num: 3, ...obj}
// console.log(obj2) /* 3 "ali" "jodat" */
// coppying object
// const copyObj = {...obj2}
// copyObj.lN = "johnnesar"
// console.log(copyObj.lN) /* johnnesar */
// console.log(obj2.lN) /* jodat */
114;
// const arr = [1, 2, 3, 4, 5]
// const [a, b, ...others] = arr
// console.log(a, b, others) /* 1 2 [3, 4, 5] */

// const arr = ["ali","jodat"]
// const arr1 = ["a", "j"]
// const [fname, , ...object1, b] = [...arr, ...arr1] /* error for b */
// const [fname, , ...object1] = [...arr, ...arr1]
// console.log(fname, object1) /* "ali" "a" "j" */

// object spread oprator
// const obj = {
//     sat: true,
//     sun: false,
//     mon:true
// }
// const {sun, ...others} = obj
// console.log(sun, others) /* { sun: false, { sat: true, mon:true } } */

// const add = function(...num) {
//     console.log(num)
// }
// add(1, 2, 3, 4) /* [1, 2, 3, 4] */

// const add = function(...num) {
// let sum = 0
// first way
// num.forEach(item, sum += item)
// second way
// num.forEach(item, () => sum += item)
// }
// add(1, 2, 3, 4) /* 10 */

// const obj = {
//     func: function(first, ...others) {
//         console.log(first)
//         console.log(others)
//     }
// }
// obj.func("ali", "reza", "a") /* "ali" */ /* "reza", "a" */
115;
// ---- OR ----
// short circet اتصال کوتاه یا
// اگر طرف اول ارزش واقعی داشته باشد یا به عبارتی درست باشد. سریعا برمیگردد

// console.log(3 || "ali") /* 3 */
// console.log("" || "ali") /* "ali" */
// console.log(true || 0) /* true */
// console.log(undefined || null) /* null */
// console.log(undefined || null || 0 || "hello") /* "hello" */

// const obj = {}
// first way
// const result = obj.fN ? obj.fN : "none"
// console.log(result) /* "none" */
// second way
// const newResult = obj.lN || "not existed"
// console.log(newResult) /* "not existed" */

// ---- AND ----
// با دیدن مقدار درست به سراغ بعدی میرود تا اینکه به مقدار نادرست برسد و همان را برگرداند

// console.log(0 && "jonas") /* 0 */
// console.log(7 && "jonas") /* "jonas" */
// console.log("hello" && 23 && null && true) /* null */

// first way
// const obj = {
//     ali: function() {
//         console.log(obj.ali)
//     }
// }
// if (obj.ali) {
//     console.log(obj.ali) /* function()... */
// }
// second way
// obj.reza && console.log(obj.reza) /* error or undefined */
116;
// nullish values null and undefined (not a 0 and "")
// با دیدن مقدار نال یا آندیفایند به سراغ بعدی میرود
// ولی اگر نال یا آندیفایند نبود همان را برمیگرداند

// console.log(0 ?? 10) /* 0 */
// console.log("" ?? 10) /* "" */
// console.log(undefined ?? 10) /* 10 */
// console.log(null ?? 10) /* 10 */
117;
// OR assignment operator
// مقدار دهی میکند در صورت نادرست بودن آن متغیر
// const obj = {
//     fn: "ali"
// }
// first way
// obj.fn = obj.fn || "reza" /* fn: "ali" */
// obj.ln = obj.ln || "reza" /* ln: "reza" */
// second way
// obj.fn ||= "reza" /* fn: "ali" */
// obj.ln ||= "reza" /* ln: "reza" */

// nullish assignment operator
// const obj = {
//     fn: "ali"
// }
// obj.fn ??= 10 /* "ali" */
// obj.ln ??= "reza" /* "reza" */

// AND assignment operator
// const obj = {
//     fn: "ali"
// }
// obj.fn = obj.fn && "<ANONYMOUS>" /* <ANONYMOUS> */
// obj.ln = obj.ln && "<ANONYMOUS>" /* undefined */
// obj.fn &&= "<ANONYMOUS>" /* <ANONYMOUS> */
// obj.ln &&= "<ANONYMOUS>" /* obj = {fn: "ali"} ال ان ساخته نمیشود */
118;
// const game = {
//     score: "4:0",
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5
//     }
// }
// const { odds } = game
// console.log(odds) /* odds: { game: {...} } */
// const { odds: { score, x: newX = 0, team2 } } = game
// console.log( score, newX, team2 ) /* 1.33 3.25 6.5 */
119;
// forOf loop (Iterables)
// const arr = [1, 2, "ali"]
// for (const item of arr) console.log(item) /* 1 2 "ali" */
// first way
// for (const item of arr.entries()) console.log(item) /* [0, 1] [1, 2] [2, "ali"] ... [index, values] */
// second way
// const newArr = [...arr.entries()]
// console.log(newArr) /* [0, 1] [1, 2] [2, "ali"] ... [index, values] */
// console.log(newArr[2][1]) /* "ali" */
120;
// 1
// const obj = {
//     a: {
//         b: {
//             open: 1
//         },
//         c: {
//             open: 1
//         },
//         d: {
//             open: 1
//         },
//     }
// }
// 2
// const a = {
//     b: {
//         open: 1
//     },
//     c: {
//         open: 1
//     },
//     d: {
//         open: 1
//     },
// }
// const newObj = {
//     a,
//     func() {
//         console.log("ali")
//     }
// }
// 3
// const arr = ["f1", "f2", "f3"]
// const obj = {
//     [arr[0]]: {
//         open: 1
//     },
//     [arr[1]]: {
//         open: 1
//     },
//     [arr[2]]: {
//         open: 1
//     },
// }
121;
// optional chaining
// 1
// const obj = {
//     a: {
//         b: "bbb"
//     }
// }
// if (obj.a && obj.a.b) console.log(obj.a.b) /* "bbb" */
// 2
// console.log(obj.a?.b) /* "bbb" */
// console.log(obj.c?.d) /* undefined */
// 3
// console.log(obj?.c?.d) /* undefined */
// 4
// const arr = ["f1", "f2", "f3", "f4"]
// const obj = {
//     [arr[0]]: {
//         open: 1
//     },
//     [arr[1]]: {
//         open: 2
//     },
//     [arr[2]]: {
//         open: 3
//     },
// }
// for (const item of arr) {
//     const result = obj?.[item]?.open ?? `item: ${item} is null or undefined`
//     console.log(result) /* 1 2 3 "item: f4 is null or undefined" */
// }

// const obj = {
//     order(a, b) {
//         console.log(a, b)
//     }
// }
// obj?.order?.(1, 2) /* 1 2 */
// console.log(obj?.o?.(1, 2) ?? "o is undefined") /* "o is undefined" */

// const arr = [{a: "ali"}]
// console.log(arr[0]?.a ?? "index 0 undefined") /* "ali" */
// console.log(arr[1]?.a ?? "index 0 undefined") /* "index 0 undefined" */
122;
// forOf loop on objects
// const obj = {
//     a: {
//         x: "reza"
//     },
//     b: {
//         x: "r"
//     },
//     c: {
//         x: "ra"
//     },
// }
// 1
// for (const item of Object.keys(obj)) { /* Object.keys(obj) === is Array */
// console.log(item) /* a b c */
// }
// 2
// console.log(Object.keys(obj)) /* ['a', 'b', 'c'] */
// 3
// for (const item of Object.values(obj)) {
// console.log(item) /* {x: 'reza'} {x: 'r'} {x: 'ra'} */
// }
// 4
// console.log(Object.values(obj)) /* [{…}, {…}, {…}] */
// 5
// for (const item of Object.values(obj)) {
// console.log(item?.x) /* reza r ra */
// }
// 6
// console.log(Object.entries(obj)) /* [Array(2), Array(2), Array(2)] */
// 7
// console.log(Object.entries(obj)[0]) /* ["a", {x: "reza"}] => [key, {values}] */
// 8
// for (const item of Object.entries(obj)) {
// console.log(item?.[0]) /* a b c => keys */
// console.log(item?.[1]) /* {x: "reza"} {x: "r"} {x: "ra"} => values */
// }
// 9
// for (const [key, value] of Object.entries(obj)) {
// console.log(key) /* a b c => keys */
// console.log(value) /* {x: "reza"} {x: "r"} {x: "ra"} => values */
// }
// 10
// for (const [key, {x, y: newY = "not Existed"}] of Object.entries(obj)) {
// console.log(key) /* a b c => keys */
// console.log(x) /* reza r ra => values */
// console.log(newY) /* "not Existed" => values */
// }
123;
// const arr = ["leo", "leva", "ronaldo"]
// for (let [index, name] of arr.entries()) console.log(`goal ${++index}: ${name}`) /* goal 0: leo goal, 1: leva goal, 2: ronaldo */

// 1
// const obj = {
//     scored: {
//         ali: 12,
//         reza: 34,
//         mehran: 9
//     }
// }
// const scoredArr = Object.values(obj.scored)
// let average = 0
// for (const item of scoredArr) {
//     average += item
// }
// console.log(average /= scoredArr.length) /* 18.3 */

// 2
// const obj = {
//     scored: {
//         ali: 12,
//         reza: 34,
//         mehran: 9
//     }
// }
// const scoredArr = Object.entries(obj.scored)
// let average = 0
// for (const item of scoredArr) average += item?.[1]
// console.log(average /= scoredArr?.length) /* 18.3 */

// 3
// const obj = {
//     scored: {
//         ali: 12,
//         reza: 34,
//         mehran: 9
//     }
// }
// for (const [ name, scored ] of Object.entries(obj.scored)) {
// 1
// if (name === "reza") continue
// console.log(`${name}: ${scored}`)
// 2
//     name === "reza" ? '' : console.log(`${name}: ${scored}`)
// }
124;
// LEARN SET()

// 1
// const ns = new Set(["p", "p", 1])
// console.log(ns); /* {'p', 1} => عناصر تکراری ندارد */

// 2
// const ns = new Set("ali")
// console.log(ns) /* {'a', 'l', 'i'} => because string is itrables */
// console.log(ns.size) /* 3 */

// 3
// const ns = new Set(["p", "p", 1])
// console.log(ns.has("p")) /* true */
// console.log(ns.has("b")) /* fale */

// 4
// const ns = new Set(["p", "p", 1])
// ns.add("behzad")
// ns.add("behzad")
// console.log(ns) /* {'p', 1, 'behzad'} => عنصر تکراری ندارد */
// ns.delete(1) /* این روش در آرایه نیست */
// console.log(ns) /* Set(2) {'p', 'behzad'} */
// console.log(ns[0]) /* undefined */
// ns.clear()
// console.log(ns) /* Set(0) {size: 0} */

// 5
// const ns = new Set(["p", "p", 1])
// for (const item of ns) console.log(item);

// 6
// const arr = ['p', 'p', 'p', 'b', 1]
// const ns = new Set(arr)
// console.log(ns) /* Set(3) {'p', 'b', 1} => برای حذف عناصر تکراری این روش مناسب است */

// 7
// convert set() to array
// const arr = ['p', 'p', 'p', 'b', 1]
// const ns = [...new Set(arr)]
// console.log(ns) /* (3) ['p', 'b', 1] */

// 8
// const obj = {
//     a: "a",
//     b: "a",
//     c: "a",
// }
// const array = [...obj]
// console.log(array) /* error => obj is not iterable */

// 9
// const str = "ali"
// const arr = [...str]
// console.log(arr) /* ['a', 'l', 'i'] => چون تکرار شونده هست */

// 10
// console.log(new Set("ali").size) /* 3 => چون تکرار شونده هست */
125;
// LEARN MAP()

// const nm = new Map()
// nm.set("ali", 22)
// console.log(nm) /* Map(2) {'ali' => 22} */
// nm.set(true, 21).set("categories", [true, false])
// console.log(nm) /* Map(3) {'ali' => 22, true => 21, 'categories' => Array(2)} */

// const nm = new Map()
// nm.set("name", "alireza").set("age", 22).set(true, "live")
// console.log(nm.get("name")) /* alireza */
// console.log(nm.get("age")) /* 22 */
// console.log(nm.get(true)) /* live */

// const nm = new Map()
// nm
// .set("open", 11)
// .set("close", 20)
// .set(true, "is open")
// .set(false, "is closed")
// const time = 21
// console.log(nm.get(time > nm.get("open") && time < nm.get("close"))) /* is closed */

// const nm = new Map()
// nm
// .set("open", 11)
// .set("close", 20)
// console.log(nm.has("open")) /* true */
// nm.delete("open")
// console.log(nm) /* Map(1) {'close' => 20} */
// console.log(nm.size) /* 1 */
// nm.clear()
// console.log(nm, nm.size) /* Map(0) {size: 0} 0 */

// const nm = new Map()
// nm
// .set([1, 2], "test")
// console.log(nm.get([1, 2])) /* error => undefined => زیرا آدرس آنها با هم یکسان نیستند */

// fix top problem
// const nm = new Map()
// const arr = [1, 2]
// nm
// .set(arr, "test")
// console.log(nm.get(arr)) /* test => زیرا آدرس آنها با هم یکسان است */

// const nm = new Map()
// nm
// .set(document.querySelector("body"), "this is body...!!")
// console.log(nm.get(document.body)) /* this is body...!! */
// console.log(nm) /* Map(1) {body => 'this is body...!!'} */
126;
// const nm = new Map([
//     [1, "c"],
//     [2, "c+"],
//     [3, "c++"],
// ])
// console.log(nm) /* Map(3) {1 => 'c', 2 => 'c+', 3 => 'c++'} */

// روشی برای تبدیل اشیاء به مپ
// const obj = {
//     "a": 1,
//     "b": 2
// }
// console.log(Object.entries(obj)) /* ['a', 1] ['b', 2] */

// روشی برای تبدیل آرایه ای از آرایه ها به مپ
// const arr = ["a","b"]
// const nm = new Map(Object.entries(arr))
// console.log(nm) /* Map(2) {'0' => 'a', '1' => 'b'} */
// مقدار اول ایندکس و دوم ارزش

// const obj = {
//     "a": 1,
//     "b": 2
// }
// const nm = new Map(Object.entries(obj))
// console.log(nm) /* Map(2) {'a' => 1, 'b' => 2} */

// const name = new Map([
//     [1, "alireza"],
//     ["behzad" , 2],
//     [true, "ali"],
//     [false, "reza"]
// ])
// for (const [key, value] of name) console.log(`is key: ${key} is value: ${value}`)

// const name = new Map([
//     [1, "alireza"],
//     ["behzad" , 2],
//     [true, "ali"],
//     [false, "reza"]
// ])
// for (const [key, value] of name) typeof key === "boolean" && console.log(`is boolean value: ${value}`)

// Map method
// const name = new Map([
//     [1, "alireza"],
//     ["behzad" , 2],
//     [true, "ali"],
//     [false, "reza"]
// ])
// console.log(name.get(true)) /* ali */

// const name = new Map([
//     [1, "alireza"],
//     ["behzad" , 2],
//     [true, "ali"],
//     [false, "reza"]
// ])
// const myPrompt = Number(prompt("put your number..."))
// for (const [key, value] of name) (value === myPrompt || typeof value === "number") && console.log(`this is ${key}`)

// const name = new Map([
//     [1, "alireza"],
//     ["behzad" , 2],
//     [true, "ali"],
//     [false, "reza"]
// ])
// const myPrompt = Number(prompt("put your number..."))
// for (const [key, value] of name) value === myPrompt && console.log(name.get(value === myPrompt)) /* "ali" */

// روشی برای تبدیل کردن مپ به آرایه
// const name = new Map([
//     [1, "alireza"],
//     ["behzad" , 2],
//     [true, "ali"],
//     [false, "reza"]
// ])
// console.log(...name) /* [1, 'alireza'] ['behzad', 2] (2) [true, 'ali'] (2) [false, 'reza'] */
// console.log(name.entries()) /* MapIterator {1 => 'alireza', 'behzad' => 2, true => 'ali', false => 'reza'} */
// console.log(name.keys()) /* MapIterator {1, 'behzad', true, false} */
// console.log(name.values()) /* MapIterator {'alireza', 2, 'ali', 'reza'} */
// console.log([...name.keys()]) /* [1, 'behzad', true, false] */
// console.log([...name.values()]) /* ['alireza', 2, 'ali', 'reza'] */
128;
// const gameEvents = new Map([
//     [17, "Goal"],
//     [36, "Yellow card"],
//     [42, "Corner"],
//     [60, "Goal"],
//     [89, "Red card"],
// ])
// // حذف مقادیر تکراری و قرار دادن آن به صورت آرایه
// const arr = [...new Set(gameEvents.values())]
// console.log(arr) /* ['Red card', 'Yellow card'] */
// // حذف رویداد دقیقه 89
// gameEvents.delete(89)
// console.log(gameEvents) /* Map(4) {17 => 'Goal', 36 => 'Yellow card', 42 => 'Corner', 60 => 'Goal'} */
// // هر رویداد به طور میانگین در چند دقیقه اتفاق میافتد
// console.log(90 / gameEvents.size) /* 22.5 each of minute */
// // مثال بالا فقط با این تفاوت که زمان کل بازی را به صورت پویا به دست آوریم
// const lastTime = [...gameEvents.keys()].pop()
// console.log(lastTime) /* آخرین مقدار 60 است زیرا 89 پاک شده است */
// console.log(lastTime / gameEvents.size) /* 15 each of minute */
// // مشخص کردن نیمه
// for (const [min, event] of gameEvents)
//     min <= 45
//     ? console.log(`[first half] => This event ${event} in ${min} minute...`)
//     : console.log(`[second half] => This event ${event} in ${min} minute...`)
129;
// // string method
// const name = "alireza jodat"
// const numberStr = "12345"
// // به دست آوردن حروف به روش خانه های آرایه
// console.log(name[6]) /* a */
// // روش دوم
// console.log("ali"[1]) /* l */
// // استفاده از متد های رشته
// console.log(numberStr.length) /* 5 */
// console.log("12".length) /* 2 */
// // متد برای ایندکس
// const str = "rrrr"
// console.log(str.indexOf("r")) /* first index */
// console.log("bbb".indexOf("b")) /* first index */
// // آخرین ایندکس
// console.log(str.lastIndexOf("r")) /* last index */
// console.log("bbb".lastIndexOf("b")) /* last index */
// // پیدا کردن ایندکس کلمه
// console.log(name.indexOf("jodat")) /* first index */
// console.log("ali vs behzad".indexOf("jodat")) /* -1 for undefined */
// // متد اسلایس هم برای رشته است هم برای آرایه
// console.log(numberStr.slice(2)) /* 345 */
// console.log(numberStr.slice(2, 4)) /* 34 */
// // اسلایس کردن اولین کلمه
// console.log(name.slice(0, name.indexOf(" "))) /* alireza */
// // اسلایس کردن آخرین کلمه
// console.log(name.slice(name.lastIndexOf(" ") + 1))
// // استفاده از اعداد منفی برای اسلایس
// console.log(name.slice(2, -2)) /* ireza jod */
// console.log(name.slice(-3)) /* dat */
// // اطلاعات اضافی در مورد رشته ها
// console.log(new Set(name)) /* شبیه به آبجکت است که کلید آن ایندکس و مقدار آن حرف ها است */
// console.log(new String(name)) /* شبیه به آبجکت است که کلید آن ایندکس و مقدار آن حرف ها است */
// console.log(typeof new String(name)) /* تایپ آن آبجکت است */
// console.log(typeof new String(name).slice(2)) /* وقتی آن را اسلایس میکنیم تایپ آن به رشته تغییر میکند */
130;
// const str = "abcd Efgh"
// console.log(str.toLowerCase()) /* abcd efgh */
// console.log("jonas".toUpperCase()) /* JONAS */

// // برای رفع مشکل کپیتال نوشتن
// const str1 = "JoNaS"
// const lower = str1.toLowerCase()
// console.log(lower[0].toUpperCase() + lower.slice(1)) /* Jonas */

// // برای مقایسه دو ایمیل یکسان
// const email = "alireza@gmail.com"
// const email2 = "    aliReza@Gmail.Com \n"
// console.log(email2.toLowerCase().trim()) /* alireza@gmail.com */

// // جایگزین کردن حروف در رشته ها
// const priceGB = "12,33$"
// console.log(priceGB.replace("$", "R")) /* 12,33R */
// console.log(priceGB.replace(",", ".").replace("$", "UE")) /* 12.33UE */

// // جایگزین کردن کلمه در رشته ها
// const str2 = "door is open is door"
// console.log(str2.replace("door", "dor")) /* فقط اولین کلمه مشابه تغییر میکند */
// console.log(str2.replaceAll("is", "iss").replaceAll("door", "book")) /* همه کلمه های مشابه تغییر میکند */
// console.log(str2.replaceAll("is", "iss").replaceAll("oor", "ook")) /* dook iss open iss dook */

// // روش دوم برای جایگزین کردن همه کلمه های مشابه
// const str3 = "door is open is door"
// console.log(str3.replace(/is/g, "the")) /* door the open the door */

// // متد های بولین
// const name1 = "alireza jodat"
// console.log(name1.includes("ali")) /* true */
// console.log(name1.includes("alireza")) /* true */
// console.log(name1.startsWith("alir")) /* true */
// console.log(name1.startsWith("jo")) /* false */

// name1.startsWith("alireza") && name1.endsWith("jodat")
// ? console.log("is OK!") /* is OK! */
// : console.log("is'nt OK!")

// name1.startsWith("alireza") && name1.endsWith("j")
// ? console.log("is OK!")
// : console.log("is'nt OK!") /* is'nt OK! */
131;
// // split method for string
// console.log("me+you+them".split("+")) /* ['me', 'you', 'them'] */
// console.log("me you them".split(" ")) /* ['me', 'you', 'them'] */

// // تخریب کردن رشته در آرایه
// const [fName, lName] = "alireza jodat".split(" ")
// console.log(fName, lName) /* alireza jodat */

// // join method for string
// // سر هم کردن آرایه به صورت یک جمله
// console.log(["ali", "reza", "jodat", 1380].join(" ")) /* ali reza jodat 1380 */

// // بزرگ کردن اول هر اسم
// function upperFunc(names) {
//     let newArr = []

//     for (const item of names.split(" ")) {
//         // روش اول
//         // newArr.push(item[0].toUpperCase() + item.slice(1))

//         // روش دوم
//         newArr.push(item.replace(item[0], item[0].toUpperCase()))
//     }

//     console.log(newArr.join(" ")) /* Ali Reza Jodat */
// }

// upperFunc("ali reza jodat")

// // padding method in string
// console.log("ali".padStart(5, "_").padEnd(10, "_")) /* __ali_____ */

// // تمرین برای پنهان کردن شماره تماس
// function hideNum(number) {
//     const strNumber = String(number)
//     const firstPart = strNumber.slice(0, 4)
//     const secondPart = strNumber.slice(-4)
//     const starLength = strNumber.length - (firstPart.length + secondPart.length)
//     const padEnd1 = firstPart.length + 1
//     const padEnd2 = firstPart.length + 1 + starLength
//     const padEnd3 = firstPart.length + 1 + starLength + 1

//     console.log(
//         firstPart
//             .padEnd(padEnd1," ")
//             .padEnd(padEnd2, "*")
//             .padEnd(padEnd3, " ") + secondPart
//     )
// }

// hideNum("09359227339") /* 0935 *** 7339 */
// hideNum("09359200000") /* 0935 *** 0000 */

// // repeat method for string
// console.log("ali ".repeat(5)) /* ali ali ali ali ali */

// const repeatFunc = n => console.log(`${n} = ${"👊".repeat(n)}`)
// repeatFunc(5) /* 5 = 👊👊👊👊👊 */
132;
//     // تمرین برای تبدیل به کمل کیس
//     const str = `  aLi_r
//   rEza_La
//  rEza_ba
// rEza_Labb`

//     function handleStr(text) {
//         const textArray = text.split("\n")

//         for (const [index, item] of textArray.entries()) {
//             const [first, last] = item.toLowerCase().trim().split("_")
//             const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`.padEnd(15, " ")

//             console.log(`${output}${"✔".repeat(index + 1)}`)
//         }
//     }

//     handleStr(str)
133;
// // تمرین تمام متد های رشته در یکجا
// const info = `_Ali_reza;fao79876768;txl1234455667;12:15+_Jonas_rezaei;hel79876768;fao1234455667;22:25`

// for (const item of info.split("+")) {
//     const [first, from, to, hour] = item.split(";")
//     console.log(
//         `${first.startsWith("_Ali") ? "✔" : "❤"}${first.replaceAll(
//             "_",
//             " "
//         )} from ${from.slice(0, 3)} to ${to.slice(0, 3)} (${hour.replace(
//             ":",
//             "h"
//         )})`.padStart(45)
//     )
// }
136;
// const arr = []

// // نحوه مشخص کردن مقدار پیش فرض برای آرگومان
// function testFunc(a = 1, b = 100, c = 6 * b) {
//     // روش قدیمی برای ست کردن مقادیر پیش‌فرض در شیء ها
//     a = a || 1
//     b = b || 100
//     c = c || 6 * b

//     const obj = {
//         a,
//         b,
//         c
//     }

//     arr.push(obj)

//     console.log(obj)
//     console.log(arr) /* [{…}] = arr[0] => obj */
// }

// testFunc(21, undefined, 33) /* {a: 21, b: 100, c: 33} */
// testFunc(21, undefined, undefined) /* {a: 21, b: 100, c: 600} */
137;
// // مسئله کپی شدن شیء ها
// const name1 = "ali"
// const obj = {
//     name: "reza jodat",
//     number: 9876
// }

// function testFunc(a = "", b = {}) {
//     a = "mehran" /* کپی میشود و مقدار اصلی خود را در متغیر حفظ مینماید */
//     b.number = 23

//     console.log(a) /* mehran */
//     console.log(b) /* 23 */
// }

// testFunc("r", obj)
// console.log(name1) /* ali */
// console.log(obj) /* 23 */ /* شیء ها چون به آدرس حافظه مشترکی اشاره میکنند در همه جا دچار تغییر میشوند */
139;
// const func1 = (str) => str.split(" ");

// function func2(str, fn) {
//     const [first, ...others] = fn(str);
//     return [first.replace(first[0], first[0].toUpperCase()), ...others];
// }

// const joinFunc = (str, func1, func2) =>
//     console.log(func2(str, func1).join().replaceAll(",", " "));

// joinFunc("ali reza jodat 1380", func1, func2); /* Ali reza jodat 1380 */

// // مثالی برای کال بک فانکشن
// const testFunc = () => console.log("h");
// const repeatFunc = (a) => console.log("Hello!!!", a.name ?? "testAlaki");

// document.querySelector("html").addEventListener("click", repeatFunc(testFunc));

// ["q", "j"].forEach(repeatFunc);
140;
// function hello(name) {
//     return function (family) {
//         console.log(`Hi ${name} ${family}`);
//     };
// }

// const newHello = hello("Ali");

// newHello("Jodat");

// // روش تک خطی
// const hello1 = (name) => (family) => console.log(`Hi ${name} ${family}`);

// hello1("mohsen")("jodat");
141;
// const obj = {
//     name: "ali",
//     family: "jodat",
//     arr: [],

//     // روش قدیمی
//     func1: function () {
//         // code
//     },

//     // روش جدید
//     func(a = "", b = "") {
//         const output = `${a} ${b} ${this?.name} ${this?.family}`;
//         this?.arr?.push(output.split(" "));
//     },
// };

// obj.func("hi", "hello");
// console.log(obj?.arr); /* ['hi', 'hello', 'ali', 'jodat'] */

// const func = obj?.func;

// // does not work!!!!
// console.log(
//     func("ali") /* undefined */
// ); /* به دیل گذاشتن علامت سوال برای ما تعریف نشده برمیگرداند در غیر اینصورت ارور میدهد */ /* کلمه این تعریف نشده است */

// // راه حل برای استفاده از متد های آبجکت در خارج از آن

// // نام آبجکتی که قرار است متد در آن تغییر ایجاد کند را حتما باید بنویسیم
// func.call(obj, "newAli", "newReza");
// console.log(obj.arr); /* [Array(4), Array(4)] */

// // مثال واضح تر
// const newObj = {
//     name: "name_newObj",
//     family: "family_newObj",
//     arr: [],
// };

// // نام آبجکت مورد نظر درست وارد شود
// func.call(newObj, "a", "b", "c");
// console.log(newObj.arr); /* ['a', 'b', 'name_newObj', 'family_newObj'] */

// // روشی کوتاه تر
// const arr1 = ["a", "c"];
// func.call(newObj, ...arr1);
// console.log(newObj.arr);

// // apply method
// // این متد فقط آرایه ای از آرگومان ها را میگیرد
// func.apply(newObj, arr1);
// console.log(newObj.arr);
142;
// const obj = {
//     name: "ali",
//     family: "jodat",
//     func(input) {
//         console.log(`${this.name} and ${this.family} and input: "${input}"`);
//     },
// };

// obj.func(4); /* ali and jodat and input: "4" */

// const newObj = {
//     name: "mehran",
//     family: "gol",
// };

// const funcG = obj.func;

// funcG.call(newObj, 5); /* mehran and gol and input: "5" */

// روش خاص برای کال
// (() => {
//     const obj = {
//         ali: {
//             name: "ali1",
//             func() {
//                 console.log(this.name);
//             },
//         },
//         reza: { name: "reza1" },
//         bezi: { name: "bezi1" },
//     };
//     const newFunc = obj.ali.func;
//     Object.keys(obj).forEach((item) => {
//         newFunc.call(obj[item]);
//     });
// })();

// // Bind method
// // روش اول
// const bindFunc = funcG.bind(newObj);
// bindFunc(77); /* mehran and gol and input: "77" */

// // روش دوم
// const bindFunc1 = funcG.bind(newObj, "default value!!!");
// bindFunc1(); /* mehran and gol and input: "default value!!!" */

// // بررسی کلمه کلیدی "این" در رویداد های جاواسکریپتی
// // 1
// function f1() {
//     console.log(this);
// }
// f1(); /* window object */

// // 2
// const obj1 = {
//     name: "ali",
//     f2() {
//         console.log(this);
//     },
// };
// obj1.f2(); /* {name: 'ali', f2: ƒ} */

// // در توابع رویداد کلمه کلیدی "این" مقدار عنصر دکمه را برمیگرداند
// // 3
// const obj2 = {
//     name: "ali",
//     f3() {
//         console.log(this);
//     },
// };
// document
//     .querySelector(".btn")
//     .addEventListener("click", obj2.f3); /* <button class="btn">142</button> */

// // 4
// function f4() {
//     console.log(this);
// }
// document
//     .querySelector(".btn")
//     .addEventListener("click", f4); /* <button class="btn">142</button> */

// // 5
// // برای اینکه بخواهیم مقدار شیء را برایمان برگرداند مراحل زیر را می‌نویسیم
// const obj3 = {
//     name: "ali",
//     f5(input) {
//         console.log(this, input);
//     },
// };
// document
//     .querySelector(".btn142")
//     .addEventListener(
//         "click",
//         obj3.f5.bind(obj3, 2)
//     ); /* {name: 'ali', f5: ƒ} 2 */

// // prtial application
// // در این روش نسخه ثابت از یک تابع ذخیره میشود و سپس تابع را با مقادیر مختلف صدا می‌زنیم
// const calcAge = (now, age) => console.log(now - age);
// const calcAgeBind = calcAge.bind(null, 2024);
// calcAgeBind(2001); /* 23 */
// calcAgeBind(2005); /* 19 */

// // استفاده از "پارشیال" برای توابع تو در تو
// // روش اول
// function add(num1) {
//     return function (num2) {
//         return num1 + num2;
//     };
// }
// const addConstant = add(12);
// console.log(addConstant(12)); /* 24 */

// // روش خلاصه تر
// // روش دوم
// const add2 = (num1) => (num2) => num1 + num2;
// const addC = add2(30);
// console.log(addC(12)); /* 42 */
143;
// const obj = {
//     q: "wich one?",
//     o: ["0: Java", "1: Python", "2: C++"],
//     a: new Array(3).fill(0),
//     f() {
//         // get
//         const r = Number(prompt(`${this.q}\n${this.o.join("\n")}`));
//         // check
//         typeof r === "number" && (r ?? false) && r < this.o.length && r >= 0
//             ? this.a[r]++
//             : console.log("Error!!!");
//         // condition
//         const condition =
//             typeof r === "number" &&
//             (r ?? false) &&
//             r < this.o.length &&
//             r >= 0;
//         condition && console.log(this.a);
//     },
// };
// // we can use call or bind method
// document.querySelector(".btn143").addEventListener("click", obj.f.call(obj));
144;
// توابعی که فقط یکبار خوانده میشوند
// معمولا از این توابع برای جلوگیری از گلوبال شدن متغیر ها استفاده میشود
// (function () {
//     console.log("ali");
// })();

// // روشی برای توابع یک خطی
// (() => console.log("arrow"))();
145;
// // Closures function
// // روش اول
// function countFunc() {
//     let counter = 0;
//     return function () {
//         counter++;
//         console.log(counter);
//     };
// }
// const countFuncNew =
//     countFunc(); /* با این عمل تمام بخش های بغیر از بخش "بازگردانی" اجراء می‌شود */
// countFuncNew(); /* 1 */
// countFuncNew(); /* 2 */
// countFuncNew(); /* 3 */
// console.dir(
//     countFuncNew
// ); /* با رفتن به اسکپ و سپس کلاژرز میتوانیم به آخرین مقدار شمارنده خود دسترسی داشته باشیم */

// // روش دوم برای توابع تک خطی
// function arrowF() {
//     let count = 0;
//     return () => console.log(++count);
// }
// const newA = arrowF();
// newA(); /* 1 */
// newA(); /* 2 */
// newA(); /* 3 */
146;
// // some of example for closure function
// // 1
// let func1;
// function func2() {
//     console.log("first");
//     func1 = () => console.log("second");
// }
// func2(); /* first */
// func1(); /* second */

// // 2
// function timer(a, wait) {
//     console.log("first");
//     setTimeout(() => {
//         console.log(a);
//     }, wait * 1000);
//     console.log("second");
// }
// timer("ali", 3); /* in order => 1. first 2. second 3. "ali"*/
150;
// // Array method
// // slice method in Array
// // این حالت آرایه اصلی را تغییر نمی‌دهد
// const arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(-2)); /* ['d', 'e'] */
// console.log(arr.slice(0, -2)); /* ['a', 'b', 'c'] */

// // splice method in Array
// // این حالت کاملا مشابه اسلایس است اما آرایه اصلی را تغییر می‌دهد
// // یکی از کاربرد‌های آن حذف کردن عناصر مورد نظر از آرایه اصلی می‌تواند باشد
// const arr1 = ["a", "b", "c", "d", "e"];
// console.log(arr1.splice(0, 3)); /* ['a', 'b', 'c'] */
// console.log(arr1); /* ['d', 'e'] */
// console.log(arr1.splice(-2)); /* ['d', 'e'] */
// console.log(arr1); /* [] => آرایه خالی شده */
// console.log(arr1.splice(0, -2)); /* [] => چون دیگه آرایه خالی است */

// // reverse method in Array
// // این روش آرایه اصلی را تغییر می‌دهد
// const arr2 = ["a", "b", "c", "d", "e"];
// console.log(arr2.reverse()); /* ['e', 'd', 'c', 'b', 'a'] */
// console.log(arr2); /* ['e', 'd', 'c', 'b', 'a'] */

// // concat method in Array
// // روش اول برای کانکت
// const arr3 = ["a", "b", "c", "d", "e"];
// const arr4 = ["f", "g", "h", "i", "j"];
// console.log(
//     arr3.concat(arr4)
// ); /* ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] */
// // "..." روش خیلی باحال برای کاکنت کردن از طریق اسپرید
// console.log([...arr3, ...arr4]); /* ['e', 'd', 'c', 'b', 'a'] */

// // join method in Array
// const arr5 = ["a", "b", "c", "d", "e"];
// const arr6 = ["f", "g", "h", "i", "j"];
// console.log(
//     arr5.concat(arr6).join(" - ")
// ); /* a - b - c - d - e - f - g - h - i - j */

// // (push, shift, unshift, pop, indexOf, includes) متد‌هایی که از قبل یاد گرفتیم
151;
// // At method in Array
// // همانند روش سنتی براکت عمل می‌کند اما در آن دستیابی به آخرین خانه از آرایه راحت تر است
// const arr = ["f", "g", "h", "i", "j"];
// console.log(arr.at(0)); /* f */
// // مقایسه دستیابی به آخرین خانه از آرایه در سه روش متفاوت
// console.log(arr[arr.length - 1]); /* j */
// console.log(arr.slice(-1)[0]); /* j */
// console.log(
//     arr.at(-1)
// ); /* j => بهترین روش برای دستیابی به آخرین خانه از آرایه */
152;
// // forEach loop in javaScript
// // می‌رویم forEach آشنا می‌شویم و سپس به سراغ حلقه Math.abs می‌زنیم و همچنین با متد  forOf ابتدا یک مثال از حلقه
// const numbers = [100, -20, 15, -336];
// for (const [index, item] of numbers.entries())
//     item > 0
//         ? console.log(`tarakonesh ${index}: ${item} variz shodeh...`)
//         : console.log(
//               `tarakonesh ${index}: ${Math.abs(item)} bardasht shodeh...`
//           ); /* همانند قدرمطلق عمل می‌کند Math.abs(item) متد */

// // forEach مثال بال با استفاده از
// console.log("---- forEach loop ----");
// const numbers2 = [100, -20, 15, -336];
// numbers2.forEach((number, index, array) => {
//     console.log(
//         array
//     ); /* [100, -20, 15, -336] => با استفاده از پارامتر سوم میتوانیم به خود آرایه دسترسی پیدا کنیم */
//     number > 0
//         ? console.log(`tarakonesh ${index}: ${number} variz shodeh...`)
//         : console.log(
//               `tarakonesh ${index}: ${Math.abs(number)} bardasht shodeh...`
//           );
// });

// // forEach , forOf تفاوت‌های اساسی میان
// // استفاده کنیم اما در دیگری می‌شود break , continue نمی‌توانیم از forEach در
// // نمی‌توان چیزی را "بازگردانی" کرد در دیگری را نمی‌دانم forEach در
// // میتوان از کال‌بک استفاده کرد اما در دیگری نمیشود forEach در
153;
// // map در forEach نحوه استفاده از
// const map = new Map([
//     [true, document.querySelector(".btn142")],
//     ["ali", 1],
// ]);
// map.forEach(
//     (value, key, map) =>
//         console.log(
//             `value: ${value}, key: ${key}, map: ${map}`
//         ) /* value: [object HTMLButtonElement], key: true, map: [object Map] => خیلی دقیق نشون نمیده */
// );

// // نمونه مثال از خودم
// const map1 = new Map([
//     [true, document.querySelector(".btn142")],
//     ["ali", 1],
// ]);
// [...map1.entries()].forEach(
//     ([index, item], indexL, array) =>
//         console.log(index, item, indexL, [
//             ...array,
//         ]) /* step1 => true <button class=​"btn142">​142​</button>​ 0  [Array(2), Array(2)] دقیق تر نشون میده */
// );

// // set در forEach نحوه استفاده از
// // منحصر به فرد است set :یادآوری
// // از _ برای پارامتر های بدرد نخور استفاده میکنیم
// const set = new Set(["ali", "bezi", "ali", "reza", "bezi"]);
// set.forEach((value, _, set) =>
//     console.log(`${value}: ${value}`)
// ); /* step1: ali: ali */
155;
// // Bankist پروژه
// (() => {
//     const obj = {
//         movments: [12, -10, 300, -20],
//     };
//     document.body.innerHTML = ""; /* برای خالی کردن یک کانتینر گزینه خوبی است */

//     return () => {
//         obj.movments.forEach((item, index) => {
//             const { type, color } =
//                 item > 0
//                     ? { type: "Variz", color: "green" }
//                     : { type: "Bardasht", color: "red" };
//             const cardMov = `
//             <div style="background: ${color};" class="${type}">${index}.${type}: ${item}</div>
//         `;
//             document.body.insertAdjacentHTML("beforeend", cardMov);
//         });
//     };
// })()();
156;
// // تمرین برای آرایه میخواهیم سن های زیر ده سال را جدا کرده و با هم در یک آرایه ای دیگر وصل کنیم
// (() => {
//     const obj = {
//         digikala: {
//             age: [12, 2, 45],
//             ageChecked: [],
//             check() {
//                 this.age.forEach(
//                     (item) => item < 10 && this.ageChecked.push(item)
//                 );
//             },
//         },
//         torob: { age: [1, 30, 4], ageChecked: [] },
//     };

//     const ageFunc = obj.digikala.check;
//     const newAgeCheck = [];

//     Object.keys(obj).forEach((item) => {
//         ageFunc.call(obj[item]);
//         newAgeCheck.push(...obj[item].ageChecked);
//     });

//     console.log(newAgeCheck); /* [2, 1, 4] */
// })();
157;
// // map notation in array
// // برای چرخیدن روی عناصر آرایه map روش
// // این امکان پذیر نیست forEach این روش در پایان یک آرایه جدید ایجاد می‌کند که در
// // روش معمولی
// (() => {
//     const arr = [20, 30, 12, 34];
//     const newArr = arr.map((price, index, arr) => {
//         console.log(arr); /* آرایه اصلی را به ما می‌دهد */
//         const rial = 50000;
//         return (
//             price * rial
//         ); /* شده از کال‌بک در آرایه جدیدمان ذخیره خواهد شد return تنها بخش */
//     });
//     console.log(newArr); /* [1000000, 1500000, 600000, 1700000] */
// })();

// // روش تک خطی
// (() => {
//     const arr = [20, -30, 12, -34];
//     const newArr = arr.map(
//         (price) =>
//             `movment is ${price < 0 ? "bardash" : "variz"} = ${
//                 price > 0 ? price : Math.abs(price)
//             }`
//     ); /* شده از کال‌بک در آرایه جدیدمان ذخیره خواهد شد return تنها بخش */
//     console.log(
//         newArr
//     ); /* ['movment is variz = 20', 'movment is bardash = 30', 'movment is variz = 12', 'movment is bardash = 34'] */
// })();
159;
// // make up username field in Bankist project
// (() => {
//     const obj = {
//         account1: {
//             owner: "Alireza Jodat",
//             makeUserName() {
//                 this.username = this.owner
//                     .toLowerCase()
//                     .split(" ")
//                     .map(word => word[0])
//                     .join("");
//             },
//         },
//         account2: {
//             owner: "Behzad Jannesar",
//         },
//         account3: {
//             owner: "Mehran Gol",
//         },
//         account4: {
//             owner: "Mohsen Jodat",
//         },
//     };

//     const generalFunc = obj.account1.makeUserName;
//     Object.keys(obj).forEach(account => {
//         generalFunc.call(obj[account]);
//     });

//     console.log(obj); // step3 => account3: {owner: 'Mehran Gol', username: 'mg'}
// })();
160;
// // filter notation for array
// // این روش همانند مپ برای ما آرایه جدید می‌سازد
// (() => {
//     const arr = [21, -43, 87, -99];
//     const newArr = arr.filter((mov, i, arr) => mov < 0);
//     console.log(newArr);
// })();

// // یکی از بهترین روش ها برای سرچ کردن در آرایه ها
// // بر نمی‌گرداند undefined زیرا برخلاف مپ حالت های نادرست را
// (() => {
//     const arr = ["ali reza", "kohfh lkhhf", "lkhgf vbgv", "ygjfb klng"];
//     const newArr = arr.filter(
//         (mov, i, arr) =>
//             mov.includes("vbgv") || mov.toLowerCase().includes("vbgv")
//     );
//     console.log(newArr);
// })();
161;
// // reduce notation in array
// // این روش هم برای ما یک مقدار واحد را برمی‌گرداند
// // در این روش یک انباشتگر وجود دارد که مقدار در آن ذخیره خواهد شد
// // در این روش می‌توان مقدار پیش فرض انباشتگر را تعین کرد
// // مثالی برای جمع کل
// (() => {
//     const arr = [12, 23, 45];
//     const result = arr.reduce((acc, curr, i, arr) => acc + curr, 10);
//     console.log(result); // در اینجا مقدار پیش فرض برابر با ده است <= 90
// })();

// // max مثالی برای به دست آوردن
// (() => {
//     const arr = [-1, -12, -23, -45, -85];
//     const result = arr.reduce(
//         (acc, curr, i, arr) => (acc < curr ? curr : acc),
//         arr[0]
//     );
//     console.log(result); // -1 => به دلیل اینکه اشتباه مقایسه نشه باید از اولین خانه آرایه کمک بگیریم به جای صفر
// })();

// // string مثالی برای جمع
// (() => {
//     const arr = ["ali", "reza", "jodat", "1380"];
//     const result = arr.reduce((acc, cur) => acc + " " + cur, "");
//     console.log(result.trim()); // "ali reza jodat 1380"
// })();
162;
// // reduce, map, filter مثال کلی برای جمع بندی
// (() => {
//     const dogAges = [1, 6, 2, 4, 5];
//     const humanAges = dogAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4)); // [2, 40, 4, 32, 36]
//     const filtered = humanAges.filter(humanAge => humanAge >= 18); // [40, 32, 36]
//     const average =
//         filtered.reduce((acc, cur, i, arr) => acc + cur, 0) / filtered.length;
//     console.log(average); // 36
// })();
163;
// // reduce, map, filter مثالی زنجیر وار از سه روش
// (() => {
//     const arr = [20, 45, -65, 300, -120, 80];
//     const rial = arr.map(price => price * 50); // [1000, 2250, -3250, 15000, -6000, 4000]

//     const variz = rial
//         .filter(price => price > 0)
//         .reduce((acc, price) => acc + price, 0);

//     const bardasht = rial
//         .filter(price => price < 0)
//         .reduce((acc, price) => acc + price, 0);

//     console.log(variz); // 22250
//     console.log(Math.abs(bardasht)); // [-9250] => 9250
//     console.log(variz + bardasht); // 13000
// })();
165;
// // find method in array
// // این متد فقط اولین مقداری که شرط ما را برآورده کند را برمی‌گرداند
// // این متد کال‌بک را می‌پذیرد
// // این متد شرط را هم می‌پزیرد
// (() => {
//     const arr = [20, 45, -65, 300, -120, 80];
//     const first = arr.find(item => item < 0);
//     console.log(first); // -65
// })();

// // یکی از کاربرد‌های خوب در این روش سرچ کردن آبجکت منحصر به فرد است
// (() => {
//     const arr = [
//         {
//             owner: "Alireza Jodat",
//             open: 22,
//         },
//         {
//             owner: "Behzad Jannesar",
//             open: 12,
//         },
//         {
//             owner: "Mehran Gol",
//             open: 13,
//         },
//         {
//             owner: "Mohsen Jodat",
//             open: 11,
//         },
//     ];

//     console.log(arr.find(account => account.owner === "Mehran Gol")); //{owner: 'Mehran Gol', open: 13}
// })();
166;
// // find account and show "login" in console
// (() => {
//     const arr = [
//         {
//             owner: "Alireza Jodat",
//             username: "aj",
//             pin: 1111,
//             open: 22,
//         },
//         {
//             owner: "Behzad Jannesar",
//             username: "bj",
//             pin: 2222,
//             open: 12,
//         },
//         {
//             owner: "Mehran Gol",
//             username: "mg",
//             pin: 3333,
//             open: 13,
//         },
//         {
//             owner: "Mohsen Jodat",
//             username: "mj",
//             pin: 4444,
//             open: 11,
//         },
//     ];
//     const btn = document.querySelector(".btn166");

//     btn.addEventListener("click", e => {
//         // initialize
//         const userInput = document.querySelector(".userInput");
//         const pinInput = document.querySelector(".pinInput");

//         // btn submit Prevent Default
//         e.preventDefault();

//         // find account
//         const findedAccount = arr.find(
//             account => account.username === userInput.value
//         );

//         // check pin
//         findedAccount?.pin === Number(pinInput.value)
//             ? console.log(`Welcome back, ${findedAccount.owner.split(" ")[0]}`)
//             : console.log("in correct username or pin");

//         // second way
//         arr.find(account => account.username === userInput.value)?.pin ===
//         Number(pinInput.value)
//             ? console.log(`Welcome back, ${findedAccount.owner.split(" ")[0]}`)
//             : console.log("in correct username or pin");

//         // blur and clear inputs
//         userInput.value = pinInput.value = "";
//         userInput.blur();
//         pinInput.blur();
//     });
// })();
167;
// // transfer money
// (() => {
//     // initialize
//     const arr = [
//         {
//             owner: "Alireza Jodat",
//             username: "aj",
//             movments: [34, -45],
//         },
//         {
//             owner: "Behzad Jannesar",
//             username: "bj",
//             movments: [-1, 7],
//         },
//         {
//             owner: "Mehran Gol",
//             username: "mg",
//             movments: [9, -76],
//         },
//         {
//             owner: "Mohsen Jodat",
//             username: "mj",
//             movments: [-67, -7],
//         },
//     ];
//     const btn = document.querySelector(".btn167");

//     // transfer money event
//     btn.addEventListener("click", e => {
//         // initializa
//         const toInput = document.querySelector(".toInput");
//         const amountInput = document.querySelector(".amountInput");

//         // btn submit prevent default
//         e.preventDefault();

//         // find account
//         const findedAccount = arr.find(
//             account => account.username === toInput.value
//         );

//         // transfer amount
//         findedAccount?.movments.push(Number(amountInput.value));

//         // show in console
//         console.log(findedAccount); // movments: (3) [-67, -7, new Amount]

//         // blur and clear inputs
//         toInput.value = amountInput.value = "";
//         toInput.blur();
//         amountInput.blur();
//     });
// })();
168;
// (() => {
//     // initialize
//     const arr = [
//         {
//             owner: "Alireza Jodat",
//             username: "aj",
//             movments: [34, -45],
//         },
//         {
//             owner: "Behzad Jannesar",
//             username: "bj",
//             movments: [-1, 7],
//         },
//         {
//             owner: "Mehran Gol",
//             username: "mg",
//             movments: [9, -76],
//         },
//         {
//             owner: "Mohsen Jodat",
//             username: "mj",
//             movments: [-67, -7],
//         },
//     ];

//     // find index account
//     const indexAccount = arr.findIndex(account => account.username === "mj");

//     // remove account
//     console.log(arr.splice(indexAccount, 1)); // {owner: 'Mohsen Jodat', username: 'mj', movments: Array(2)} به اندازه یک عنصر حذف می‌کنیم

//     // show original array
//     console.log(arr); // آیتم دارای ایندکس سوم حذف شده است
// })();
169;
// // some method
// // این متد اگر شرط درست باشد درست برمی‌گرداند و به تعداد درست بودن توجهی ندارد
// // فرق دارد includes این روش کمی با متد
// // فقط از روش برابری استفاده می‌کند includes متد
// // شرط ها را نیز می‌پذیرد some اما متد
// (() => {
//     // initialize
//     const arr = [2, 32, 4354, 5453, 34];

//     // some method
//     console.log(arr.some(item => item > 4000)); // true => 5453

//     // includes method
//     console.log(arr.includes(4354)); // true
// })();

// // Every method
// // این روش تنها در صورتی درست است که تمامی عناصر آرایه شرط را برآورده سازند
// // این روش هم همانند سایر روش ها کال‌بک دریافت می‌کند
// // مثال یک
// (() => {
//     // initialize
//     const arr = [2, 32, 4354, 5453, 34];

//     // Every method
//     console.log(arr.every(item => item > 0)); // true
// })();

// // مثال دو
// (() => {
//     // initialize
//     const arr = [2, 32, 4354, 5453, 34];

//     // Every method
//     console.log(arr.every(item => item > 32)); // false
// })();

// // کال‌بک جداگانه روش‌هایی که شرط را می‌پذیرند
// (() => {
//     // initialize
//     const arr = [2, 32, 4354, 5453, 34];
//     const movments = mov => mov > 32;

//     // call
//     console.log(arr.some(movments));
//     console.log(arr.every(movments));
//     console.log(arr.filter(movments));
// })();
170;
// // flat and flat map method
// // هیچ کال‌بکی را نمی‌پذیرد flat متد
// // این متد برای زمانی‌ست که آرایه های تو در تو داریم و میخواهیم آنها را یکدست کنیم
// // مثال یک
// (() => {
//     // initialize
//     const arr = [[12], 22, [7, 0]];

//     // flat method
//     console.log(arr.flat()); // [12, 22, 7, 0]
// })();

// // مثال دو
// // همچنین می‌توان برای این متد عمق هم در نظر گرفت
// (() => {
//     // initialize
//     const arr = [[12, [23, 78]], 22, [7, 0]];

//     // flat method
//     console.log(arr.flat(1)); // [12, Array(2), 22, 7, 0]
//     console.log(arr.flat(2)); // [12, 23, 78, 22, 7, 0]
// })();

// // مثال کاربردی برای این متد جمع تمامی گردش حساب ها
// (() => {
//     // initialize
//     const arr = [
//         {
//             movments: [34, -45],
//         },
//         {
//             movments: [-1, 7],
//         },
//         {
//             movments: [9, -76],
//         },
//         {
//             movments: [-67, -7],
//         },
//     ];

//     // add movments
//     console.log(
//         arr
//             .map(acc => acc.movments)
//             .flat()
//             .reduce((acc, curr) => acc + curr, 0)
//     ); // -146
// })();

// // flat map method
// // این روش ترکیبی از روش مپ و فلت است
// // اما تنها در صورتی کار می‌کند که قرار باشد یک لایه از عمق یک آرایه را صاف کند و سپس روی آن بچرخد
// (() => {
//     // initialize
//     const arr = [
//         {
//             movments: [34, -45],
//         },
//         {
//             movments: [-1, 7],
//         },
//         {
//             movments: [9, -76],
//         },
//         {
//             movments: [-67, -7],
//         },
//     ];

//     // add movments and show result in console
//     const flatArray = arr.flatMap(acc => acc.movments);
//     console.log(flatArray); // [34, -45, -1, 7, 9, -76, -67, -7]
//     console.log(flatArray.reduce((acc, curr) => acc + curr, 0)); // -146

//     // shortand way
//     console.log(
//         arr.flatMap(acc => acc.movments).reduce((acc, curr) => acc + curr, 0)
//     ); // -146
// })();
171;
// // sort method in array
// // این روش برای مرتب سازی عناصر آرایه به کار می‌رود
// // اما باید حواسمان باشد که این متد آرایه اصلی را تغییر می‌دهد
// // مثالی برای مرتب سازی رشته‌ها
// (() => {
//     // initialize
//     const arr = ["ali", "mohsen", "mehran", "bezi"];

//     // sort method
//     console.log(arr.sort()); // ['ali', 'bezi', 'mehran', 'mohsen'] => A,B,C,D,...
//     console.log(arr); // ['ali', 'bezi', 'mehran', 'mohsen'] => مقایسه با آرایه اصلی
// })();

// // مثالی برای مرتب سازی صعودی اعداد
// // در این روش اگر عنصر فعلی از بعدی بزرگتر باشد باید یک برگردد و یک به معنای انجام تغییر است
// (() => {
//     // initialize
//     const arr = [12, 2, -20, 87, 12, -1, 33];

//     // sort method
//     console.log(arr.sort((current, next) => (current > next ? 1 : -1))); // [-20, -1, 2, 12, 12, 33, 87]
//     console.log(arr); // [-20, -1, 2, 12, 12, 33, 87] => مقایسه با آرایه اصلی

//     // shortand way
//     // initialize
//     const arr2 = [12, 2, -20, 87, 12, -1, 33];

//     // sort method
//     console.log(arr2.sort((current, next) => current - next)); // [-20, -1, 2, 12, 12, 33, 87]
//     console.log(arr2); // [-20, -1, 2, 12, 12, 33, 87] => مقایسه با آرایه اصلی
// })();

// // مثالی برای مرتب سازی نزولی اعداد
// // در این روش اگر عنصر فعلی از عنصر بعدی کوچکتر باشد باید یک برگردد که یک به معنای ایجاد تغییر است
// (() => {
//     // initialize
//     const arr = [12, 2, -20, 87, 12, -1, 33];

//     // sort method
//     console.log(arr.sort((current, next) => (current < next ? 1 : -1))); // [87, 33, 12, 12, 2, -1, -20]
//     console.log(arr); // [87, 33, 12, 12, 2, -1, -20] => مقایسه با آرایه اصلی

//     // shortand way
//     // initialize
//     const arr2 = [12, 2, -20, 87, 12, -1, 33];

//     // sort method
//     console.log(arr2.sort((current, next) => next - current)); // [87, 33, 12, 12, 2, -1, -20]
//     console.log(arr2); // [87, 33, 12, 12, 2, -1, -20] => مقایسه با آرایه اصلی
// })();

// // مثالی برای بهم ریختن ترتیب عناصر آرایه
// (() => {
//     // initialize
//     const arr = [2, 12, 33, 87];

//     // sort method
//     console.log(arr.sort(() => Math.random() - Math.random())); // [87, 2, 12, 33]
//     console.log(arr); // [87, 2, 12, 33] => مقایسه با آرایه اصلی
// })();

// // مثالی برای مرتب سازی و برگرداندن به حالت اصلی
// // فقط باید حواسمان باشد که از آرایه اصلی کپی بگیریم
// (() => {
//     // initialize
//     const arr = [0, -1, 4, 6, 2, -2, 30];
//     const btn = document.querySelector(".btn171");
//     let sort = false;

//     // event sort btn
//     btn.addEventListener("click", () => {
//         // show result
//         console.log(
//             !sort
//                 ? `${arr
//                       .slice()
//                       .sort((current, next) => next - current)} : Original`
//                 : `${arr} : Sorted`
//         );

//         // replace new sort
//         sort = !sort;
//     });
// })();
172;
// // fill method
// // روشی برای ایجاد آرایه ها به صورت برنامه‌ای
// // با این متد میتوان خانه های خالی آرایه را پر کرد
// // این روش آرایه اصلی را نیز تغییر میدهد
// // این روش آرایه‌های از قبل پر شده را نیز میتواند تغییر دهد
// (() => {
//     // old way
//     console.log([1, 2]); // [1, 2]
//     console.log(new Array(1, 2)); // [1, 2]

//     // new way
//     const arr = new Array(4);
//     console.log(arr); // [empty × 4] => نشان دهنده چهار عنصر خالی است
//     arr.fill("ali", 3);
//     console.log(arr); // [empty × 3, 'ali']
//     arr.fill("reza", 0, 1);
//     console.log(arr); // ['reza', empty × 2, 'ali']
//     arr.fill("bezi", 0);
//     console.log(arr); // ['bezi', 'bezi', 'bezi', 'bezi']

//     // array pre-loaded
//     const arr2 = [1, 2, 3, 4, 5, 6];
//     console.log(arr2.fill("ali", 0, 1)); // ['ali', 2, 3, 4, 5, 6]
// })();

// // from method in array
// // در این روش هم میتوان آرایه ایجاد و سپس آن پر کرد
// // در این روش میتوان تعداد خانه‌های آرایه و همچنین مقداری که قرار است در آن قرار گیرد را مشخص کرد
// (() => {
//     console.log(Array.from({ length: 4 }, (_, index) => 1)); // [1, 1, 1, 1]
//     console.log(Array.from({ length: 4 }, (_, index) => ++index)); // [1, 2, 3, 4]
// })();

// // مثال برای قرار دادن مقدار صد تاس تصادفی در یک آرایه
// (() => {
//     console.log(
//         Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1))
//     ); // [3, 5, 6, 5, 4,....]
// })();

// // from به یک آرایه معمولی با استفاده از متد node list مثالی برای تبدیل
// // زد map نمی‌توان node list زیرا در حالت اصلی روی
// // دارد می‌توان مستقیما روی عناصر تغییرات را اعمال کرد from و از طریق کال‌بکی که متد
// (() => {
//     console.log(
//         Array.from(
//             document.querySelectorAll(".span__172"),
//             (el, index) => (el.textContent = `span ${index}`)
//         )
//     );
// })();

// // به آرایه معمولی node list استفاده از اسپیرید برای تبدیل
// (() => {
//     const nodeArray = [...document.querySelectorAll(".span__172")];
//     console.log(nodeArray); // [span.span__172, span.span__172]

//     // shortand way
//     console.log([...document.querySelectorAll(".span__172")]); // [span.span__172, span.span__172]
// })();
174;
// // جمع بندی برای تمامی متد‌های آرایه
// (() => {
//     const array = [
//         {
//             owner: "Alireza Jodat",
//             username: "aj",
//             movments: [34, -45],
//         },
//         {
//             owner: "Behzad Jannesar",
//             username: "bj",
//             movments: [-1, 7],
//         },
//         {
//             owner: "Mehran Gol",
//             username: "mg",
//             movments: [9, -76],
//         },
//         {
//             owner: "Mohsen Jodat",
//             username: "mj",
//             movments: [-67, -7],
//         },
//     ];

//     // جمع تمامی واریزی‌های بانک
//     (() =>
//         console.log(
//             array
//                 .flatMap(account => account.movments)
//                 .filter(movment => movment > 0)
//                 .reduce((acc, curr) => acc + curr, 0)
//         ))(); // 50

//     // چند نفر می‌توانند پنج دلار وام بگیرند
//     (() => {
//         // با روش فیلتر
//         console.log(
//             array
//                 .map(acc => acc.movments.reduce((acc, curr) => acc + curr, 0))
//                 .filter(ball => ball > 5).length
//         ); // تنها یک نفر می‌تواند وام بگیرد

//         // reduce با روش
//         console.log(
//             array
//                 .map(acc => acc.movments.reduce((acc, curr) => acc + curr, 0))
//                 .reduce((acc, curr) => (curr > 5 ? ++acc : acc), 0)
//         ); // تنها یک نفر می‌تواند وام بگیرد
//     })();

//     // جمع تمامی واریز‌ها و برداشت‌ها را به صورت جداگانه در یک شیء قرار دهید
//     (() => {
//         // روش اول
//         const { variz, bardasht } = array
//             .flatMap(acc => acc.movments)
//             .reduce(
//                 (sums, curr) => {
//                     curr > 0 ? (sums.variz += curr) : (sums.bardasht += curr);
//                     return sums;
//                 },
//                 {
//                     variz: 0,
//                     bardasht: 0,
//                 }
//             );
//         console.log(variz, bardasht); // 50 -196

//         // (خلاصه) روش دوم
//         (() => {
//             // initialize
//             const { variz, bardasht } = array
//                 .flatMap(account => account.movments)
//                 .reduce(
//                     (accumulator, current) => {
//                         accumulator[current > 0 ? "variz" : "bardasht"] +=
//                             current;
//                         return accumulator;
//                     },
//                     { variz: 0, bardasht: 0 }
//                 );

//             // show result
//             console.log(variz, bardasht); // 50 -196
//         })();
//     })();

//     // جمع واریزی‌ها و برداشت‌ها را به صورت جداگانه در آرایه ذخیره کنید
//     (() => {
//         // initialize
//         const [variz, bardash] = array
//             .flatMap(acc => acc.movments)
//             .reduce(
//                 (acc, curr) => {
//                     acc[curr > 0 ? 0 : 1] += curr;
//                     return acc;
//                 },
//                 [0, 0]
//             );

//         // show result
//         console.log(variz, bardash); // 50 -196
//     })();
// })();

// // مثال برای رشته‌ها
// (() => {
//     // initialize
//     const expections = ["a", "an", "but", "or", "am", "dont"];

//     // Change String function
//     // first way
//     const changeStr = str =>
//         str
//             .trim()
//             .toLowerCase()
//             .split(" ")
//             .reduce((acc, curr, index) => {
//                 acc[index] = expections.some(exp => exp === curr)
//                     ? curr
//                     : curr.replace(curr[0], curr[0].toUpperCase());
//                 return acc;
//             }, [])
//             .join(" ");

//     // shortand way
//     const changeStr1 = str =>
//         str
//             .trim()
//             .toLowerCase()
//             .split(" ")
//             .map(curr =>
//                 expections.some(exp => exp === curr)
//                     ? curr
//                     : curr.replace(curr[0], curr[0].toUpperCase())
//             )
//             .join(" ");

//     // call function
//     console.log(changeStr1("   i am ALIREZA")); // I am Alireza
//     console.log(changeStr1("but i DONT     ")); // but I dont
//     console.log(changeStr1("   this is a BOOK ")); // This Is a Book
// })();
175;
// // اخرین تمرین برای بخش آرایه

// // fetch data
// fetch("http://localhost:8000/dog")
//     .then(res => res.json())
//     .then(data => dogFunc(data));

// function dogFunc(data) {
//     // 1
//     (() => {
//         // recommended Food function
//         data.forEach(
//             dog => (dog.recommended = Math.trunc(dog.weight ** 0.75 * 28))
//         );

//         // show result
//         console.log(data);
//     })();

//     // 2
//     (() => {
//         // find sarah dog
//         console.log("---- 2 ----");
//         console.log(data.find(dog => dog.owners.includes("Sarah"))); //عنصر را در داخل آرایه برمی‌گرداند filter برای ما خود عنصر را برمی‌گرداند اما متد find متد
//     })();

//     // 3
//     (() => {
//         data.forEach(
//             dog =>
//                 (dog[dog.curFood > dog.recommended ? "ziadKhor" : "kamKhor"] =
//                     dog.owners)
//         );

//         // create array
//         let ziadArr = [];
//         let kamArr = [];
//         data.forEach(dog =>
//             dog?.ziadKhor
//                 ? ziadArr.push(dog.ziadKhor)
//                 : kamArr.push(dog.kamKhor)
//         );

//         // show result
//         console.log("---- 3 ----");
//         console.log(`${ziadArr.flat().join(" and ")} : ziad khor`); // Matilda and Sarah and John : ziad khor
//         console.log(`${kamArr.flat().join(" and ")}  : kam khor`); // Alice and Bob and Michael  : kam khor
//     })();

//     // 4
//     (() => {
//         // show result
//         console.log("---- 4 ----");
//         console.log(
//             `${data
//                 .filter(
//                     ({ curFood, recommended }) =>
//                         curFood > recommended * 0.9 &&
//                         curFood < recommended * 1.1
//                 )
//                 .flatMap(({ owners }) => owners)
//                 .join(" and ")} : sagesh be andazeh mikhorad`
//         );
//     })();

//     // 8
//     (() => {
//         // initialize
//         const result = data
//             .slice()
//             .sort(
//                 ({ recommended: currRec }, { recommended: nextRec }) =>
//                     currRec - nextRec
//             );

//         // show result
//         console.log(result);
//     })();
// }
178;
// // آشنایی با اعداد
// (() => {
//     console.log(0.1 + 0.2 === 0.3); // 0.30000000000000004 != 0.3 => false
// })();

// // برای تبدیل رشته به عدد
// (() => {
//     console.log(Number("23")); // typeOf => number
//     console.log(+"23"); // typeOf => number - علامت بعلاوه باعث می‌شود تبدیل به عدد شود
// })();

// // method pars
// // این متد برای تجزیه عدد از داخل یک رشته به کار می‌رود
// // این متد پارامتر دوم هم می‌گرد که به عنوان مبنای اعداد است
// // البته تمام این متد‌ها را می‌توان به صورت تکی صدا زد
// (() => {
//     // parse int
//     console.log("---- parse int ----");
//     console.log(Number.parseInt("44px")); // 44
//     console.log(Number.parseInt("ali44")); // NaN

//     // with parametr
//     console.log(Number.parseInt("30px", 10)); // 30
//     console.log(Number.parseInt("30px", 2)); // NaN
//     console.log(Number.parseInt(30, 2)); // NaN

//     // parse float
//     console.log("---- parse float ----");
//     console.log(Number.parseInt(" 1.2px  ")); // 1 => parseInt
//     console.log(Number.parseFloat(" 1.2px  ")); // 1.2 => parseFloat

//     // modern and best
//     console.log("---- modern way ----");
//     console.log(parseFloat("234.3vw")); // 234.3
//     console.log(parseInt("122.9vh")); // 122

//     // isNaN
//     // هست یا نه NaN این متد بررسی می‌کند که از تایپ
//     console.log("---- isNaN ----");
//     console.log(isNaN(23)); // false
//     console.log(isNaN("23")); // false
//     console.log(isNaN(+"23")); // false
//     console.log(isNaN(+"23X")); // true
//     console.log(isNaN(2 / 0)); // false => infinity

//     // isFinite method
//     // این متد برای این است که مشخص کند عدد متناهی است یا خیر و همچنین اینکه عدد است یا نه
//     console.log("---- isFinite ----");
//     console.log(isFinite(23)); // true
//     console.log(isFinite("23")); // true
//     console.log(isFinite(+"23")); // true
//     console.log(isFinite(+"23X")); // false
//     console.log(isFinite(12 / 0)); // false => because infinity

//     // isInteger method
//     console.log("---- isInteger ----");
//     console.log(Number.isInteger(23)); // true
//     console.log(Number.isInteger(23.0)); // true
//     console.log(Number.isInteger("23.0")); // false
//     console.log(Number.isInteger(23 / 0)); // false => infinity
// })();
179;
// // numbers method
// // sqrt method
// // جذر دوم اعداد
// (() => {
//     console.log("---- sqrt ----");
//     console.log(Math.sqrt(25)); // 5

//     // استفاده از عملگر توان برای جذر گرفتن
//     console.log(8 ** (1 / 3)); // 2 => جذر سوم
// })();

// // min and max method
// (() => {
//     // max
//     console.log("---- min and max ----");
//     console.log(Math.max(24, 5, 30)); // 30
//     console.log(Math.max(24, 5, "30")); // 30
//     console.log(Math.max(24, 5, "30px")); // NaN

//     // min
//     console.log(Math.min(24, 5, "30")); // 5
//     console.log(Math.min(24, 5, 30)); // 5
//     console.log(Math.min(24, 5, "30px")); // NaN
// })();

// // PI method
// (() => {
//     console.log("---- PI ----");
//     console.log(Math.PI); // 3.141592653589793

//     // محاسبه مساحت دایره
//     console.log(Math.PI * parseFloat("2.23rem") ** 2); // 15.622826107036682
// })();

// // random numbers
// (() => {
//     console.log("---- random ----");
//     console.log(Math.trunc(Math.random() * 6 + 1)); // برای حذف کردن بخش اعشاری trunc کلمه

//     // نوشتن فرمول برای اعداد تصادفی
//     const randomFunc = (min, max) =>
//         Math.floor(Math.random() * (max - min) + 1) + min;
//     randomFunc(2, 9); // 3...9

//     // هم باشد min اگه خواستی خود
//     const randomFunc1 = (min, max) =>
//         Math.floor(Math.random() * (max - min)) + min;
//     randomFunc1(2, 9); // 2...9
// })();

// // rounding integers
// (() => {
//     console.log("---- round ----");
//     console.log(Math.round(2.6)); // 3
//     console.log(Math.round(2.5)); // 3
//     console.log(Math.round(2.1)); // 2
// })();

// // ceil integers
// (() => {
//     console.log("---- ceil ----");
//     console.log(Math.ceil(2.6)); // 3
//     console.log(Math.ceil(2.1)); // 3
// })();

// // floor integers
// (() => {
//     console.log("---- floor ----");
//     console.log(Math.floor(2.6)); // 2
//     console.log(Math.floor(2.1)); // 2
// })();

// // floor و trunc تفاوت
// // این دو روش فقط در اعداد مثبت یکی عمل می‌کنند
// (() => {
//     console.log("---- floor and trunc ----");
//     console.log(Math.floor(-2.6)); // -3
//     console.log(Math.trunc(-2.6)); // -2
// })();

// // toFixed متد
// // برای گرد کردن اعداد و تبدیل به چند رقم اعشار
// // ولی مشکل این است که به ما رشته برمی‌گرداند
// (() => {
//     console.log("---- to fixed ----");
//     console.log((27.45).toFixed(0)); // 27 => typeOf = string
//     console.log((27.55).toFixed(0)); // 28 => typeOf = string
//     console.log((2.764).toFixed(4)); // 2.7640 => typeOf = string
//     console.log(+(2.764).toFixed(2)); // 2.76 => typeOf = number
// })();
180;
// // % عملگر باقیمانده
// (() => {
//     console.log(8 % 3); // 2
// })();

// // تابعی برای تشخیص زوج یا فرد بودن
// (() => {
//     const check = num => (num % 2 === 0 ? "Even" : "Odd");
//     console.log(check(3)); // Odd
// })();

// // DOM مثالی برای این عملگر برای دستکاری در عناصر
// (() => {
//     Array.from(
//         document.querySelectorAll(".span__180"),
//         (el, index) => index % 2 === 0 && (el.style.background = "white")
//     );
// })();
181;
// // seprator numeric
// // جدا کننده‌های عددی
// (() => {
//     console.log(23_00); // 2300

//     // همچین اعدادی دریافت می‌کنیم Api در حالت هایی که از
//     console.log(Number("23_00")); // NaN
//     console.log(parseInt("23_01")); // 23
//     console.log(parseFloat("23,01")); // 23
// })();
182;
// // bigInt method
// (() => {
//     // بزرگ ترین عدد در حالت عادی
//     console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//     // bigInt
//     console.log(BigInt(23)); // 23n
//     console.log(234444444444444444444444n); // 234444444444444444444444n

//     // انجام عملیات بر روی این اعداد
//     console.log(2n + 3n); // 5n
//     console.log(2n * BigInt(34)); // 68n
//     console.log(20n > 15); // true
//     console.log(20n === 20); // false => bigInt != number
//     console.log(20n == 20); // true
//     console.log(20n == "20"); // true

//     // تقسیم کردن
//     // در این عمل بخش اعشاری حذف می‌گردد
//     console.log(21n / 2n); // 10n
// })();
183;
// // create a Date
// // اگر به صورت خالی کال شود زمان همان لحظه را نشان می‌دهد
// (() => {
//     console.log(new Date()); // Sat Feb 03 2024 09:31:55 GMT+0330 (Iran Standard Time)

//     // ما میتوانیم با دادن تاریخ به اطلاعات کامل آن دست پیدا کنیم
//     console.log(new Date("dec 6, 2024")); // Fri Dec 06 2024 00:00:00 GMT+0330 (Iran Standard Time)
//     console.log(new Date("aug 6, 2020 18:00:00")); // Thu Aug 06 2020 18:00:00 GMT+0430 (Iran Daylight Time)
//     console.log(new Date(2023, 3, 4, 22, 1, 4)); // Tue Apr 04 2023 22:01:04 GMT+0330 (Iran Standard Time)
//     console.log(new Date(2023, 3, 4, 32)); // Wed Apr 05 2023 08:00:00 GMT+0330 (Iran Standard Time)

//     // زمان یونیکس
//     // و می‌توانیم به آن حتی ثاتیه بدهیم تاریخ آن روز بعد از آن ثانیه رو به ما می‌دهد
//     console.log(new Date(0)); // Thu Jan 01 1970 03:30:00 GMT+0330 (Iran Standard Time)
//     console.log(new Date(12 * 24 * 60 * 60 * 1000)); // Tue Jan 13 1970 03:30:00 GMT+0330 (Iran Standard Time)
// })();

// // Date method
// (() => {
//     // initialize
//     const date = new Date(2037, 1, 30);
//     console.log(date); // Mon Mar 02 2037 00:00:00 GMT+0330 (Iran Standard Time)

//     // get method

//     // getYear
//     // تعداد سال گذشتن از سال یونیکس است
//     console.log(date.getYear()); // 137

//     // getFullYear
//     // تعداد سال گذشتن از سال یونیکس است
//     console.log(date.getFullYear()); // 2037

//     // getMounth
//     console.log(date.getMonth()); // 2

//     // getDate
//     // برای شماره روز است در ماه است
//     console.log(date.getDate()); // 2

//     // getDay
//     // برای شماره روز در هفته است
//     // sunday === 0
//     console.log(date.getDay()); // 1

//     // getHours
//     console.log(date.getHours()); // 0

//     // getMinutes
//     console.log(date.getMinutes()); // 0

//     // getSeconds
//     console.log(date.getSeconds()); // 0

//     // toISOString
//     // برای نمایش تاریخ به شکل استاندارد جهانی است
//     console.log(date.toISOString()); // 2037-03-01T20:30:00.000Z

//     // getTime
//     // تایم را با واحد میلی ثانیه از زمان یونیکس به ما می‌دهد
//     console.log(date.getTime()); // 2119552200000
//     console.log(new Date(2119552200000)); // Mon Mar 02 2037 00:00:00 GMT+0330 (Iran Standard Time)

//     // Date.now()
//     // تایم الان را به واحد میلی ثانیه می‌دهد
//     console.log(Date.now()); // 1706944754875

//     // set method
//     // نیز وجود دارد set برای get تمام متد‌های
//     // این روش تاریخ داخل متغیر را عوض می‌کند
//     date.setFullYear(2000);
//     console.log(date.getFullYear()); // 2000
// })();
184;
// // تمرین برای فرمت کردن تاریخ به میلادی
// (() => {
//     const date = new Date("2024-02-03T08:27:49.661Z");

//     const day = `${date.getDate()}`.padStart(2, 0);
//     const month = `${date.getMonth() + 1}`.padStart(2, 0);
//     const year = date.getFullYear();
//     const hour = date.getHours();
//     const minute = date.getMinutes();

//     console.log(`As of ${day}/${month}/${year}, ${hour}:${minute}`);
// })();
185;
// // کم کردن دو تاریخ از یکدیگر
// (() => {
//     // روش خلاصه تر
//     // const storyDate = +new Date(
//     //     new Date(new Date(new Date().setHours(6)).setMinutes(0)).setSeconds(0)
//     // );

//     // روش قابل فهم
//     const morning = new Date();
//     const setD = new Date(morning.setDate(11));
//     const setH = new Date(setD.setHours(0));
//     const setM = new Date(setH.setMinutes(0));
//     const storyDate = +new Date(setM.setSeconds(0));
//     const now = +new Date();
//     const result = Math.trunc(Math.abs((storyDate - now) / 1000));

//     const minuteR = Math.trunc(result / 60);
//     const hourR = Math.trunc(result / (60 * 60));
//     const dayR = Math.trunc(result / (60 * 60 * 24));
//     const weekR = Math.trunc(result / (60 * 60 * 24 * 7));

//     console.log(
//         (minuteR < 60 && `${minuteR}m`) ||
//             (hourR < 24 && `${hourR}h`) ||
//             (dayR < 7 && `${dayR}d`) ||
//             (weekR < 4 && `${weekR}w`)
//     );
// })();
186;
// // بین المللی کردن تاریخ و ساعت
// (() => {
//     const now = new Date();
//     const dateOption = {
//         hour: "numeric",
//         minute: "numeric",
//         day: "numeric",
//         year: "numeric",
//     };

//     console.log(
//         new Intl.DateTimeFormat("fa-IR", {
//             ...dateOption,
//             month: "numeric",
//         }).format(now)
//     ); // ۱۴۰۲/۱۱/۱۴, ۲۰:۵۵

//     console.log(
//         new Intl.DateTimeFormat("fa-IR", {
//             ...dateOption,
//             month: "long",
//         }).format(now)
//     ); // ۱۴ بهمن ۱۴۰۲ ساعت ۲۰:۵۷

//     console.log(
//         new Intl.DateTimeFormat("fa-IR", {
//             ...dateOption,
//             month: "2-digit",
//             weekday: "long",
//         }).format(now)
//     ); // ۱۴۰۲/۱۱/۱۴, ۲۱:۰۰ => اگر تک رقمی باشد پشت آن عدد صفر می‌گذارد

//     console.log(
//         new Intl.DateTimeFormat("fa-IR", {
//             ...dateOption,
//             month: "2-digit",
//             weekday: "long",
//         }).format(now)
//     ); // شنبه ۱۴۰۲/۱۱/۱۴, ۲۱:۰۲
// })();

// // بین المللی کردن ساعت و تاریخ با استفاده از منطقه زمانی مرورگر
// (() => {
//     const local = navigator.language;
//     const dateOption = {
//         hour: "2-digit",
//         day: "2-digit",
//         minute: "2-digit",
//         month: "2-digit",
//         year: "2-digit",
//     };

//     console.log(local); // en-US
//     console.log(new Intl.DateTimeFormat(local, dateOption).format(new Date())); // 02/03/24, 09:20 PM
// })();
187;
// // فرمت کردن اعداد
// (() => {
//     const num = 6753568;
//     console.log(new Intl.NumberFormat(navigator.language).format(num)); // 6,753,568
//     console.log(new Intl.NumberFormat('fa-IR').format(num)); // ۶٬۷۵۳٬۵۶۸
// })();

// // with option
// (() => {
//     console.log(
//         new Intl.NumberFormat(navigator.language, {
//             style: 'unit',
//             unit: 'mile-per-hour',
//         }).format(897497349)
//     ); // 897,497,349 mph

//     console.log(
//         new Intl.NumberFormat(navigator.language, {
//             style: 'unit',
//             unit: 'celsius',
//         }).format(897497349)
//     ); // 897,497,349°C

//     console.log(
//         new Intl.NumberFormat(navigator.language, {
//             style: 'percent',
//         }).format(0.9)
//     ); // 90%

//     console.log(
//         new Intl.NumberFormat(navigator.language, {
//             style: 'currency',
//             currency: 'EUR',
//         }).format(95)
//     ); // €95.00

//     // اگر می‌خوای بدون جدا کننده نمایش بده
//     console.log(
//         new Intl.NumberFormat(navigator.language, {
//             style: 'currency',
//             currency: 'EUR',
//             useGrouping: false,
//         }).format(9598479)
//     ); // €9598479.00
// })();
188;
// // setTimeout
// (() => {
//     setTimeout((a, b) => console.log(`${a} and ${b}`), 2000, 'ali', 'reza'); // ali and reza

//     // کالبک جدا
//     const dilay = k => console.log(k);
//     setTimeout(dilay, 3000, 'first'); // first
// })();

// // clearTimeout
// (() => {
//     const arr = ['ali', 'reza', 'mohsen', 'bezi'];
//     const set1 = setTimeout(
//         arrN => arrN.forEach(name => console.log(name)),
//         3000,
//         arr
//     );
//     arr.includes('zahra') && clearTimeout(set1);
// })();

// // setInterval
// (() => {
//     console.log('---- setInterval ----');
//     setInterval(() => console.log(new Date()), 1000);
// })();

// // clock practice
// // first way
// () => {
//     setInterval(() => {
//         // initialize
//         const now = new Date();
//         const hour = `${now.getHours()}`.padStart(2, 0);
//         const minute = `${now.getMinutes()}`.padStart(2, 0);
//         const second = `${now.getSeconds()}`.padStart(2, 0);

//         // show result
//         document.querySelector(
//             '.clock'
//         ).textContent = `${hour}:${minute}:${second}`; //  01:23:08
//     }, 1000);
// };

// // second way
// setInterval(() => {
//     // initialize
//     const now = Intl.DateTimeFormat(navigator.language, {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//     }).format(new Date());

//     // show result
//     document.querySelector('.clock').textContent = now; // 01:23:08 PM
// }, 1000);
189;
// // Timer practice
// (() => {
//     let ex = 10;

//     document.querySelector('.timer').addEventListener('click', () => {
//         const timer = setInterval(() => {
//             const min = `${Math.trunc(ex / 60)}`.padStart(2, 0);
//             const sec = `${Math.trunc(ex % 60)}`.padStart(2, 0);

//             // warning
//             ex <= 5 && ex % 2 === 1
//                 ? (document.querySelector('.timer-box').style.color = 'red')
//                 : (document.querySelector('.timer-box').style.color = '#000');

//             // stop timer
//             !ex && clearInterval(timer);

//             // show result
//             document.querySelector('.timer-box').textContent = `${min}:${sec}`;

//             // count down
//             ex--;
//         }, 1000);
//     });
// })();
194;
// // Advanced DOM in JavaScript
// // document
// (() => {
//     // شامل تمامی متد‌هایی است که مربوط به سند ما می‌شود html سند
//     // html یک مثال از متد‌های سند
//     console.log(document.location.href.startsWith('http://127.0.0.1:5501')); // true
//     console.log(document.location.href.endsWith('/index.html')); // true

//     // document
//     console.log(document.documentElement); // تمام تگ‌ها را نمایش می‌دهد
//     console.log(document.head); // را نمایش می‌دهد head تگ
//     console.log(document.body); // را نمایش می‌دهد body تگ
// })();

// // انواع مختلف انتخابگر‌ها
// (() => {
//     console.log(document.getElementById('timer'));

//     // عنصری را حذف کنیم لیست ما بروز نمی‌شود NodeList اگر در
//     console.log(document.querySelectorAll('.span__172')); // NodeList(2) [span.span__172, span.span__172]

//     // HTMLCollection
//     // را حذف کنیم بلافاصله لیست ما بروز می‌شود html شبیه به آرایه است و در صورتی که یک یا چند عنصر
//     console.log(document.getElementsByClassName('span__172')); // HTMLCollection(2) [span.span__172, span.span__172]
//     console.log(document.getElementsByTagName('div')); // HTMLCollection(4) [div, div, div.clock, div#timer, timer: div#timer]
// })();

// // JS با HTML روش‌های ایجاد عنصر
// (() => {
//     // روش اول
//     // insertAdjacentHTML
//     // afterbegin , afterend , beforebegin , beforeend
//     document.body.insertAdjacentHTML(
//         'beforeend',
//         '<div class="insert">with insertAdjacentHTML</div>'
//     );

//     // روش دوم
//     // ایجاد عنصر به صورت دستی
//     // createElement
//     const massage = document.createElement('div');
//     massage.classList.add('massage');
//     massage.style = 'display: inline-block; border: 1px solid';
//     massage.innerHTML = 'ali <button class="massage-btn">massage</button>'; // عنصر را ایجاد می‌کند
//     // massage.textContent = 'ali <button>massage</button>'; // ali <button>massage</button> => عنصر را ایجاد نمی‌کند
//     // prepend => body اولین عنصر
//     // append => body آخرین عنصر
//     // after => body بعد از عنصر
//     // before => body قبل از عنصر
//     document.body.before(massage);

//     // را نمی‌توان در دو جا قرار داد مگر اینکه از آن کپی بگیریم massage عنصر
//     // cloneNode
//     document.body.after(massage.cloneNode(true));
// })();

// // delete element
// // remove method
// (() => {
//     Array.from(document.querySelectorAll('.massage-btn'), el =>
//         el.addEventListener('click', e => e.target.parentElement.remove())
//     );
// })();

// // removeChild method
// (() => {
//     // // without removeChild method
//     // این روش کامل تر است
//     (() =>
//         Array.from(document.querySelectorAll('.massage'), el =>
//             el.addEventListener('click', e =>
//                 Array.from(
//                     e.target.children,
//                     child =>
//                         child.classList.contains('massage-btn') &&
//                         child.remove()
//                 )
//             )
//         ))();

//     // whit removeChild method
//     () =>
//         document
//             .querySelectorAll('.massage')[0]
//             .addEventListener('click', event => {
//                 const m = document.querySelectorAll('.massage-btn')[0];
//                 event.target.removeChild(m);
//             });
// })();
195;
// // styles
// (() => {
//     // styling
//     () => (document.body.style.height = '98.6vh');

//     // get style (only inline style)
//     () => console.log(document.body.style.height); // 98.6vh

//     // get all styles (inline and css style and user agent stylesheet)
//     // getComputedStyle method
//     () => {
//         console.log(getComputedStyle(document.body)); // all styles
//         console.log(getComputedStyle(document.body).display); // flex
//     };

//     // change css style with getComputedStyle method
//     () => {
//         document.body.style.height =
//             parseFloat(getComputedStyle(document.body).height) + 20 + 'vh';
//         console.log(getComputedStyle(document.body).height); // vh => px
//     };

//     // change css variable
//     () => document.documentElement.style.setProperty('--back', '#000');
// })();

// // get Attribute
// (() => {
//     // get Attribute value
//     () => console.log(document.querySelector('.userInput').type); // text

//     // getAttribute method
//     // این متد کامل تر است و صفات غیر استاندارد را هم برمی‌گرداند
//     () => {
//         console.log(document.querySelector('.userInput').ali); // undefined => غیر استاندارد است
//         console.log(document.querySelector('.userInput').getAttribute('ali')); // reza
//     };

//     // change attribute value
//     () => {
//         document.querySelector('.userInput').type = 'jodat';
//         console.log(document.querySelector('.userInput').getAttribute('type')); // jodat
//     };

//     // a تفاوت گرفتن مقدار سورس عکس یا لینک تگ
//     // استفاده کرد getAttribute در مواردی که آدرس دهی ما مربوط به فایل‌های داخلی میشوند باید از
//     // از هر دو روش می‌توان استفاده کرد https://www.google.com اما مثلا در آدرس دهی خارجی مثل
//     () => {
//         console.log(document.querySelector('.a__195').href); // http://127.0.0.1:5501/index.html#
//         console.log(document.querySelector('.a__195').getAttribute('href')); // #
//     };
// })();

// // set Attribute
// () => {
//     document.querySelector('.userInput').setAttribute('r', 'b');
//     console.log(document.querySelector('.userInput').getAttribute('r')); // b
// };

// // Data Attribute
// // یک آبجکت است
// () => console.log(document.querySelector('.a__195').dataset.version); // 4.2.0

// // Classes
// (() => {
//     // add and remove method
//     () => {
//         document.querySelector('.a__195').classList.add('a', 'b');
//         document.querySelector('.a__195').classList.remove('a', 'b');
//     };

//     // toggle and contains method
//     () => {
//         document.querySelector('.a__195').classList.contains('a');
//         document.querySelector('.a__195').classList.toggle('a');
//     };

//     // اگر می‌خواهید تمام کلاس‌ها ریست شده و فقط یک کلاس جایگزین شود
//     () => (document.querySelector('.a__195').className = 'ali');
// })();
197;
// // addEventsListener
// (() => {
//     const h1 = document.querySelector('.h1__197');

//     // js روشی قدیمی برای ایجاد رویداد
//     h1.onclick = () => console.log('Entered!');

//     // mouseenter event
//     // هر بار که موس وارد این عنصر می‌شود قطعه کد اجراء می‌شود
//     () => h1.addEventListener('mouseenter', () => console.log('Entered!'));
// })();

// // removeEventsListener
// (() => {
//     const h1 = document.querySelector('.h1__197');

//     // برای حذف کردن یک رویداد ابتدا تابع آن را در یک متغیر ذخیره کنیم
//     // و سپس به وسیله اسم همان کال‌بک می‌توان رویداد را حذف کرد
//     () => {
//         const func = () => {
//             console.log('Entered!');

//             // فقط یکبار اجرا می‌شود
//             h1.removeEventListener('mouseenter', func);
//         };
//         h1.addEventListener('mouseenter', func);
//     };
// })();
199;
// // event propagation
// // انتشار ایونت
// () => {
//     const div = document.querySelector('.div-propagation');
//     const nav = document.querySelector('.nav-propagation');
//     const span = document.querySelector('.span-propagation');

//     const randomInt = (max, min) =>
//         Math.floor(Math.random() * (max - min) + min);
//     const randomColor = () =>
//         `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`;

//     // رنگ والد‌هایی که ایونت دارند هم عوض می‌شود div با کلیک کردن برروی
//     // در درون والد‌های خود قرار دارد div زیرا
//     // فقط در این نوع از توابع بی‌نام به خود عنصر دارای ایونت اشاره می‌کنند this کلمه کلیدی
//     div.addEventListener('click', function (e) {
//         // به تعداد والد هایی که ایونت برایشان ست شده چاپ می‌شود
//         // اما همه فقط عنصر کلیک شده را چاپ می‌کنند
//         console.log(e.target);

//         // فقط به عنصر دارای ایونت اشاره می‌کند this کلمه کلیدی
//         console.log(this); // div

//         // عمل می‌کند this این هم مثل کلمه کلیدی
//         // و فقط به عنصر دارای ایونت اشاره می‌کند
//         // (e.currentTarget === this) => البته فقط در همین نوع از توابع بی‌نام
//         console.log(e.currentTarget, 'currentTarget');

//         this.style.background = randomColor();
//     });

//     // رنگ والد‌هایی که ایونت دارند هم عوض می‌شود nav با کلیک کردن برروی
//     // در درون والد‌های خود قرار دارد nav زیرا
//     // فقط در این نوع از توابع بی‌نام به خود عنصر دارای ایونت اشاره می‌کنند this کلمه کلیدی
//     nav.addEventListener('click', function (e) {
//         // به تعداد والد هایی که ایونت برایشان ست شده چاپ می‌شود
//         // اما همه فقط عنصر کلیک شده را چاپ می‌کنند
//         console.log(e.target);

//         // فقط به عنصر دارای ایونت اشاره می‌کند this کلمه کلیدی
//         console.log(this); // nav

//         // عمل می‌کند this این هم مثل کلمه کلیدی
//         // و فقط به عنصر دارای ایونت اشاره می‌کند
//         // (e.currentTarget === this) => البته فقط در همین نوع از توابع بی‌نام
//         console.log(e.currentTarget, 'currentTarget');

//         this.style.background = randomColor();
//     });

//     // رنگ والد‌هایی که ایونت دارند هم عوض می‌شود span با کلیک کردن برروی
//     // در درون والد‌های خود قرار دارد span زیرا
//     // فقط در این نوع از توابع بی‌نام به خود عنصر دارای ایونت اشاره می‌کنند this کلمه کلیدی
//     span.addEventListener('click', function (e) {
//         // به تعداد والد هایی که ایونت برایشان ست شده چاپ می‌شود
//         //  اما همه فقط عنصر کلیک شده را چاپ می‌کنند
//         console.log(e.target);

//         // فقط به عنصر دارای ایونت اشاره می‌کند this کلمه کلیدی
//         console.log(this); // span

//         // عمل می‌کند this این هم مثل کلمه کلیدی
//         // و فقط به عنصر دارای ایونت اشاره می‌کند
//         // (e.currentTarget === this) => البته فقط در همین نوع از توابع بی‌نام
//         console.log(e.currentTarget, 'currentTarget');

//         this.style.background = randomColor();
//     });
// };

// // stopPropagation()
// // اجرا شدن ایونت در والدها را متوقف می‌سازد
// // اما استفاده از این روش توصیه نمی‌شود
// () => {
//     const div = document.querySelector('.div-propagation');
//     const nav = document.querySelector('.nav-propagation');
//     const span = document.querySelector('.span-propagation');

//     div.addEventListener('click', function () {
//         console.log('clicked!');
//     });

//     nav.addEventListener('click', function () {
//         console.log('clicked!');
//     });

//     span.addEventListener('click', function (e) {
//         console.log('clicked!');
//         e.stopPropagation();
//     });
// };

// // ایجاد الویت در حباب ایونت
// // بدهیم true به هر کدام از ایونت‌ها مقدار سوم
// // اگر شرایط حباب ایونت را داشته باشد اول از همه اجرا می‌شود
// // و سپس مابقی به ترتیب اجرا میشوند

// // است true دارای nav در مثال زیر فقط
// // کلیک شود span اگر برروی
// // است nav در داخل span شرایط حباب ایونت فراهم است زیرا
// // با این حال ترتیب اجرا به صورت زیر است
// // clicked! nav => true به دلیل داشتن
// // clicked! span
// // clicked! div
// (() => {
//     const div = document.querySelector('.div-propagation');
//     const nav = document.querySelector('.nav-propagation');
//     const span = document.querySelector('.span-propagation');

//     div.addEventListener('click', function () {
//         console.log('clicked! div');
//     });

//     nav.addEventListener(
//         'click',
//         function () {
//             console.log('clicked! nav');
//         },
//         true
//     );

//     span.addEventListener('click', function (e) {
//         console.log('clicked! span');
//     });
// })();
201;
// // DOM traversing
// (() => {
//     const div = document.querySelector('.div-propagation');

//     // DOM traversing
//     () => console.log(div.querySelector('.span-propagation')); // OK!

//     // childNode
//     // انواع مختلف از گره را به ما می‌دهد
//     // است NodeList نوع آن
//     () => console.log(div.childNodes); // NodeList(3) [text, nav.nav-propagation, text]

//     // children
//     // خود عناصر را به ما می‌دهد
//     // است HTMLCollection  نوع آن
//     () => console.log(div.children); // HTMLCollection [nav.nav-propagation]

//     // lastElementChild and firstElementChild
//     () => {
//         console.log(div.firstElementChild); // .nav-propagation
//         console.log(div.lastElementChild); // .nav-propagation
//     };

//     // parentNode
//     // این روش فقط در محدوده والد مستقیم است
//     // که به ما انواع گره‌ها را می‌دهد
//     () => console.log(div.querySelector('.span-propagation').parentNode); // nav.nav-propagation

//     // ها node به وسیله textContent تغییر
//     () => (div.childNodes[0].textContent = 'ali');

//     // parentElement
//     // این روش فقط در محدوده والد مستقیم است
//     // که به ما خود والد را می‌دهد
//     () => console.log(div.querySelector('.span-propagation').parentElement); // nav.nav-propagation

//     // closest method
//     // این روش نزدیک ترین والد را به ما می‌دهد
//     () =>
//         console.log(
//             div.querySelector('.span-propagation').closest('.div-propagation')
//         );

//     const btn = document.querySelector('.btn143');

//     // going sideways : sibling
//     // nextElementSibling and previousElementSibling
//     // خود عنصر را برمی‌گرداند
//     () => {
//         console.log(btn.nextElementSibling); // form
//         console.log(btn.previousElementSibling); // btn142
//     };

//     // nextSibling and previousSibling
//     // خود عنصر را بر نمی‌گرداند
//     () => {
//         console.log(btn.nextSibling); // #text
//         console.log(btn.previousSibling); // #text
//     };

//     // تمرین برای پیدا کردن فرزند مورد نظر
//     const form = document.querySelector('.form1');

//     // first way
//     () => console.log(form.querySelector('.btn166'));

//     // second way
//     // DOM traversing
//     () =>
//         Array.from(
//             form.children,
//             child => child.classList.contains('btn166') && console.log(child)
//         );
// })();
210;
// // other addEventListener
// // DOMContentLoaded
// // بارگذاری میشود این ایونت اجرا می‌شود DOM زمانی که
// // این ایونت رخ می‌دهد HTML یا به عبارتی پس از اجرا شدن
// (() => document.addEventListener('DOMContentLoaded', e => console.log(e)))();

// // load
// // پس از بارگذاری کامل پنجره این ایونت رخ می‌دهد
// (() => window.addEventListener('load', e => console.log(e)))();

// // beforeunload
// // این ایونت در هنگام بستن پنجره و بارگذاری مجدد پنجره یک پیغام را به نمایش در می‌آورد
// () =>
//     window.addEventListener('beforeunload', e => {
//         e.preventDefault();
//         e.returnValue = '';
//     });
216;
// // OOP (Object Oriented Programming)
// // نمی‌توان استفاده کرد Arrow در این روش از تابع
// // است this که یکی از دلایل آن استفاده زیاد از کلمه کلیدی
// // در اسم گذاری کلاس‌ها بهتر است اولین حرف آن بزرگ باشد
// // ها دارند function کلاس‌ها تشابه زیادی به
// // صدا زده شوند new اما یکی از تفاوت آنها این است که باید با کلمه کلیدی
// // بعد از کال شدن یک شیء ساخته می‌شود
// // است this که این شیء برابر با کلمه کلیدی
// // متصل می‌شود prototype و این شیء ایجاد شده به
// () => {
//     // first way
//     const Person = function (fName, lName) {};
//     console.log(new Person('ali', 'jodat')); // Person {} => is Empty
//     // second way
//     function Person1(fName, lName) {
//         console.log(this);
//     }
//     new Person1('ali', 'jodat'); // Person1 {} => is Empty
// };

// // چگونه آن شیء خالی را پر کنیم
// () => {
//     function Person(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//     console.log(new Person('ali', 'jodat')); // Person {firstName: 'ali', lastName: 'jodat'}
// };

// // ایجاد چند شیء با فرمت یکسان
// () => {
//     function Person(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//     const ali = new Person('ali', 'jodat'); // Person {firstName: 'ali', lastName: 'jodat'}
//     const reza = new Person('reza', 'jodat'); // Person {firstName: 'reza', lastName: 'jodat'}
//     const mohsen = new Person('mohsen', 'jodat'); // Person {firstName: 'mohsen', lastName: 'jodat'}
// };

// // instanceof method
// // برای تشخیص این است که آن متغیر نمونه‌ای از آن تابع است
// () => {
//     function Person(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//     const ali = new Person('ali', 'jodat');
//     const reza = 'OK';
//     console.log(ali instanceof Person); // true
//     console.log(reza instanceof Person); // false
// };

// // به شیء خودمان method نحوه ایجاد کردن
// // با روش پایین اصلا بهینه نیست method که البته تعریف کردن
// () => {
//     function Person(fName, lName, age) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.calcAge = function () {
//             return 2024 - this.age;
//         };
//     }
//     const ali = new Person('ali', 'jodat', 2001);
//     const { firstName, lastName } = ali;
//     console.log(`${firstName} ${lastName}: ${ali.calcAge()}`); // ali jodat: 23
// };
217;
// // Prototype
// // با اضافه کردن پروتوتایپ به کانستراکتور تمامی اشیائی که از آن ساخته می‌شوند به آن دسترسی دارند
// // add method
// () => {
//     function Person(fName, lName, age) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.calcAge = function () {
//             return 2024 - this.age;
//         };
//     }
//     console.log(Person.prototype); // constructor: ƒ Person(fName, lName, age) => جزو نمونه اولیه نیست calcAge همانطور که می‌بینید متد
//     Person.prototype.newCalcAge = function () {
//         return 2024 - this.age;
//     };
//     console.log(Person.prototype); // {newCalcAge: ƒ, constructor: ƒ} => حالا به عنوان نمونه اولیه اضافه شده است
//     const ali = new Person('', '', 2001);
//     console.log(ali.newCalcAge()); // 23
//     // ساخته شود به این پروتوتایپ دسترسی خواهد داشت Person حالا هر شیء که از تابع کانستراکتور
//     const reza = new Person('reza', 'jodat', 2005);
//     console.log(reza.newCalcAge()); // 19
//     console.log(reza.__proto__ === Person.prototype); // true => پروتوتایپ‌های آنها یکی هستند
//     // isPrototypeOf() method
//     console.log(Person.prototype.isPrototypeOf(reza)); // true
//     console.log(Person.prototype.isPrototypeOf(Person)); // false
// };

// // add spcies
// () => {
//     function Person(fName, lName, age) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.calcAge = function () {
//             return 2024 - this.age;
//         };
//     }
//     Person.prototype.width = '120px';
//     const div = new Person('div', 'span', 20);
//     console.log(div); // Person {firstName: 'div', lastName: 'span', age: 20, calcAge: ƒ} => نمونه اولیه اینجا نیست
//     // first way
//     console.log(div.width); // 120px
//     // second way
//     console.log(div.__proto__.width); // 120px
// };

// // hasOwnProperty('')
// // برای چک کردن اینکه آن ویژگی فقط در اختیار آن شیء است یا نه
// () => {
//     function Person(fName, lName, age) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.calcAge = function () {
//             return 2024 - this.age;
//         };
//     }
//     Person.prototype.width = '120px';
//     const div = new Person('div', 'span', 20);
//     console.log(div.hasOwnProperty('width')); // false => نیست div این ویژگی نوعی پروتوتایپ است و فقط برای شیء
// };
218;
// // نحوه دسترسی به تمام پروتوتایپ‌های از قبل تعریف شده
// // hasOwnProperty, isPrototypeOf,... مثل
// () => {
//     function Person(fName, lName, age) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.calcAge = function () {
//             return 2024 - this.age;
//         };
//     }
//     Person.prototype.average = function () {
//         return 2024 - age;
//     };
//     const ali = new Person('ali', 'jodat', 2000);
//     console.log(ali.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     console.log(ali.__proto__.__proto__.__proto__); // null
// };

// // Prototype in Array
// // با این کار می‌توان به تمامی متد‌های آرایه دسترسی پیدا کرد
// () => {
//     const arr = [12, 3, 556, 676, 2];
//     console.log(arr.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
//     console.log(arr.__proto__ === Array.prototype); // true
// };

// // prototype لایه‌های داخلی
// () => {
//     const arr = [12, 3, 556, 676, 2];
//     console.log(arr.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
//     // اینبار به متد‌های اشیاء می‌رسیم
//     // خود یک شیء است arr.__proto__ زیرا
//     console.log(arr.__proto__.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
// };

// // add prototype in array
// // ست می‌شوند و در خارج از آن بلاک می‌توان به آن دسترسی داشت global ها به صورت prototype این
// () => {
//     const arr = [12, 3, 556, 676, 2];
//     arr.__proto__.su = function () {
//         console.log(this.reduce((acc, curr) => (acc += curr), 0));
//     };
//     arr.su(); // 1249
//     Array.prototype.ali = function () {
//         console.log(this);
//     };
//     arr.ali(); // [12, 3, 556, 676, 2]
// };

// // ایجاد متد جدید برای آرایه
// // البته که این کار درست نیست
// // زیرا ممکن است در آینده کد ما دچار تداخل با متد‌های جدید جاوااسکریپتی شود
// () => {
//     const arr = [0, 1, 1, 34, 34, 2];
//     Array.prototype.unique = function () {
//         console.log([...new Set(this)]);
//     };
//     arr.unique(); // [0, 1, 34, 2]
// };
219;
// // prototype in elements
// () => {
//     const body = document.body;
//     console.log(body.__proto__); // => [[Prototype]]: HTMLElement
//     console.log(body.__proto__.__proto__); // => [[Prototype]]: Element
//     console.log(body.__proto__.__proto__.__proto__); // => [[Prototype]]: Node
//     console.log(body.__proto__.__proto__.__proto__.__proto__); // => [[Prototype]]: EventTarget
//     console.log(body.__proto__.__proto__.__proto__.__proto__.__proto__); // => [[Prototype]]: Object => {Symbol(Symbol.toStringTag): 'EventTarget', addEventListener: ƒ, dispatchEvent: ƒ, removeEventListener: ƒ, constructor: ƒ}
//     console.log(
//         body.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
//     ); // => {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     console.log(
//         body.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
//             .__proto__
//     ); // => null😃
// };

// // prototype in function
// () => {
//     const func = x => x + 1;
//     console.log(func().__proto__); // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
//     console.log(func().__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     console.log(func().__proto__.__proto__.__proto__); // null
// };
220;
// // coding chalange for (OOP)

// () => {
//     const Car = function (mark, speed) {
//         this.mark = mark;
//         this.speed = Intl.NumberFormat(navigator.language, {
//             style: 'unit',
//             unit: 'kilometer-per-hour',
//         }).format(speed);
//     };
//     const Benz = new Car('Benz', 260);
//     Car.prototype.accelerate = function () {
//         console.log(
//             Intl.NumberFormat(navigator.language, {
//                 style: 'unit',
//                 unit: 'kilometer-per-hour',
//             }).format(parseFloat(this.speed) + 10)
//         );
//     };
//     Car.prototype.brake = function () {
//         console.log(
//             Intl.NumberFormat(navigator.language, {
//                 style: 'unit',
//                 unit: 'kilometer-per-hour',
//             }).format(parseFloat(this.speed) - 5)
//         );
//     };
//     Benz.accelerate(); // 270 km/h
//     Benz.brake(); // 265
// };
221;
// // classes in ES6
// // 1. قبل از تعریف کردن کلاس‌ها نمی‌توان از آن استفاده کرد
// // 2. اجرا می‌شود strict mode کلاس‌ها همیشه در حالت
// // class Expression
// () => {
//     const Person = class {};
//     console.log(new Person()); // Person {}
// };

// // class Declaration
// () => {
//     class Person {}
//     console.log(new Person()); // Person {}
// };

// // set constructor function in class
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         }
//     }
//     const person1 = new Person('alireza', 'jodat');
//     console.log(person1); // Person {firstName: 'alireza', lastName: 'jodat'}
// };

// // set method in class
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//             this.showFullName = function () {
//                 const { firstName, lastName } = this;
//                 console.log(`${firstName} ${lastName}`); // alireza jodat
//             };
//         }
//     }
//     const person1 = new Person('alireza', 'jodat');
//     person1.showFullName(); // alireza jodat
// };

// // set prototype in class
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         }
//         // first and best way
//         showFullName() {
//             const { firstName, lastName } = this;
//             console.log(`${firstName} ${lastName}`);
//         }
//     }
//     const person1 = new Person('alireza', 'jodat');
//     person1.showFullName(); // alireza jodat
//     // second way
//     Person.prototype.helloFunc = function () {
//         console.log(`${this.firstName}, hello!!!`);
//     };
//     person1.helloFunc(); // alireza, hello!!!
// };

// // (person1.__proto__ === Person.prototype)
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         }
//         showFullName() {
//             const { firstName, lastName } = this;
//             console.log(`${firstName} ${lastName}`);
//         }
//     }
//     const person1 = new Person('alireza', 'jodat');
//     console.log(person1.__proto__ === Person.prototype); // true
// };
222;
// // Getters and Setters in regular object
// () => {
//     const acc = {
//         own: 'ali',
//         movs: [12, 4567, 778, 3],
//         // Getters
//         // شود return نتیجه نهایی حتما باید
//         get latest() {
//             return this.movs.slice(-1);
//         },
//         // Setters
//         // باید حتما یک پارارمتر داشته باشد
//         set latest(mov) {
//             this.movs.push(mov);
//         },
//     };
//     // Getters
//     // باید همانند یک ویژگی معمولی در یک شیء صدا زده شود
//     console.log(acc.latest); // [3]
//     // Setters
//     // باید حتما به صورت زیر صدا زده شود
//     acc.latest = 85;
//     console.log(acc.movs); // [12, 4567, 778, 3, 85]
// };

// // Getters and Setters in classes
// () => {
//     class Acc {
//         constructor(own, movs) {
//             this.own = own;
//             this.movs = movs;
//         }
//         // Getters
//         get latest() {
//             return this.movs.slice(-1);
//         }
//         // Setters
//         set latest(mov) {
//             this.movs.push(mov);
//         }
//     }
//     const acc1 = new Acc('ali', [1, 2, 3]);
//     // Getters
//     console.log(acc1.latest); // [3]
//     // Setters
//     acc1.latest = 85;
//     console.log(acc1.movs); // [1, 2, 3, 85]
// };

// // practice for Getters and setters
// // استفاده کردیم _fullName در مثال زیر برای اعتبار سنجی و نداشتن تداخل از نام متغیر
// // را صدا می‌کنیم fullName همان Getters اما در
// () => {
//     class Family {
//         constructor(fullName, age) {
//             this.fullName = fullName;
//             this.age = age;
//         }
//         // Setters
//         set fullName(name) {
//             name.includes(' ') ? (this._fullName = name) : console.log('Bad');
//         }
//         // Getters
//         get fullName() {
//             return this._fullName;
//         }
//     }
//     const family1 = new Family('ali', 20); // Bad
//     const family2 = new Family('ali reza', 20);
//     console.log(family2.fullName); // ali reza
// };
223;
// // static method
// // 1. in constructor function
// () => {
//     function Person(fName, lName) {
//         this.fName = fName;
//         this.lName = lName;
//     }
//     Person.hey = function () {
//         console.log('Hello...');
//     };
//     const ali = new Person('ali', 'jodat');
//     // متد‌های استاتیک به ارث برده نمی‌شوند
//     Person.hey(); // Hello...
// };

// // 2. in classes
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.fName = fName;
//             this.lName = lName;
//         }
//         static hey() {
//             console.log('Hello...');
//         }
//     }
//     const ali = new Person('ali', 'jodat');
//     // متد‌های استاتیک به ارث برده نمی‌شوند
//     Person.hey(); // Hello...
// };
224;
// // Object.create(...)
// // به هر شیء دلخواه است prototype برای ست کردن دستی
// () => {
//     const PersonProto = {
//         fName: 'alireza',
//         hey() {
//             console.log('Hello...');
//         },
//     };
//     console.log(PersonProto); // {fName: 'alireza', hey: ƒ} => یک شیء معمولی
//     const person1 = Object.create(PersonProto);
//     // set species
//     person1.lName = 'jodat'; // محسوب نمیشود prototype جزو
//     console.log(person1); // [[Prototype]]: Object => منتقل می‌شود prototype به داخل PersonProto تمام ویژگی‌های ست شده
//     person1.hey(); // Hello...
//     console.log(person1.__proto__ === PersonProto); // true
// };

// // set species
// () => {
//     const PersonProto = {
//         init(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         },
//     };
//     const Person1 = Object.create(PersonProto);
//     Person1.init('ali', 'jodat');
//     console.log(Person1); // {firstName: "ali", lastName: "jodat", [[Prototype]]: Objectinit: ƒ init(fName, lName)}
// };
225;
// // coding challenge
// () => {
//     class Car {
//         constructor(make, speed) {
//             this.make = make;
//             this.speed = speed;
//         }
//         accelerate() {
//             this.speed = parseFloat(this.speed) + 10;
//             this.changeUnit();
//             console.log(this.speed);
//         }
//         brake() {
//             this.speed = parseFloat(this.speed) - 5;
//             this.changeUnit();
//             console.log(this.speed);
//         }
//         changeUnit() {
//             this.speed = Intl.NumberFormat('en', {
//                 style: 'unit',
//                 unit: 'kilometer-per-hour',
//             }).format(this.speed);
//         }
//         get speedUs() {
//             return parseFloat(this.speed) / 1.6;
//         }
//         set speedUs(speed) {
//             this.speed = Math.trunc(speed * 1.6);
//             console.log(this.speed);
//         }
//     }
//     const Benz = new Car('Benz', 200);
//     Benz.accelerate(); // 210 km/h
//     Benz.brake(); // 205 km/h
//     Benz.speedUs = 50; // 80
// };
226;
// // Inheritance between classes in (constructor function)
// () => {
//     const Person = function (name, family) {
//         this.name = name;
//         this.family = family;
//     };
//     Person.prototype.hey = function () {
//         console.log('Hello...');
//     };
//     const Admin = function (name, family, course) {
//         // استفاده کنیم call باید از this برای استفاده از کلمه کلیدی
//         Person.call(this, name, family);
//         this.course = course;
//     };
//     // Linking prototypes
//     // قرار می‌دهیم Admin.prototype می‌سازیم و سپس در داخل شیء خالی Person.prototype ابتدا یک شیء کپی از  Object.create() با استفاده از
//     // را به ارث ببریم و نه اینکه از خود آن استفاده کنیم Person.prototype نکته مهم این است که ما میخواهیم
//     Admin.prototype = Object.create(Person.prototype);
//     // changing constructor function
//     // برمی‌گردانیم Admin را به constructor با این کار بخش
//     // جلوگیری شود Person constructor تا در مواقع نیاز از رجوع به
//     Admin.prototype.constructor = Admin;
//     // Add greet prototype
//     Admin.prototype.greet = function () {
//         console.log(`hello ${this.name}`);
//     };
//     const Alireza = new Admin('Alireza', 'Jodat', 'computer');
//     console.log(Alireza); // Admin {name: 'Alireza', family: 'Jodat', course: 'computer'}
//     Alireza.greet(); // hello Alireza
//     Alireza.hey(); // Hello...
// };
227;
// // coding challenge
// () => {
//     // Car class
//     const Car = function (make, speed) {
//         this.make = make;
//         this.speed = speed;
//     };
//     // Adding prototype
//     Car.prototype.changeSpeedUnit = function () {
//         console.log(
//             Intl.NumberFormat('en', {
//                 style: 'unit',
//                 unit: 'mile-per-hour',
//             }).format(Math.round(this.speed / 1.6))
//         );
//     };
//     // EV class
//     const EV = function (make, speed, charge) {
//         Car.call(this, make, speed);
//         this.charge = charge;
//     };
//     // Linking prototypes
//     EV.prototype = Object.create(Car.prototype);
//     // Add constructor
//     EV.prototype.constructor = EV;
//     // Adding prototype
//     EV.prototype.showCharge = function () {
//         console.log(
//             Intl.NumberFormat('DE', { style: 'unit', unit: 'percent' }).format(
//                 this.charge
//             )
//         );
//     };
//     // New EV car
//     const Benz = new EV('Benz', 120, 29);
//     // call method
//     Benz.changeSpeedUnit(); // 75 mph
//     Benz.showCharge(); // 29 %
// };
228;
// // inheritance between classes
// // 1. اگر فقط می‌خواهید که کلاس فرزند ارث بری کند از روش زیر استفاده نمایید
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         }
//         hey() {
//             console.log(`hello ${this.firstName}`);
//         }
//     }
//     class Student extends Person {}
//     const student1 = new Student('ali', 'jodat'); // Student {firstName: 'ali', lastName: 'jodat'}
//     student1.hey(); // hello ali
// };

// // 2. اگر خواستید علاوه بر ارث بری ویژگی یا متد نیز اضافه کنید مراحل زیر را دنبال نمایید
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         }
//         hey() {
//             console.log(`hello ${this.firstName}`);
//         }
//     }
//     class Student extends Person {
//         constructor(fName, lName, age) {
//             super(fName, lName);
//             this.age = age;
//         }
//         hello() {
//             console.log('Hello...');
//         }
//     }
//     const student1 = new Student('ali', 'jodat', 21); // Student {firstName: 'ali', lastName: 'jodat', age: 21}
//     student1.hey(); // hello ali
//     student1.hello(); // Hello...
// };

// // 3. برای لغو کردن متدی که در والد وجود دارد باید یک متد در فرزند با همان نام ایجاد کنیم تا در موقع فراخوانی به سراغ والد نرود
// () => {
//     class Person {
//         constructor(fName, lName) {
//             this.firstName = fName;
//             this.lastName = lName;
//         }
//         hey() {
//             console.log(`hello ${this.firstName}`);
//         }
//     }
//     class Student extends Person {
//         constructor(fName, lName, age) {
//             super(fName, lName);
//             this.age = age;
//         }
//         hey() {
//             console.log('I am inside Student class');
//         }
//     }
//     const student1 = new Student('ali', 'jodat', 21); // Student {firstName: 'ali', lastName: 'jodat', age: 21}
//     student1.hey(); // I am inside Student class => نمی‌رود Person اجرا می‌شود و به سراغ Student در اولین لایه یعنی
// };
229;
// // inheritance between classes (Object.create())
// // در این حالت باید مرحله به مرحله و به صورت زنجیر وار نمونه اولیه ها را انتقال دهیم
// () => {
//     // Prototypes
//     const CarProto = {
//         showMark() {
//             console.log(this.mark);
//         },
//         init(mark) {
//             this.mark = mark;
//         },
//     };
//     const CarProto2 = {
//         showSpeed() {
//             console.log(this.speed);
//         },
//     };
//     // Car
//     // استفاده کنیم spread (...) برای اضافه کردن چند نمونه اولیه باید از
//     const Car = Object.create({ ...CarProto, ...CarProto2 }); // important
//     Car.init = function (mark, speed) {
//         CarProto.init.call(this, mark);
//         this.speed = speed;
//     };
//     // Benz
//     const Benz = Object.create(Car);
//     Benz.init = function (mark, speed, handling) {
//         Car.init.call(this, mark, speed);
//         this.handling = handling;
//     };
//     Benz.init('Benz', 260, 'good');
//     Benz.showSpeed(); // 260
//     Benz.showMark(); // Benz
// };
230;
// // Example for classes
// () => {
//     class Accounts {
//         constructor(owner, currency, pin) {
//             this.owner = owner;
//             this.currency = currency;
//             this.pin = pin;
//             // گاهی اوقات می‌توانیم مانند زیر مقدار دهی اولیه کنیم
//             this.movments = [];
//             this.locale = navigator.language;
//         }
//         deposit(value) {
//             this.movments.push(value);
//         }
//         withraw(value) {
//             this.deposit(-value);
//         }
//         approveLoan(value) {
//             return true;
//         }
//         requestLoan(value) {
//             this.approveLoan(value) && this.deposit(value);
//         }
//     }
//     // testing
//     const Account1 = new Accounts('Alireza Jodat', 'EUR', 1152);
//     Account1.deposit(3_000_000);
//     Account1.withraw(1_500_000);
//     Account1.requestLoan(50_000_000);
//     console.log(Account1); // Accounts {owner: 'Alireza Jodat', currency: 'EUR', pin: 1152, movments: Array(3), locale: 'en-US'}
// };
231;
// // enCapsulation data (Fake)
// // در این روش با گذاشتن _ از ویژگی‌های خود محافظت می‌کنیم
// () => {
//     class Accounts {
//         constructor(owner, currency, pin) {
//             this.owner = owner;
//             this.currency = currency;
//             this._pin = pin;
//             // Protected Property
//             this._movments = [];
//             this.locale = navigator.language;
//         }
//         deposit(value) {
//             this._movments.push(value);
//         }
//         withraw(value) {
//             this.deposit(-value);
//         }
//         // Protected Prototype
//         _approveLoan(value) {
//             return true;
//         }
//         requestLoan(value) {
//             this._approveLoan(value) && this.deposit(value);
//         }
//     }
//     // testing
//     const Account1 = new Accounts('Alireza Jodat', 'EUR', 1152);
//     Account1.deposit(3_000_000);
//     Account1.withraw(1_500_000);
//     Account1.requestLoan(50_000_000);
//     // Protected Property
//     console.log(Account1.movments); // undefined
//     console.log(Account1.pin); // undefined
//     () => console.log(Account1.approveLoan(300)); // ERROR!!!!
// };
232;
// // enCapsulation data
// // 1) Public fields
// () => {
//     class Accounts {
//         // Public fields
//         locale = navigator.language;
//         constructor(owner) {
//             this.owner = owner;
//         }
//     }
//     // testing
//     const Account1 = new Accounts('Alireza Jodat');
//     console.log(Account1.locale);
// };

// // 2) Private fields
// () => {
//     class Accounts {
//         // Public fields
//         locale = navigator.language;
//         // Private fields
//         #movments = [];
//         // مقدار دهی شود از این روش استفاده می‌کنیم constructor هر وقت قرار است از داخل
//         #pin;
//         constructor(owner, pin) {
//             this.owner = owner;
//             this.#pin = pin;
//         }
//         variz(value) {
//             this.#movments.push(value);
//         }
//     }
//     // testing
//     const Account1 = new Accounts('Alireza Jodat', 1152);
//     // console.log(Account1.#movments); // ERROR!!!
//     Account1.variz(300);
//     console.log(Account1); // Accounts {locale: 'en-US', owner: 'Alireza Jodat', #movments: Array(1), #pin: 1152}
// };
// // Public and Private method
// // هستند public تمامی متد‌ها به طور عادی
// // و برای خصوصی کردن آنها نمی‌توان همانند ویژگی‌ها عمل کرد
// // زیرا متد‌ها را تبدیل به ویژگی می‌کنند و از بخش نمونه اولیه خارج می‌سازند
233;
// // Chaining methods
// // نکته مهم این است که در تمامی متدها باید برای قطع نشدن زنجیره خود کلاس را برگردانیم
// () => {
//     class Accounts {
//         #pin;
//         #movments = [];
//         constructor(owner, currency, pin) {
//             this.owner = owner;
//             this.currency = currency;
//             this.#pin = pin;
//             this.locale = navigator.language;
//         }
//         deposit(value) {
//             this.#movments.push(value);
//             return this;
//         }
//         withraw(value) {
//             this.deposit(-value);
//             return this;
//         }
//         approveLoan(value) {
//             return true;
//         }
//         requestLoan(value) {
//             this.approveLoan(value) && this.deposit(value);
//             return this;
//         }
//     }
//     // testing
//     const Account1 = new Accounts('Alireza Jodat', 'EUR', 1152);
//     Account1.deposit(3_000_000).withraw(1_500_000).requestLoan(50_000_000);
//     console.log(Account1); // Accounts {owner: 'Alireza Jodat', currency: 'EUR', locale: 'en-US', #pin: 1152, #movments: Array(3)}
// };
235;
// // coding challenge
// () => {
//     // Car class
//     class Car {
//         constructor(make, speed) {
//             this.make = make;
//             this.speed = speed;
//         }
//         changeSpeedUnit() {
//             console.log(
//                 Intl.NumberFormat('en', {
//                     style: 'unit',
//                     unit: 'mile-per-hour',
//                 }).format(Math.round(this.speed / 1.6))
//             );

//             return this;
//         }
//     }

//     // EV class
//     class EV extends Car {
//         // private
//         #charge;
//         constructor(make, speed, charge) {
//             // instance Car class
//             super(make, speed);
//             this.#charge = charge;
//         }
//         showCharge() {
//             console.log(
//                 Intl.NumberFormat('DE', {
//                     style: 'unit',
//                     unit: 'percent',
//                 }).format(this.#charge)
//             );
//             return this;
//         }
//     }

//     // New EV car
//     const Benz = new EV('Benz', 120, 29);

//     // call method
//     Benz.changeSpeedUnit() // 75 mph
//         .showCharge(); // 29 %
// };
240;
// // geolocation
// // در صورت موفقیت آمیز بودن درخواست موقعیت مکانی تابع اول اجرا می‌شود و در غیر اینصورت تابع دوم اجرا می‌شود
// () => {
//     navigator.geolocation.getCurrentPosition(
//         function (position) {
//             const { latitude, longitude } = position.coords;
//             console.log(latitude, longitude); // 35.7293801 51.8634809
//         },
//         function () {
//             console.log('ERROR!!!');
//         }
//     );
// };
267;
// // Promise
// // ساختگی ایجاد کنیم Promise در ادامه میخواهیم یک
// // را در دو خط متوالی قرار دهیم Promise , setTimeOut در حالت کلی اگر یک
// // ها setTimeOut ها انجام میشوند و سپس microTask همانطور که میدانیم اول

// // 1. به صورت زنجیر وار نوشتن
// () => {
//    let check = false;
//    const myPromise = new Promise((resolve, reject) => {
//       check ? resolve('I am S') : reject(new Error('I have a problem...'));
//    });
//    // consume promise
//    myPromise
//       .then(res => console.log(res))
//       .catch(err => console.log(err.message));
// };

// // 2. به صورت جدا جدا
// () => {
//    let check = false;
//    check && Promise.resolve('successfull...').then(res => console.log(res));
//    !check &&
//       Promise.reject(new Error('unSuccsessfull...')).catch(err =>
//          console.log(err.message)
//       );
// };
268;
// // getting the geoLocation with Promise
// () => {
//    function getPosition() {
//       return new Promise((resolve, reject) => {
//          navigator.geolocation.getCurrentPosition(resolve, reject);
//       });
//    }
//    getPosition()
//       .then(pos => console.log(pos))
//       .catch(err => console.log(err.message));
// };

// // Finding my location by geolocation and Api of geocode
// () => {
//    function getLocation() {
//       return new Promise((resolve, reject) =>
//          navigator.geolocation.getCurrentPosition(resolve, reject)
//       );
//    }

//    function showCountry() {
//       getLocation()
//          .then(pos => {
//             const { latitude: lat, longitude: lng } = pos.coords;
//             return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//          })
//          .then(res => {
//             if (!res.ok) throw new Error(`Could not found (${res.status})`);
//             res.json();
//          })
//          .then(data => console.log(data))
//          .catch(err => console.log(err.message));
//    }

//    showCountry();
// };
269;
// // Codeing challenge 2
// // Management the loading of images by promise
// () => {
//    function createImage(imgSrc) {
//       return new Promise((resolve, reject) => {
//          const img = document.createElement('img');
//          img.src = imgSrc;
//          img.addEventListener('load', function () {
//             document.body.append(img);
//             resolve(this);
//          });
//          img.addEventListener('error', () =>
//             reject(new Error(`Image not found.`))
//          );
//       });
//    }

//    function wait(sec) {
//       return new Promise(resolve => setTimeout(resolve, sec * 1_000));
//    }

//    let currImg;
//    createImage('Images/img-1.jpg')
//       .then(img => {
//          currImg = img;
//          return wait(1);
//       })
//       .then(() => {
//          currImg.style.display = 'none';
//          return createImage('Images/img-2.jpg');
//       })
//       .then(img => {
//          currImg = img;
//          return wait(2);
//       })
//       .then(() => {
//          currImg.style.display = 'none';
//          return createImage('Images/img-3.jpg');
//       })
//       .then(img => {
//          currImg = img;
//          return wait(3);
//       })
//       .then(() => (currImg.style.display = 'none'))
//       .catch(err => console.log(err.message));
// };
270;
// // Async and Await

// // Simple learning
// () => {
//    async function getCountry(country) {
//       const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//       const data = await res.json();
//       console.log(data); // 2
//       console.log('seconde'); // 3
//    }
//    getCountry('usa');
//    console.log('first'); // 1
// };

// // More advanced learning
// () => {
//    // get country
//    async function getCountry(country) {
//       const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//       return await res.json();
//    }

//    // find my location
//    function getLoc() {
//       return new Promise((resolve, reject) =>
//          navigator.geolocation.getCurrentPosition(resolve, () => reject('a'))
//       );
//    }

//    // Show my location and country
//    async function showResult() {
//       const { coords } = await getLoc();
//       const { latitude: lat, longitude: lng } = coords;
//       console.log(lat, lng); // 1

//       const [{ name }] = await getCountry('usa');
//       console.log(name.common); // 2
//    }

//    showResult();
// };
271;
// // try and catch
// // دسترسی دارد error به تمامی

// // simple learning
// () => {
//    try {
//       let y = 0;
//       const x = 5;
//       x = 1;
//    } catch (err) {
//       console.log(err.message);
//    }
// };

// // More advanced learning
// () => {
//    // get country
//    async function getCountry(country) {
//       const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//       if (!res.ok)
//          throw new Error(`Could not found your country. (${res.status})`);
//       return await res.json();
//    }
//    // find my location
//    const getLoc = () =>
//       new Promise((resolve, reject) =>
//          navigator.geolocation.getCurrentPosition(
//             resolve,
//             reject.bind(new Error(`Could not find your location.`))
//          )
//       );
//    // Show my location and country
//    async function showResult() {
//       try {
//          const { coords } = await getLoc();
//          const { latitude: lat, longitude: lng } = coords;
//          console.log(lat, lng); // 1

//          const [{ name }] = await getCountry('usa');
//          console.log(name.common); // 2
//       } catch (err) {
//          console.log(err.message);
//       }
//    }
//    // call func
//    showResult();
// };
272;
// // Returning value from async function
// // است async اگر از روش مدرن استفاده می‌کنید حتما باید از تابعی استفاده کنید که

// // Old way
// () => {
//    // get country
//    async function getCountry(country) {
//       const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//       if (!res.ok)
//          throw new Error(`Could not found your country. (${res.status})`);
//       return await res.json();
//    }
//    // find my location
//    const getLoc = () =>
//       new Promise((resolve, reject) =>
//          navigator.geolocation.getCurrentPosition(
//             resolve,
//             reject.bind(new Error(`Could not find your location.`))
//          )
//       );
//    // Show my location and country
//    async function showResult() {
//       try {
//          const { coords } = await getLoc();
//          const { latitude: lat, longitude: lng } = coords;
//          const [{ name }] = await getCountry('usa');
//          return `my loc in: [${lat}, ${lng}] and my country is: ${name.common}`;
//       } catch (err) {
//          throw err.message;
//       }
//    }
//    // call func
//    // Old way!!!!!!!
//    // اگر میخواهید ترتیب اجرای کد‌ها حفظ شود همانند زیر عمل کنید
//    console.log('1');
//    showResult()
//       .then(res => console.log(`2 ${res}`))
//       .catch(err => console.log(`2 ${err}`))
//       .finally(() => {
//          console.log('3');
//       });
// };

// // new way
// () => {
//    // get country
//    async function getCountry(country) {
//       const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//       if (!res.ok)
//          throw new Error(`Could not found your country. (${res.status})`);
//       return await res.json();
//    }
//    // find my location
//    const getLoc = () =>
//       new Promise((resolve, reject) =>
//          navigator.geolocation.getCurrentPosition(
//             resolve,
//             reject.bind(new Error(`Could not find your location.`))
//          )
//       );
//    // Show my location and country
//    async function showResult() {
//       try {
//          const { coords } = await getLoc();
//          const { latitude: lat, longitude: lng } = coords;
//          const [{ name }] = await getCountry('usa');
//          return `my loc in: [${lat}, ${lng}] and my country is: ${name.common}`;
//       } catch (err) {
//          throw err.message;
//       }
//    }
//    // call func
//    // new and best way!!!!!!!
//    // اگر میخواهید ترتیب اجرای کد‌ها حفظ شود همانند زیر عمل کنید
//    (async () => {
//       try {
//          console.log('1');
//          console.log(`2 ${await showResult()}`);
//          console.log('3');
//       } catch (err) {
//          console.log(err);
//       }
//    })();
// };
273;
// // Promise.All
// // نباشد میتوان از این روش استفاده کرد async هر‌گاه که لازم به اجرای

// // getting 3 countries
// () => {
//    const URL = country => `https://restcountries.com/v3.1/name/${country}`;
//    async function getJson(route) {
//       const res = await fetch(URL(route));
//       if (!res.ok) throw new Error('the country name is wrong!!!');
//       return await res.json();
//    }
//    async function get3Countries() {
//       try {
//          const res = await Promise.all([
//             getJson('usa'),
//             getJson('australia'),
//             getJson('germany'),
//          ]);
//          return res.map(country => country[0].name.common);
//       } catch (err) {
//          throw err.message;
//       }
//    }
//    (async () => {
//       try {
//          console.log(await get3Countries());
//       } catch (err) {
//          console.log(err);
//       }
//    })();
// };
274;
// // Promise.race
// // رفتار می‌کنیم Promise.all همانند Promise در این نوع از
// // بسته میشود Promise اما تفاوت های آنها در این است که هر واکشی ای که زودتر انجام شود همان مقدار برگردانده میشود و
// // response و فرقی ندارد که در این مورد با خطا مواجه شود یا
// () => {
//    // Create URL and Response
//    function getJson(country) {
//       // Create URL
//       const URL = `https://restcountries.com/v3.1/name/${country}`;
//       // Create Response
//       return async () => {
//          const res = await fetch(URL);
//          if (!res.ok) throw new Error('the country name is wrong!!!');
//          return await res.json();
//       };
//    }
//    // Promise Race Function
//    async function promiseRace() {
//       try {
//          const res = await Promise.race([
//             getJson('usa')(),
//             getJson('italy')(),
//             getJson('germany')(),
//          ]);
//          return res;
//       } catch (err) {
//          return err.message;
//       }
//    }
//    // Call Promise Race
//    (async function () {
//       try {
//          console.log(await promiseRace());
//       } catch (err) {
//          console.log(err);
//       }
//    })();
// };

// // setTimeout ایجاد خطا به وسیله
// // به عنوان مثال اگر کاربران ما اینترنت ضعیفی داشته باشند
// // های غیر ضروری را رد کنیم Promise با این کار می‌توانیم
// () => {
//    // Create URL and Response
//    function getJson(country) {
//       // Create URL
//       const URL = `https://restcountries.com/v3.1/name/${country}`;
//       // Create Response
//       return async () => {
//          const res = await fetch(URL);
//          if (!res.ok) throw new Error('the country name is wrong!!!');
//          return await res.json();
//       };
//    }
//    // Create Error with setTimeout
//    async function fakeError(sec) {
//       return await new Promise((_, reject) => {
//          setTimeout(() => reject(new Error('Fake Error!!!')), sec * 1000);
//       });
//    }
//    // Promise Race Function
//    async function promiseRace() {
//       try {
//          const res = await Promise.race([getJson('usa')(), fakeError(1)]);
//          return res;
//       } catch (err) {
//          return err.message;
//       }
//    }
//    // Call Promise Race
//    (async function () {
//       try {
//          console.log(await promiseRace());
//       } catch (err) {
//          console.log(err);
//       }
//    })();
// };

// // Promise.allSettled
// // رفتار خواهیم کرد Promise.all همانند Promise در این
// // های دیگر متوقف نمی‌شوند Promise این است که در صورت وجود خطا Promise.all اما تفاوت آن با
// () => {
//    // Create URL and Response
//    function getJson(country) {
//       // Create URL
//       const URL = `https://restcountries.com/v3.1/name/${country}`;
//       // Create Response
//       return async () => {
//          const res = await fetch(URL);
//          if (!res.ok) throw new Error('the country name is wrong!!!');
//          return await res.json();
//       };
//    }
//    // Promise allSettled Function
//    async function promiseAllSattled() {
//       try {
//          const res = await Promise.allSettled([
//             getJson('usa')(),
//             getJson('italyjkag')(),
//             getJson('germanyuiibkb')(),
//          ]);
//          return res;
//       } catch (err) {
//          return err.message;
//       }
//    }
//    // Call Promise allSattled
//    (async function () {
//       try {
//          console.log(await promiseAllSattled()); // fulfilled و یک عدد reject دو عدد
//       } catch (err) {
//          console.log(err);
//       }
//    })();
// };

// // Promise.any
// // دو حالت ممکن است پیش بیاید Promise در این
// // موفق برگردانده میشود Promise مورد اول اینکه یا اولین
// // به نمایش گذاشته میشود All promises were rejected ها مردود باشند پیغام Promise یا اگر تمام
// () => {
//    // Create URL and Response
//    function getJson(country) {
//       // Create URL
//       const URL = `https://restcountries.com/v3.1/name/${country}`;
//       // Create Response
//       return async () => {
//          const res = await fetch(URL);
//          if (!res.ok) throw new Error('the country name is wrong!!!');
//          return await res.json();
//       };
//    }
//    // Promise any Function
//    async function promiseAny() {
//       try {
//          const promises = [
//             getJson('italyas')(),
//             getJson('usaas')(),
//             getJson('germanyas')(),
//          ];
//          const res = await Promise.any(promises);
//          return res;
//       } catch (err) {
//          return err.message;
//       }
//    }
//    // Call Promise any
//    (async function () {
//       try {
//          console.log(await promiseAny()); // All promises were rejected
//       } catch (err) {
//          console.log(err);
//       }
//    })();
// };
275;
// // Codeing Challenge
// // Load image

// // Refactoring the Loading img of codeing challenge
// () => {
//    // Create images
//    async function createImage(imgSrc) {
//       return await new Promise((resolve, reject) => {
//          const img = document.createElement('img');
//          img.src = imgSrc;
//          // successfull load
//          img.addEventListener('load', function () {
//             document.body.append(img);
//             resolve(this);
//          });
//          // unsuccessfull load
//          img.addEventListener('error', () =>
//             reject(new Error(`Image not found.`))
//          );
//       });
//    }
//    // wait function
//    const wait = async sec =>
//       await new Promise(resolve => setTimeout(resolve, sec * 1_000));
//    // Loading images function
//    async function loadingImages() {
//       try {
//          let currImg;
//          // Image 1
//          currImg = await createImage('Images/img-1.jpg');
//          await wait(2);
//          currImg.style.display = 'none';
//          // Image 2
//          currImg = await createImage('Images/img-2.jpg');
//          await wait(2);
//          currImg.style.display = 'none';
//          // Image 3
//          currImg = await createImage('Images/img-3.jpg');
//          await wait(2);
//          currImg.style.display = 'none';
//       } catch (err) {
//          console.log(err.message);
//       }
//    }
//    // Call Loading Images
//    (async () => await loadingImages())();
// };

// // Load All image
// // استفاده کنیم Promise.all باید از promise برای خارج کردن نتیجه از حالت
// () => {
//    // Create images
//    async function createImage(imgSrc) {
//       return await new Promise((resolve, reject) => {
//          const img = document.createElement('img');
//          img.src = imgSrc;
//          // successfull load
//          img.addEventListener('load', function () {
//             document.body.append(img);
//             resolve(this);
//          });
//          // unsuccessfull load
//          img.addEventListener('error', () =>
//             reject(new Error(`Image not found.`))
//          );
//       });
//    }
//    // load All Img function
//    async function loadAllImg() {
//       try {
//          // prettier-ignore
//          const imgArr = ['Images/img-1.jpg', 'Images/img-2.jpg', 'Images/img-3.jpg'];
//          const allPromise = imgArr.map(
//             async imgSrc => await createImage(imgSrc)
//          );
//          const allImg = await Promise.all(allPromise);
//          allImg.forEach(img => (img.style.width = '500px'));
//       } catch (err) {
//          console.log(err.message);
//       }
//    }
//    loadAllImg();
// };
280;
// // Import and  Export
// // اگر پروژه ای بدون فریم ورک دارید برای استفاده از این قابلیت باید
// // را انتخاب کنیم type="module" خود HTML در فایل

// // simple example for the import of module
// import { cardCl } from './cardC.js';
// // simple example for the export of module
// export function show() {
//    console.log('show');
// }

// // بگذاریم باید اینگونه بنویسیم import , export اگر میخواهیم نام دلخواه برای موارد
// // for import
// import { cardCl as myCard } from './cardC.js';
// // for Export
// function show() {
//    console.log('show');
// }
// export { show as showEl };
// // کردن import و در هنگام
// import { showEl } from './cardC.js';

// // شده export کردن تمامی موارد import استفاده از * برای
// import * as allFunctions from './cardC.js';
// // how to use?
// allFunctions.addToCard(1, 'clothes');

// // استفاده کرد export default کنیم میتوان از export هرگاه خواستیم تنها یک مقدار را
// export default show;
// // how to import?
// // بدون {} باید بنویسیم
// import show from './cardC.js';

// // export , export default استفاده ترکیبی از
// import show, { showEl } from './cardC.js';

// // ها مقدار های شیء و آرایه بروزرسانی میشوند module در تمامی
281;
// // به تنهایی در کد await استفاده از
// // از کد باشد level نکته مهم این است که باید در بالاترین
// // استفاده میشود asyn در غیر اینصورت باید درون تابعی باشد که در آن از
// // باشد type="module" برای اینکار حتما باید فایل شما دارای

// // مثال اول
// console.log('start fetching...');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// const users = await res.json();
// console.log(users);
// console.log('end fetching...');

// // مثال دوم
// console.log('---- seconde example ----');
// async function getLastUsers() {
//    const res = await fetch('https://jsonplaceholder.typicode.com/users');
//    const users = await res.json();
//    return { id: users.at(-1).name, name: users.at(-1).name };
// }
// console.log(await getLastUsers());
// console.log('end fetching...');

// // در بالاترین لول از کد میتواند باعث مسدود شدن ماژول های دیگر نیز شود await و در آخر استفاده از
282;
// // راهی برای فرار از متغیر های گلوبال
// // کنیم export و سپس یاد خواهیم گرفت که چگونه آنها را
// const cardMethods = (() => {
//    const cardQ = 12;
//    function showCard() {
//       console.log('el');
//    }
//    return { cardQ, showCard };
// })();
// cardMethods.showCard(); // el
// console.log(cardMethods.cardQ); // 12
// export { cardMethods }; // exported
284;
