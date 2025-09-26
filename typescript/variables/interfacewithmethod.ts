//interface with method
 interface animal{
    name:string;
    sound:()=>void;
    
}
let Dog:animal={
    name:"dog",
    sound:()=>console.log("bow bow"),

};
Dog.sound();




















