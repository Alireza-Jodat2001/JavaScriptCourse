29
    switch (key) {
        case "ali":
        case "reza":
            console.log("first");
            console.log("second");
            break;
        default:
            break;
    }
31
    const ali = 12 > 3 ? console.log("first") : console.log("second");
    12 > 3 ? console.log("first") : console.log("second");
34
    "jonas.io for support javaScript in browser"
36
    "use strict"; /* on first line in javaScript pages */ 
38 
    // function expression
    const func = function (ali) {
        return ali;
    }
    func("reza");
39
    // arrow function
    const func1 = ali => console.log("first");
    const func2 = (ali , reza) => {
        return ali;
    }
    func("reza");
44
    const Arr = new Array('reza', 22, true)
    console.log(Arr[Arr.length - 1]);
    Arr[0] = 'mohsen'

    const arr2 = [2 - 1, Arr, 'var']

    const calc = birth => 2023 - birth
    const arr3 = [calc(1991), calc(2000), calc(Arr[Arr.length - 2])]    
45
    // array push method
    Arr.push('alireza') /* add to last array */
    
    const len = Arr.push('ali') /* return arr.length */

    // array unshift method
    Arr.unshift("mehran") /* add to first array */

    // array remove last element method
    Arr.pop() /* remove to last element in array */
    
    const popped = Arr.pop() /* return last element */
    Arr.unshift(popped) 
    
    // array remove first element method
    Arr.shift() /* remove to first element in array */
    const firstEl = Arr.shift() /* return first element */

    // indexOf array method
    const mehArr = [0, 1, 'ali']
    console.log(mehArr.indexOf('ali')); /* if not found element -1 returned */

    // includes array method
    console.log(Arr.includes("john")); /* return true or false */
48
    const aliObj = {
        friends: ['bezi', 'mehran'],
    }
49
    const obj = {
        firstName: "alireza",
        lastName: "jodat",
        fre: ["bezi", "ali"]
    }
    console.log(obj.firstName);

    // second whay...
    const concatName = "Name"
    console.log(obj[`first${concatName}`]); /* better than for oprating */
    console.log(obj[`last${concatName}`]); /* better than for oprating */

    const prompt1 = prompt('what do you think?')
    console.log(obj[prompt1]);

    // how to add
    obj.friend = "ali"
    obj["friend"] = "ali"

    // how to accsses to array in 
    console.log(`${obj.fre[0]} - ${obj.fre.length}`);
50
    const newObj = {
        firstName: "ali",
        func1: function (params) {
            // for create new item in object
            this.age = 19;  

            console.log(this.firstName);
        },
        func2: () => console.log("first")
    }
    console.log(newObj.func1(19));
    /* second way */
    console.log(newObj["func1"](19));
54
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = i;
        
        // second way
        arr.push(10 - i)
    }

    const arr4 = ['ali', 2, true, 'mehran']
    for (let i = 0; i < arr4.length; i++) {
        if (typeof arr4[i] !== "string") continue; /* jump to next step by continue */
        console.log(arr4[i]);
    }
    for (let i = 0; i < arr4.length; i++) {
        if (typeof arr4[i] !== "number") break; /* console.log is empty (end for loop) */
        console.log(arr4[i]);
    }
56
    let random = Math.trunc(Math.random() * 7) + 1
    while (random !== 6) {
        console.log("first")
        random = Math.trunc(Math.random() * 7) + 1
    }
63
    // how to use prettier customize
    // how to use user snippets
    // intro yourself extentions
64
    // how to install live server by node js
    // npm install live-server -g