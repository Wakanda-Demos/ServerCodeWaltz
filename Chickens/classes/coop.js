coop = model.addClass("Coop", "Coops");

coop.addMethod("generateCoops", "dataClass", function(numberOfCoops, progressReference) {
	include ("scripts/generateData.js");
	return generateSomeData(numberOfCoops, progressReference);
},  "public");

coop.addMethod("generateCoopsWithWorker", "dataClass", function(numberOfCoops, progressReference) {
	
	var worker = new Worker('scripts/genDataWorker.js');
	worker.postMessage({numberOfCoops: numberOfCoops, progressReference: progressReference});
	console.log('Parent has terminated.');
	
},  "public");