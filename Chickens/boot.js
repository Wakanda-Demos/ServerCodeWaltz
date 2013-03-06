
addHttpRequestHandler('/runMe', 'scripts/runServerCode.js', 'runMe');

addHttpRequestHandler('^/dataInit', 'scripts/generateData.js', 'handleDataInitRequest');

addHttpRequestHandler('^/eraseAndGen', 'scripts/tryGenCoops.js', 'runTryGenCoops')