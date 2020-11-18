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
}
cat()