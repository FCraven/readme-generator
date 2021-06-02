const hasLength =(string)=> {
  return string.length? true : false;
}

const urlFriendly =(string)=> {
  return string.split(' ').join('%20')
}

const generateMarkdown =(answers)=> {
      return `# Title
---
### ${answers.title}

# Description
---
### ${answers.description}

# Dependencies
---

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
