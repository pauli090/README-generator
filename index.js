const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project dexcription?"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information"
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators"
    },
    {
        type: "input",
        name: "license",
        message: "What license do you use for you application?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidalines"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions"
    },
    {
        type: "input",
        name: "github",
        message: "Place for your GitHub username"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
      const markdown = generateMarkdown(userInput);
      writeToFile('README.md', markdown);
      console.log('README.md file has been successfully generated!');
    })
    .catch((error) => {
      console.error("There is a problem with your README", error);
    });
}

// function call to initialize program
init();
