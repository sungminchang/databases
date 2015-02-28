var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

exports.sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.collectData = function(request, callback){
  console.log('collecting data');
  // console.log('request: ', request);
  // console.log('callback: ', callback);
  // console.log('body :', request.body);
  callback(request.body);
  // request.on('error', function(error) {
  //   console.log('error collecting data :', error);
  // });
  // var data = "";
  // request.on('data', function(chunk){
  //   data += chunk;
  //   console.log('chunk collected: ', chunk);
  // });
  // request.on('end', function(){
  //   console.log('finished collecting data');
  //   callback(JSON.parse(data));
  // });
};
