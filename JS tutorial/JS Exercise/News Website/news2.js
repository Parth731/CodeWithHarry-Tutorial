var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-08-25&' +
          'sortBy=popularity&' +
          'apiKey=5fd7a66ebe6e4ef398c1cf629e087c9c';

var req = new Request(url);

fetch('http://newsapi.org/v2/everything?' +
'q=Apple&' +
'from=2020-08-25&' +
'sortBy=popularity&' +
'apiKey=5fd7a66ebe6e4ef398c1cf629e087c9c')
    .then(function(response) {
        console.log(response.json());
    })