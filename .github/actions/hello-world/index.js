const core = require('@actions/core');

async function run() {
  try {
    // Get inputs
    const name = core.getInput('name');
    const time = new Date().toISOString();

    // Create greeting
    console.log(`Hello, ${name}!`);

    // Set outputs
    core.setOutput('time', time);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run(); 