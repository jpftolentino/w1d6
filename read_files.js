// receive a command line argument of the file location
// function reads the specified file asynchonously

var cmdLineInput = process.argv;
var fileLocation = (cmdLineInput[2]);

var fs = require('fs');

fs.readFile(fileLocation, function (err, data) {
  if (err){
    return console.log(err);
  }
  console.log(data.toString());
});
//Asynch read
