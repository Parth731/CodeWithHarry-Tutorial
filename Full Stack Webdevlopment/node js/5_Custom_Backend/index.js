
const http = require('http');
const fs = require('fs');

// host name
const hostname = '127.0.0.1';

// port
const port = 3000;

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contant = fs.readFileSync('./contant.html');

const server = http.createServer((req,res)=>{

    console.log(req.url);   //requst send to server
    url = req.url;

    res.statusCode = 200;
    // res.setHeader('content-type', 'text/plain');
    res.setHeader('content-type', 'text/html');
    
    if(url == '/'){
        
        res.end(home);
    }
    else if(url == '/about'){

        res.end(about);
    }
    else if(url == '/services'){

        res.end(services);
    }
    else if(url == '/contact'){
        
        res.end(contant);
    }
    else{

        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });