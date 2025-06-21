const fs = require('fs');

function getTotalYears() {
    const joinDate = new Date(2019, 8, 9); // Sept 9, 2019
    const currentDate = new Date();

    const startMonth = joinDate.getFullYear() * 12 + joinDate.getMonth();
    const endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
    const monthInterval = endMonth - startMonth;

    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;

    return yearsOfExperience + '.' + monthsOfExperience;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateReadme() {
    const totalYears = getTotalYears();
    const readmePath = 'README.md';

    fs.readFile(readmePath, 'utf-8', (err, data) => {
        if (err) throw err;

        const oldString = 'A backend engineer with 5+ years of experience building high-performance, cloud-native systems.';
        const newString = `A backend engineer with ${totalYears}+ years of experience building high-performance, cloud-native systems.`;

        const regex = new RegExp(escapeRegExp(oldString), 'g');
        const updated = data.replace(regex, newString);

        fs.writeFile(readmePath, updated, 'utf-8', (err) => {
            if (err) throw err;
            console.log(`README updated with ${totalYears}+ years of experience.`);
        });
    });
}

updateReadme();
