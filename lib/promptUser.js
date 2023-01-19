const inquirer = require('inquirer');
const createFile = require('./createFile.js');

function cyclePrompt() {
  console.log('--------Welcome to the file gen app!--------');
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'choice',
      message: 'Would you like to generate a file?'
    }
  ]).then(data => {
    if (data.choice) {
      return promptUser();
    }

    console.log('Thanks for using our app!\n');
  });
}


function promptUser() {
  console.log('---------------');

  inquirer.prompt([
    {
      name: 'file_name',
      message: 'What would you like the file name to be?'
    },
    {
      name: 'content',
      message: 'What content would you like to add to the file?'
    }
  ]).then(createFile)
    .then(cyclePrompt);
}

module.exports = {
  cyclePrompt: cyclePrompt,
  promptUser: promptUser
};