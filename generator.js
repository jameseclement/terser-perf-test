const fs = require('fs')

function randomString(){
    return Math.random().toString(36).substring(2,15)
}

let content = '';

for (let i=0; i < 20000; i++){
    content += `function noop${i}(){ let x = ${Math.floor(Math.random()*1000)}; return x; }\n`;
    content += `let var${i} = ${i};\n`
    content += `let str${i} = "${randomString()}";\n`;
}

fs.writeFileSync('largeJS.js', content)