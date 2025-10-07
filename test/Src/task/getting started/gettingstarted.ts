import data from './gettingstartd.json' 

export function showProjectBanner(): void {
    const PROJECT_NAME:string="enterprise automation system";
    const VERSION:string="1.0.0";
    const AUTHOR:string="QA team";

    console.log("===============================");
    console.log(`${PROJECT_NAME} | v${VERSION}`);
    console.log(`author:${AUTHOR}`);
    console.log("started:"+ new Date().toLocaleDateString());
    console.log("===================================\n");
}

//SIMPLE HELLO WORLD
export function helloWorld(): void {
    console.log("Hello,world! typescript environment is working.\n");
}