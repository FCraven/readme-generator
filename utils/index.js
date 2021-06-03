const hasLength =(string)=> {
  return string.length? true : false;
}

const urlFriendly =(string)=> {
  return string.split(' ').join('%20')
}

const mdDependencyList =(array)=> {
  const mdDependencyList = array.reduce((accum,el) => {
    accum += `- ${el}\n`
    return accum
  },``)

  return mdDependencyList
}

const generateMarkdown =(answers)=> {

  const splitDependencies = answers.dependencies.split(' ')

      return `# Title
---
### ${answers.title}

# Description
---
### ${answers.description}

# Dependencies
---
This applications uses the following dependencies:
${mdDependencyList(splitDependencies)}
###

# Installation
---
### ${answers.installation}

# License
---
![License Badge](https://img.shields.io/static/v1?label=License&message=${urlFriendly(answers.license)}&color=informational)

`
}

module.exports = {
  hasLength,
  generateMarkdown,
  urlFriendly
}
