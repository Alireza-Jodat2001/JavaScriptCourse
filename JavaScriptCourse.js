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