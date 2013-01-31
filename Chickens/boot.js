
addHttpRequestHandler('/runMe', 'scripts/runServerCode.js', 'runMe');

addHttpRequestHandler('^/dataInit', 'scripts/generateData.js', 'handleDataInitRequest');