var http=require('http')
const students=[{id:1,name:"naveen",branch:"cse"},{id:2,name:"sai",branch:"eee"}]
const fs=require('fs');
const server=http.createServer(function (req,res){
     console.log(req.url);
    if(req.url==='/')
    {
        res.write("Hello world");
        res.end();
    }
    else if(req.url==='/students')
        {
            res.write(JSON.stringify(students));
            res.end();
        }
    else if(req.url=='/index.html')
        {
            const data=fs.readFile("./index.html","utf-8",(err,data)=>{
                if(err){
                    console.log("unable to read data");
                }
                else{                res.write(data);
                res.end();
                }
            })
        }
    else{
        res.write("there is no reaource with the given url");
    }
})

server.listen(3128);
console.log("port number is 3128");