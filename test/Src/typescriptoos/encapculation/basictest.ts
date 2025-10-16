class loginTest{
    private userName:string;
    private passWord:string;

    constructor(userName:string,passWord:string){
        this.userName=userName;
        this.passWord=passWord;
    }
    public setuserName(name:string){
        this.userName=name;
    }
    public getuserName():string{
        return this.userName;
    }
    public performlogin():void{
        console.log(`loging in with ${this.userName}and****`);
    }
}
const test=new loginTest("admin","admin@123");
test.performlogin();
test.setuserName("test_user");
console.log("update username",test.getuserName());