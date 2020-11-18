const fs = require('fs');
const readline = require('readline')

const cat =()=>{
    if (process.argv.length == 2){
        const rl =readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.on('line', (input)=> console.log(input))
    }
    
    else if (process.argv.length == 3){
        const displayFile = (filename) => {
            const read = fs.createReadStream(filename);
        read.on('data', (hey)=>{
            console.log(hey.toString())
        });
    }
    displayFile(process.argv[2])
    }

    else if(process.argv.length == 3){
        const filename=process.argv[2]
        console.log(fs.readFileSync(filename, 'utf8'))
    
        } 
    else if(process.argv[2] === "-e") {
        fs.readFile(process.argv[3], 'utf8', (err, data) => {
        if (err) throw err;
        const lines = data.split(/\r?\n/);
        lines.forEach((line) => {
        console.log(line + "$");
    });
 });
}
}
    cat()