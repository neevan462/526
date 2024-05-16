const fs=require('fs');
fs.readFile("readMe.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Unable to read The data");
    }
    fs.writeFile("./writeMe.txt",data,(err)=>{
        if(err)
            {
                console.log("cannot write the file");
            }
            else{
                console.log("successfully completed read and write file stream");
            }
    })
})