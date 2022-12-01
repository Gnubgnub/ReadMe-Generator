// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}:
${data.title}
## Table of Contents: 
- [Name](#name)
- [License](#license)
- [Description](#description)
- [Installation Instructions](#installationInstructions)
- [Test](#test)
- [GitHub](#gitHub)
- [Email](#email)
- [Contributors](#contributors)
## License:
[![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
## Description:
${data.description}

${data.installationInstructions}
## Test Command: 
To test type ${data.test} into the terminal
## My Github Username: 
Check out more project on my Github at https://github.com/${data.gitHub}
## My Email Address:
If you have any question please feel free to email me at ${data.email}
## Other Contributors:
${data.contributors}
`;
}

module.exports = generateMarkdown;