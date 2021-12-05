// function that returns a license badge based on which license is passed in
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

//  function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (!license) {
    return "";
  }
  if (license === "MIT") {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU GPLv3") {
    licenseLink = `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "GNU AGPLv3") {
    licenseLink = `[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license === "GNU LGPLv3") {
    licenseLink = `[GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  if (license === "Apache License 2.0") {
    licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (!license) {
    return "";
  }
  if (license === "MIT") {
    licenseSection = `This application is covered under the MIT License. \n
    Copyright © 2021 Chaitra Srinivasamurthy.`;
  }
  if (license === "GNU GPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU AGPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU LGPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "Apache License 2.0") {
    licenseSection = `Licensed under the Apache License, Version 2.0 (the "License"). \n
    Copyright © 2021 Chaitra Srinivasamurthy;
    `;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
