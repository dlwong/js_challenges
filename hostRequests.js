//  Sample Input 0:
//  host_access_log_00.txt
 
//  Sample Output 0:
//  unicomp6.unicompt.net 4
//  burger.letters.com 3
//  d104.aa.net 3

const fs = require('fs');

const hostReqCount = function(file) {
  fs.readFile(file, 'utf8', (err, data)=>{
    if (err) throw err;
    const count = {};
    lines = data.split('\n')
    host = lines.forEach( x => {
      let temp = x.split(' ')[1]
      count[temp] = count[temp]+1 || 1
    })

    for (let key in count){
      const string = `${key} ${count[key]} \n`
      fs.appendFile('count.txt', string, (err) => {
        if (err) throw err;
        console.log('added line')
      })
    }

    // fs.writeFile('count.txt', JSON.stringify(count), (err) => {
    //   if (err) throw err
    //   console.log('file saved')
    // })

  })



}

hostReqCount('./hosts_access_log_00.txt')