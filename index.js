const inquirer = require('inquirer');
const fs = require('fs');
const { hasLength,
        generateMarkdown } = require('./utils');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your application =->',
      validate: (answer)=> hasLength(answer)
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe what this application does =->',
      validate: (answer)=> hasLength(answer)
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'Please list all dependencies=->',
      validate: (answer)=> hasLength(answer)
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Enter instructions to install:',
      validate: (answer)=> hasLength(answer)
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Instructions to start application =->',
      validate: (answer)=> hasLength(answer)
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a software license (for more info: https://choosealicense.com/) =->',
      choices: [
        'Apache License 2.0',
        'BSD 3-Clause "New" or "Revised" license',
        'BSD 2-Clause "Simplified" or "FreeBSD" license',
        'GNU General Public License (GPL)',
        'GNU Library or "Lesser" General Public License (LGPL)',
        'MIT license',
        'Mozilla Public License 2.0',
        'Common Development and Distribution License',
        'Eclipse Public License version 2.0'
      ]
    }
  ])
  .then(answers => {

    fs.writeFile('README.md', generateMarkdown(answers), function(err) {
      if(err) return console.log(err);
      return console.log('SUCCESSFULLY WROTE FILE README.md');
    })
  })

