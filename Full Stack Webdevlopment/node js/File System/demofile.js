

// nodejs syncronous or blocking

/*
const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

let filecontent = fs.readFileSync('./demofile.html');

// console.log(filecontent);

const server = http.createServer((req, res) => {

  //  fs.readFile('demofile.html', function (err, data) {


        res.writeHead(200,{'content-type':'text/html'});
        // res.write(data);
        res.write(filecontent);
        res.end();
    //});
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

*/



// nodejs ansyncronous or blocking

const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

// let filecontent = fs.readFileSync('./demofile.html');

// console.log(filecontent);

const server = http.createServer((req, res) => {

    
    
    fs.readFile('myrenamedfile.html', function (err, data) {

        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(data);
        //res.write(filecontent);
        res.end();
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/////////////////////////////creating file//////////////////////


//create a file fs.appendFile()
// fs.appendFile('demofile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//create a file fs.open()
// fs.open('demofile.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// //create a file fs.writeFile()
// fs.writeFile('demofile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


//////////////////////// Update Files  //////////////////////////////////

// fs.appendFile()
// fs.appendFile('demofile.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });

// fs.writeFile()
// fs.writeFile('demofile.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });


////////////////////////////// Delete Files //////////////////////////

// fs.unlink('demofile.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });


// /////////////////////////////// renaming //////////////////////////

// fs.rename('demofile.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });
