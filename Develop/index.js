// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What's the title of your project?"
        },

        {
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Installation intructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage Information:",
          },
          {
            type: "input",
            name: "contributors",
            message: "Contibutors to the project:",
          },
          {
            type: "input",
            name: "tests",
            message: "Tests for the project:",
          },
          {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          },
          {
            type: "checkbox",
            name: "license",
            choices: [
              "MIT",
              "GNU GPLv3",
              "GNU AGPLv3",
              "GNU LGPLv3",
              "Apache License 2.0",
            ],
          },

    ])
};



// TODO: Create a function to initialize app
function init() {
  questions()
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
 
}

// Function call to initialize app
init();
