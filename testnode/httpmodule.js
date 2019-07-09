const http=require('http');
const server=http.createServer(function(req,res){
    res.writeHead(200,{"content -type":"text/html"});
    res.writeHead(200,{"content -type":"text/html"});
    res.writeHead(200,{"content -type":"text/html"});
    res.write('im writng something');
res.end;
}).listen(3000);
