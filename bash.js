const myPWD = require('./pwd.js')
const myLS = require('./ls.js')
const myCat = require('./cat.js')


process.stdout.write('prompt >');

process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    let cmdArr = cmd.split(' ')
    let cmdCase = cmdArr[0]
    switch(cmdCase) {
        case 'pwd' :
           myPWD();
           break;

        case 'ls'  :
            myLS();
            break;

        case 'cat':
            for (let i = cmdArr.length - 1; i > 0; i--) {
                myCat(cmdArr[i])
            }
            break;
            
        default:
            process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt >')
});