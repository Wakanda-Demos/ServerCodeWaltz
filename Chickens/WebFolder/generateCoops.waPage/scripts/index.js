
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var genDataButton = {};	// @button
	var genDataWithWorkerButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	genDataButton.click = function genDataButton_click (event)// @startlock
	{// @endlock
		$$("message").setValue("creating "+numberOfCoops+" coops")
		$$("progressBar").startListening();
		ds.Coop.callMethod( {
			method: "generateCoops",
			onSuccess: function(e) {
				$$("progressBar").stopListening();
				$$("progressBar").stopProgress();
				$$("message").setValue(e.result);
				console.log('success from server');
			}, 
			onError: function(e) {
				$$("progressBar").stopListening();
				$$("progressBar").stopProgress();
				$$("message").setValue("An error happend:" + e.message);
			}},
			numberOfCoops, "generateCoops");
	};// @lock

	genDataWithWorkerButton.click = function genDataWithWorkerButton_click (event)// @startlock
	{// @endlock
		$$("message").setValue("creating "+numberOfCoops+" coops")
		$$("progressBar").startListening();
		ds.Coop.callMethod( {
			method: "generateCoopsWithWorker",
			onSuccess: function(e) {
				//$$("progressBar").stopListening();
				//$$("progressBar").stopProgress();
				//$$("message").setValue(e.result);
				console.log('success from server');
			}, 
			onError: function(e) {
				$$("progressBar").stopListening();
				$$("progressBar").stopProgress();
				$$("message").setValue("An error happend:" + e.message);
			}},
			numberOfCoops, "generateCoops");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("genDataButton", "click", genDataButton.click, "WAF");
	WAF.addListener("genDataWithWorkerButton", "click", genDataWithWorkerButton.click, "WAF");
// @endregion
};// @endlock
