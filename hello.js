const express = require('express');
const multer = require('multer');
const unzipper = require('unzipper');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3038;
const storage = multer.memoryStorage();
const { exec } = require('node:child_process')

process.chdir('./DemoProject');
console.log('directory change to ',process.cwd());

exec('npm install eslint-plugin-lwc', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    console.log('directory 0 ',process.cwd());
    console.log("executed npm install \n", output)
})

exec('npm install eslint @salesforce/eslint-config-lwc --save-dev', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    console.log('directory 1 ',process.cwd());
    console.log("executed install eslint \n", output)
    if(output){
        fun2();
    }
})
function fun2(){
exec('npm run lint:lwc', (err, output) => {
    console.log('directory 2 ',process.cwd());
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute lint  command: ", err)
       // return
    }
    // log the output received from the command
    console.log('directory 3 ',process.cwd());
    console.log("Output: lint command executed \n", output)
})
}
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});


//