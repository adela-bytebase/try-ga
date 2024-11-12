const core = require('@actions/core');
const fs = require('fs');

async function run() {
  try {
    // Get inputs
    const name = core.getInput('name');
    const time = new Date().toISOString();

    // Create greeting
    console.log(`Hello, ${name}!`);

    // Create output file
    const outputContent = `Hello from Custom GitHub Action!\nGreeted: ${name}\nRun at: ${time}`;
    fs.writeFileSync('output.txt', outputContent);

    // Set outputs
    core.setOutput('time', time);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run(); 