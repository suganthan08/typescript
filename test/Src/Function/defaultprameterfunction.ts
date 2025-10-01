// default pramerter function
function greet(name:string="guest"):string{
    return`hello,${name}`;
}
console.log(greet());
console.log(greet("suganthan"));


function greetUser(name:string ="guest"):string{
    return`welcome,${name}!`;
}
console.log("4.",greetUser());
console.log("4.",greetUser("suganthan"));