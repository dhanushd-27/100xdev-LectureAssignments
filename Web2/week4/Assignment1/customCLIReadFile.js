// Assignment 1
const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

// Create new CLI command
program.command('count')
    .description('Split the sentence and increase count for each word')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err){
                console.log("Faced an error ", err);
            }
            else{
                let wordsList = data.split(" ");
                console.log(wordsList.length);
            }
        })
    })

program.parse();