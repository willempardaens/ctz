#!/usr/bin/env node

const { commandsDescription } = require('./lib/constants')
const { processModule } = require('./lib/execute')

const shortcuts = {
    h: "--help"
}
const arguments = process.argv[2]

switch (arguments) {

    case (`${shortcuts.h}`):
    case (`-${shortcuts.h[0]}`):
        {
            console.log(commandsDescription);
        }
        break;

    default:
        {
            if (arguments) {
                // process.argv[2] is the file path given through cli
                processModule(arguments)
            }
            else {
                console.log(commandsDescription)
            }
        }
}