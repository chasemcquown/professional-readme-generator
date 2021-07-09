// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'fullname',
        type: 'input',
        message: 'Please enter your full name'

    },
    {
        name: 'username',
        type: 'input',
        message: 'Please enter your GitHub username:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:'

    },
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a brief description of your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'How do you install this project?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How do you use this project?'
    },
    {
        name: 'credits',
        type: 'input',
        message: 'List the the collaborators of this project, if applicable:'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Any tests? Please provide examples on how to run them:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select a license:',
        choices: ['Apache', 'MIT', 'BSD3', 'GPL']
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,data,function(err) {
        if (err) {
            return err;
        } else {
            console.log("Your README.md file has been generated!");
        };
    })

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md",generateMarkdown(data))
    })
}

// Function call to initialize app
init();
