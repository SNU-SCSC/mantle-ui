const { program } = require('commander');

program
    .argument('<name>', 'name of the example to run')

program.parse(process.argv);

const name = program.args[0];
console.log(`\x1b[30mRunning example: \x1b[1m${name}\x1b[2m\x1b[0m`);

const { spawn } = require("child_process");
spawn(`vite dev ./example/${name}/`, { shell: true, stdio: "inherit" });