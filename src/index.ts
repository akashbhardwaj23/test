import path from 'path'
import {exec} from 'child_process'


async function runChromeExtension(){
   return new Promise((resolve) => {
    console.log('Chrome Extension build Running Started At ', new Date().toLocaleString());
    const execBuild =  exec(`cd ${path.join(__dirname, '../../chrome-extension')} && npm run build`)

    execBuild.stdout?.on('data', (data) => {
        console.log('stdout: ' + data);
    })
    execBuild.stderr?.on('data', (data) => {
        console.log('stderr: ' + data);
    });

    execBuild.on('close', code => {
        console.log("Chrome Extension build completed At ", new Date().toLocaleString())
        resolve("Chrome Extension build completed")
    });
   })
}


async function main(){
    // run the setIInterval for a time suitable for the build
    setInterval(runChromeExtension, 1000*60);
}

main();