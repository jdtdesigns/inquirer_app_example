const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    name: 'file_name',
    message: 'What would you like the file name to be?'
  },
  {
    name: 'content',
    message: 'What content would you like to add to the file?'
  }
]).then(data => {
  fs.writeFile(data.file_name + '.txt', data.content, (err) => {
    if (err) return console.log(err);

    console.log(`You have successfully created the ${data.file_name} file`);
    console.log(`The contents of the file are:\n${data.content}`);
  });
});