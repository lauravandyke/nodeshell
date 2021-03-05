const fs = require('fs');

const myCat = function(myfile) {fs.readFile(myfile, 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    else {
        process.stdout.write(data)
        process.stdout.write("\nprompt > ")
    }
})}

module.exports = myCat