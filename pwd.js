const myPWD = function() {
    const currentDir = process.cwd()
     process.stdout.write(currentDir);
     process.stdin.write('prompt >')
}

module.exports = myPWD