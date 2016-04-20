'use strict';

const exec = require('child_process').exec;
const fs = require('fs');
const files = fs.readdirSync("video");
const path = require('path');

for(var i in files) {
   if(path.extname(files[i]) === ".jpg") {
       	console.log(files[i]);
       	console.log(files[i].split(".")[0]);
       	let timestamp = parseInt(files[i].split(".")[0]);
       	let dateString = new Date(timestamp).toString().split(' ').join('');
       	let command = 'bash ./annotateImage.sh '+files[i]+' \''+dateString+'\'';
       	console.log("command ", command)
		exec(command, (error, stdout, stderr) => {
			console.log(stdout);
		});
   }
}
