const express = require('express');
const multer = require('multer');
const unzipper = require('unzipper');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const storage = multer.memoryStorage();
const { exec } = require('node:child_process')
app.use(express.static('public'))

var LintResponse;
app.get('/', function(req, res, next) {
    console.log("Hello world");
   res.sendFile(__dirname+'/public/index.html');
});
//setTimeout(()=>{
    app.get('/server-log', (req, res) => {
        // Send a message from the server to the client
        res.json({ message: LintResponse });
        });
// },500)


app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
RunLINTProcess();
});




function RunLINTProcess(){
console.log('***RunLINTProcess ** called')
process.chdir('./DemoProject');
console.log('directory change to ',process.cwd());
funNpmInstallESlint();
}

function funNpmInstallESlint(){
    exec('npm install eslint-plugin-lwc', (err, output) => {
        // once the command has completed, the callback function is called
        if (err) {
            // log and return if we encounter an error
            console.error("could not execute command: ", err)
            return
        }
        console.log('directory 1 ',process.cwd());
        console.log("executed npm install \n", output)
        savedevConfig();
    })
}

function savedevConfig(){
    exec('npm install eslint @salesforce/eslint-config-lwc --save-dev', (err, output) => {
        if (err) {
            console.error("could not execute command: ", err)
            return
        }
        console.log('directory 2 ',process.cwd());
        console.log("executed install eslint \n", output)
        if(output){
            runLint();
        }
    })
}

function runLint(){
    exec('npx eslint force-app/main/default/lwc/**/*.js', (err, output) => {
        try{
            if (err) {
               console.error("could not execute lint  command: ", err)
             
            }
            
            console.log('directory 3 ',process.cwd());
            console.log("Output: lint command executed \n", output,"@@end")
           
            LintResponse=JSON.stringify(output);
    
        }catch(e){
        console.log('errors catch',JSON.stringify(e));
        }
        
    })
    }