// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/* function renderLicenseBadge(license) {
  let license = data.license;
  if (license) {
    return license;
  } else {
    return "";
  }
} */

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)]

  ## Description 

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}
  
  ## Credits

  ${data.credits} 

  ## License

  Licensed under the ${data.license} license. 

  ## Contributing

  Contributors: ${data.fullname} 

  ## Tests

  Test Examples: ${data.tests}

  ## Questions

  Any questions? You can reach me at GitHub: https://github.com/${data.username} or Email: ${data.email}


  `;
}

module.exports = generateMarkdown;
