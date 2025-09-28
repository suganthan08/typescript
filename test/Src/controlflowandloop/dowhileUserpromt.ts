//DOWHILEUSERPROMT
const input=["apple","banana","exit"];
let index=0;
let userInput: string;

do{
    userInput = input[index++] ?? "";
    console.log("user typed:",userInput);
}while(userInput.toLowerCase()!=="exit");

console.log("Exited loop");