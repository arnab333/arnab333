// Include node fs (file stream) and https modules
const fs = require('fs');

const totalYears = (
  (new Date() - new Date(2019, 8, 9)) /
  (60 * 60 * 24 * 1000) /
  365
).toFixed(1);

function readWriteAsync() {
  // Update README using FS
  fs.readFile('README.md', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }

    const stringToInsert = `I have around ${totalYears} years of experience`;

    const updatedMd = data.replace(
      /I have around 3 years of experience/g,
      stringToInsert
    );

    // Write the new README
    fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
      if (err) {
        throw err;
      }

      console.log('README update complete.', updatedMd);
    });
  });
}

// Call the function
readWriteAsync();
