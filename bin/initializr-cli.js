#!/usr/bin/env node

let { program } = require('commander');
let VERSION = require('../package').version;
let services = require('./services');

let figlet = require("figlet");
console.log("\n", figlet.textSync("NodeJs Initializr"), "\n\n");
console.log("This will guide you through generating a barebone NodeJs app with the selected framework.");
console.log("Press ^C at any time to quit. \n");

let default_app_name = "hello_world"; //If you change this in the future, remember to go change it in the package.json file as well.

program.version(VERSION);

program
	.argument('[app_name]', 'The name you want to call the app.', default_app_name)
	.option('-f --framework <framework>', 'Node framework to initialize.', 'express')
	.action((app_name, options) => {
		console.log("options: ", options);
		services.startCreateApp(app_name, options);
	});
	
program.parse(process.argv);