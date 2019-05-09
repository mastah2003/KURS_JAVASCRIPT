const request = require('request');
const fs = require('fs');

const yargs = require('yargs');
const argv = yargs.argv;

let Bodybuffer;

const options = 
{
    url: 'https://api.github.com/users/mastah2003' + argv.login,
    headers:
    {
        'User-Agent': 'request'
    },
    //
    json: true // operujemy na obiektach
}

request('https://api.github.com/users/mastah2003',options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

//   let parsedbody = JSON.parse(body);
//   fs.appendFile('github_request.json', 'jajko', (err) => {
//     if (err) throw err;
//     console.log(parsedbody);
//   });
});



