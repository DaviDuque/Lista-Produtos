var http = require('http');
http.createServer(function(req, res){
	res.write(
		'<html>' +
		'<head>' +
		'<title>Helo Word</title>' +
		'</head>' +
		'<body>' +
		'<h1>hello word</h1>' +
		'</body>' +	
		'</html>'
	);
	res.end();
}).listen(3412);