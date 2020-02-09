const http = require('http');
const fs=require('fs');

const server = http.createServer((req,res) => {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);

    // res.write('<h1>hello</h1>');
    // res.end();
    const url=req.uel;
    if(req.url === '/') {
        // res.write('home');
        res.write('<html> <head><title>my app</title></head><body>');

        res.write('<form action="/msg" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if(req.url === '/msg' && req.method==='POST') {
        fs.writeFileSync('message.txt','hello');
        res.statusCode=302;
        res.setHeader('Content-Type','text/html');
        res.setHeader('location','/');
        res.write('<h1>meaasge received</h1>');
        return res.end();
    }
    res.write('html');
    res.write('<head><title>my app </title></head>');
    res.write('<body><h1>HELLO NODE JS</h1></body>');
    res.write('</html>');
     res.end();

});

server.listen(3000);