// ===========================
// Main Entry Point
// ===========================
import { showProjectBanner, helloWorld } from "../getting started/gettingstarted";
import { checkEligibility, showLoopDemo } from "../basicsoftypescript/basicsoftypescript";
import { calcBonus, greetEmployee, taskSummary, generateTaskReport} from "../functionsArray/functionarray";

// Run Module 1
showProjectBanner();
helloWorld();

// Run Module 2
checkEligibility();
showLoopDemo();

// Run Module 3
console.log("\n--- Functions Demo ---");
console.log("Bonus:",calcBonus(50000,4));
console.log(greetEmployee("Alice", "QA Lead"));

taskSummary();
console.log(generateTaskReport("Alice", "All tasks executed successfully."));
