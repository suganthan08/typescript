class Basetest{
    private _browser:string="chrome";
    public get browser():string{
        return this._browser
    }
    public set browser(value:string){
        if(["chrome","edge","firefox"].includes(value)){
            this._browser=value;
        }
        else{
            throw new Error("invalid data");
        }
    }
    public launch(){
        console.log(`launching ${this._browser}browser`);
    }
}
const test=new Basetest;
test.launch();
test.browser="firefox";
test.launch();