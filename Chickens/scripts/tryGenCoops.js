
function runTryGenCoops(request, response){
    var message, initT;
    response.contentType = 'text/plain';
    
    //erase coops and chickens
    ds.Coop.remove();
    ds.Coop.setAutoSequenceNumber(1);
    ds.Chicken.remove();
    ds.Chicken.setAutoSequenceNumber(1);
    
    initT = Date.now();
    message = "generating 3000 coops\n";
    message += ds.Coop.generateCoops(3000, "generateCoops");
    //ds.Coop.generateCoopsWithWorker(3000, "generateCoops");
    response.body = message + "\n time " + (Date.now() - initT)/1000 +  " seconds";
}

