// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (!license) {
    return "";
  }
  if (license === "MIT") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
  }
  if (license === "GNU GPLv3") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license === "GNU AGPLv3") {
    licenseBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
  }
  if (license === "GNU LGPLv3") {
    licenseBadge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  }
  if (license === "Apache License 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
