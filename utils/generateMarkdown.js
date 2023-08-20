//Creating a function to return the license badge
function renderLicenseBadge(license) {
if (license === undefined) {
  return '';
}
else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
}
else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
}
else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
}
else if (license === 'BSD 3') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
}
else if (license === 'None') {
    return '';
}
    }
// function to ruturn the license link
function renderLicenseLink(license) {
    if (license === undefined) {
        return '';
    }
    else if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    }
    else if (license === 'Apache 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
    }
    else if (license === 'GPL 3.0') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    }
    else if (license === 'BSD 3') {
        return 'https://opensource.org/licenses/BSD-3-Clause';
    }
    else if (license === 'None') {
        return '';
    }
}
//function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribution](#contribution)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
${renderLicenseLink(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
if you have any questions please contact me at ${data.email} or visit my github at ${data.github}`;
}
//exporting the function
module.exports = generateMarkdown;