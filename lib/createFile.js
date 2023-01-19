const fs = require('fs').promises;

function createFile(data) {
  return fs.writeFile(data.file_name + '.txt', data.content)
    .then(() => {
      console.log(`You have successfully created the ${data.file_name} file`);
      console.log(`The contents of the file are:\n${data.content}`);
    });
}

module.exports = createFile;