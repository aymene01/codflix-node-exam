const fs = require('fs');

const cp =()=>{
    const source = process.argv[2];
    const destination = process.argv[3]
    fs.createReadStream(source).pipe(fs.createWriteStream(destination))
}
cp()

