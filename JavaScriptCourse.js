29
    // switch (key) {
    //     case "ali":
    //     case "reza":
    //         console.log("first");
    //         console.log("second");
    //         break;
    //     default:
    //         break;
    // }
31
    // const ali = 12 > 3 ? console.log("first") : console.log("second");
    // 12 > 3 ? console.log("first") : console.log("second");
34
    // "jonas.io for support javaScript in browser"
36
    // "use strict"; /* on first line in javaScript pages */ 
38 
    // function expression
    // const func = function (ali) {
    //     return ali;
    // }
    // func("reza");
39
    // arrow function
    // const func1 = ali => console.log("first");
    // const func2 = (ali , reza) => {
    //     return ali;
    // }
    // func("reza");
44
    // const Arr = new Array('reza', 22, true)
    // console.log(Arr[Arr.length - 1]);
    // Arr[0] = 'mohsen'

    // const arr2 = [2 - 1, Arr, 'var']

    // const calc = birth => 2023 - birth
    // const arr3 = [calc(1991), calc(2000), calc(Arr[Arr.length - 2])]    
45
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
48
    // const aliObj = {
    //     friends: ['bezi', 'mehran'],
    // }
49
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
50
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
54
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
56
    // let random = Math.trunc(Math.random() * 7) + 1
    // while (random !== 6) {
    //     console.log("first")
    //     random = Math.trunc(Math.random() * 7) + 1
    // }
63
    // how to use prettier customize
    // how to use user snippets
    // intro yourself extentions
64
    // how to install live server by node js
    // npm install live-server -g
65
    // codewars.com for many challanges javaScript
67
    // how to find min and max in array on stackoverflow website
    // continue keywords in to find min and max (arr[i] !== "string" && continue)
    // concat method for merge 2 array (there is solution on stackoverflow website) 

    // concat method for merge 2 array
    // const arrNew = arr3.concat(arr2)
    // console.log(arrNew);
69
    // intro new console
    // console.error(calc())
    // console.warn(calc())

    // how to make breakpoint in console in chrome (sources tab) for debugging
70
    // let str = "... "
    // const array = [1, 2, 3]
    // for (let i = 0; i < array.length; i++) {
    //     str += `${array[i]} in ${i} day`       
    // }
78
    // console.log(document.querySelector(".div").textContent)
    // document.querySelector(".div").textContent = "ali"   
81 
    // document.querySelector(".div").addEventListener("click", function () {
    //     console.log("first");
    // })
86
    // const innerHtml = message => document.querySelector("message").textContent = message
    // innerHtml("you lost...") 
88 
    // const btns = document.querySelectorAll("btns")
    // for (let i = 0; i < btns.length; i++) btns[i].addEventListener("click", () => {
    //     document.querySelector("modal").classList.remove("hidden")
    // })

    // const closeModal= () => document.querySelector("modal").classList.add("hidden")    
    // btnClose.addEventListener("click", closeModal)
89
    // document.addEventListener("keydown", (event) => {
    //     event.key === "Escape" && !modal.classList.contains("hidden")
    //         ? closeModal()
    //         : console.log("first")
    // })
91
    // bntRoll.addEventListener("click", () => {
    //     const dice = Math.trunc(Math.random() * 6) + 1
    //     diceImg.src = `dice-${dice}.png`
    // })
92 
    // let activePlayer = 0
    // document.querySelector(`curren--${activePlayer}`).textContent = 0
    // activePlayer = activePlayer === 0 ? 1 : 0

    // second way
    // activePlayer = !activePlayer ? 1 : 0

    // player0El.classList.toggle("player-active")
    // player1El.classList.toggle("player-active")
94
    // let t1, t2, t3;
99
    // arrow function have not (arguments object and this keyword)
101
    // const calcAge = () => {
    //     console.log(`${firstName}`) 
    // }
    // const firstName = "ali"
    // calcAge()

    // let and const (block)
    // var (global)
103
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
105
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
    
106
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
107
    // const me = {
    //     age: 12
    // }
    // const friend = me
    // friend.age = 30
    // console.log(me.age) /* age => 30 */ 
    // console.log(friend.age) /* age => 30 */
108
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
111
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
112
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
113
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
 114
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
115
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
116
    // nullish values null and undefined (not a 0 and "")
    // با دیدن مقدار نال یا آندیفایند به سراغ بعدی میرود
    // ولی اگر نال یا آندیفایند نبود همان را برمیگرداند

    // console.log(0 ?? 10) /* 0 */
    // console.log("" ?? 10) /* "" */
    // console.log(undefined ?? 10) /* 10 */
    // console.log(null ?? 10) /* 10 */
117
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
118
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
119
    // forOf loop (Iterables)
    // const arr = [1, 2, "ali"]
    // for (const item of arr) console.log(item) /* 1 2 "ali" */
    // first way
    // for (const item of arr.entries()) console.log(item) /* [0, 1] [1, 2] [2, "ali"] ... [index, values] */
    // second way
    // const newArr = [...arr.entries()]
    // console.log(newArr) /* [0, 1] [1, 2] [2, "ali"] ... [index, values] */
    // console.log(newArr[2][1]) /* "ali" */
120
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
121
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
122
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
123
    "5:48"