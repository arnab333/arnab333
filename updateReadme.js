const fs = require('fs');

function getTotalYears() {
    const joinDate = new Date(2019, 8, 9); // September 9, 2019
    const currentDate = new Date();

    const startMonth = joinDate.getFullYear() * 12 + joinDate.getMonth();
    const endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
    const monthInterval = endMonth - startMonth;

    const years = Math.floor(monthInterval / 12);
    const months = monthInterval % 12;
    const decimal = months / 12;

    const total = years + decimal;
    return decimal > 0.5 ? Math.ceil(total) : parseFloat((years + decimal).toFixed(1));
}

function updateReadme() {
    const totalYears = getTotalYears();
    const readmePath = 'README.md';

    fs.readFile(readmePath, 'utf-8', (err, data) => {
        if (err) throw err;

        const newLine = `**Software Engineer 2 @ Autodesk** | Building cloud-native systems | ${totalYears}+ years of turning ideas into code`;

        const regex = /\*\*Software Engineer 2 @ Autodesk\*\* \| Building cloud-native systems \| \d+(\.\d+)?\+ years of turning ideas into code/;

        if (!regex.test(data)) {
            console.warn('Pattern not found in README.md. No changes made.');
            return;
        }

        const updatedData = data.replace(regex, newLine);

        fs.writeFile(readmePath, updatedData, 'utf-8', (err) => {
            if (err) throw err;
            console.log(`README updated with ${totalYears}+ years of experience.`);
        });
    });
}

updateReadme();
