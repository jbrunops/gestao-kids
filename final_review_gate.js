// final_review_gate.js
const readline = require('readline');

console.log("--- FINAL REVIEW GATE ACTIVE ---");
console.log("AI has completed its primary actions. Awaiting your review or further sub-prompts.");
console.log("Type your sub-prompt or 'TASK_COMPLETE' to allow AI to conclude.");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question("REVIEW_GATE_AWAITING_INPUT: ", (input) => {
    const userInput = input.trim();
    
    if (userInput.toUpperCase() === 'TASK_COMPLETE') {
      console.log("--- REVIEW GATE: USER CONFIRMED TASK COMPLETE ---");
      rl.close();
    } else if (userInput) {
      console.log(`USER_REVIEW_SUB_PROMPT: ${userInput}`);
      promptUser(); // Continue waiting for more input
    } else {
      promptUser(); // Empty input, continue waiting
    }
  });
}

rl.on('close', () => {
  console.log("--- FINAL REVIEW GATE SCRIPT EXITED ---");
  process.exit(0);
});

promptUser();
