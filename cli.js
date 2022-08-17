const path = require('path')
const fs = require('fs')
const args = process.argv

const commands = [
  { name: '-c', acceptValue: true },
  { name: '-v', acceptValue: false },
  { name: '-f', acceptValue: true },
  { name: 'help', acceptValue: false }
]

const defaultComponentsPath = path.resolve(__dirname, './src/components/')

let activeCommands = {}

args.forEach((arg, index) => {
  commands.forEach(command => {
    if (arg === command.name) {
      let currentCommand = command
      if (currentCommand.acceptValue) {
        currentCommand.value = args[index + 1]
      }
      activeCommands[currentCommand.name] = currentCommand
    }
  })
})

if (Object.keys(activeCommands).length === 0) {
  printHelp()
  return
}

const componentName = activeCommands['-c'] ? activeCommands['-c'].value : false

const isVueComponent = activeCommands['-v'] || false

const folderName = activeCommands['-f'] ? activeCommands['-f'].value : false

console.log(activeCommands)

if (componentName === false) {
  printHelp()
  return
}

let componentPath = defaultComponentsPath

if (folderName !== false) {
  componentPath = path.resolve(componentPath, folderName)
} else {
  componentPath = path.resolve(componentPath, componentName)
}

if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath)
}

if (isVueComponent) {
  componentPath = path.resolve(componentPath, `${componentName}.vue`)
  if (!fs.existsSync(componentPath)) {
    fs.writeFileSync(componentPath, generateVueTemplate())
  } else {
    printErrorExists(componentName)
    return
  }
} else {
  let componentFiles = [
    {
      name: path.resolve(componentPath, `${componentName}.css`)
    },
    {
      name: path.resolve(componentPath, `${componentName}.js`),
      template: generateJsTemplate(componentName)
    },
    {
      name: path.resolve(componentPath, `${componentName}.pug`)
    }
  ]
  let isComponentExists = componentFiles.some(file => fs.existsSync(file.name))
  if (isComponentExists) {
    printErrorExists(componentName)
    return
  } else {
    componentFiles.forEach(file => {
      fs.writeFileSync(file.name, file.template || '')
    })
  }
}

console.log(`Done: component "${componentName}" successfully created`)

function printHelp () {
  const usageText = `
  Spiral Frontend CLI.

  Usage:  node cli <command>
  
    where <command> can be:
  
    -c:       component name (default pug component)
    -v:       vue component
    -f:       specify folder name if different from component name
    help:     print this message`
  console.log(usageText)
}

function generateJsTemplate (componentName) {
  return `import './${componentName}.css'`
}

function generateVueTemplate () {
  return `<template>
</template>

<script>
export default {
}
</script>

<style lang="postcss">
</style>`
}

function printErrorExists (componentName = '') {
  console.log(`Error: component "${componentName}" already exists`)
}
