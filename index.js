// including packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// function to write README file
function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile("README.md", generateMarkdown(response), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Success! Creating your README.md file!");
            }
        })
    })
}

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage information for your project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please enter the license for your project.",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter the test instructions for your project.",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];

// function to initialize program
init();