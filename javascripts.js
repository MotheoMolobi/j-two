//Question 1
let num = a => a +7;

console.log(num(8));

//Question 2
let multiply = (a ,b) => a *b;

console.log(multiply(6 ,7));

//Question 3
function cap (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(cap("mOTHEO"));

//Question 4
function lastletter (str) {
    return str.slice(-1);
}

console.log(lastletter("abcd"));
