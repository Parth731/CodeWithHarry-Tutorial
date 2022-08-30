

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is parth patel');
  res.end(`
  
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>JavaScript Dates</title>
  </head>
  <style>
      .container {
          font-size: 23px;
          background-color: blanchedalmond;
          border: 2px solid grey;
          padding: 34px;
          margin: 4px;
          text-align: center;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
  
      #time {
          font-weight: bold;
      }
  </style>
  
  <body>
      <div class="container">
          Current time is <span id="time"></span>
      </div>
      <script>
          console.log("This is date and time tutorial");
          let now = new Date();
          console.log(now);
  
          let dt = new Date(1000);
          console.log(dt);
  
          // let newDate = new Date("2029-09-30");
          // console.log(newDate)
  
          // let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
          let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
          console.log(newDate);
  
          let yr = newDate.getFullYear();
          console.log("The year is ", yr);
  
          let dat = newDate.getDate();
          console.log("The date is ", dat);
  
          let month = newDate.getMonth();
          console.log("The month is ", month);
  
          let hours = newDate.getHours();
          console.log("The hours is ", hours);
  
          newDate.setDate(8);
          newDate.setMinutes(29);
          console.log(newDate)
          setInterval(updateTime, 1000);
  
          function updateTime() {
              time.innerHTML = new Date();
          }
  
      </script>
  </body>
  
  </html>
  `
  
  );

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// REPL :read–eval–print loop
// ' > ' se tab khulati hai isko REPL kehate hai
//  Repl me double tab press karoge to all variable and module show hoge
// '_' is  print behind value in REPL ( when press _ and Enter ye pichali value batayega)

