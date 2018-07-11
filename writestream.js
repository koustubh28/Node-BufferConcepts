var fs = require('fs');
var data = 'A Solution of all Technology';

var writerStream = fs.createWriteStream('hello.txt');
writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish',function() {
	console.log('Write Completed');
});

writerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended"); 
