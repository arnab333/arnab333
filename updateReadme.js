// Include node fs (file stream) and https modules
const fs = require('fs');

function getTotalYears() {
    const joinDate = new Date(2019, 8, 9);
    const currentDate = new Date();

    const startMonth = joinDate.getFullYear() * 12 + joinDate.getMonth();
    const endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
    const monthInterval = endMonth - startMonth;

    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;

    return yearsOfExperience + '.' + monthsOfExperience;
}

const totalYears = getTotalYears();

function readWriteAsync() {
    // Update README using FS
    fs.readFile('README.md', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }

        const stringToInsert = `I have around ${totalYears} years of experience`;

        const regExp = new RegExp(
            `I'm Arnab — a backend engineer with ${(totalYears - 0.1).toFixed(1)}+ years of experience building high-performance, cloud-native systems.`
        ); // regex pattern string

        const updatedMd = data.replace(regExp, stringToInsert);

        // Write the new README
        fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
            if (err) {
                throw err;
            }

            console.log('README update complete.');
        });
    });
}

// Call the function
readWriteAsync();
