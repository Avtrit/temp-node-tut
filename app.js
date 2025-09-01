const {readFile,writeFile} = require('fs');
readFile('./hello.txt','utf8',(err,data) => {
    if(err) throw err;
    const first = data.trim();

    readFile('./second.txt','utf8',(err,result) =>{
        if(err) throw err ;
        const second = result.trim(); 
    writeFile('result.txt',
        `here is the result: ${first},${second}`,
        (err,result)=>{
            if ( err ) throw err;
        
        console.log(result);
        }
    )

})
})