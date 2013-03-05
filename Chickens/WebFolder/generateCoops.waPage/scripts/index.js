
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var genDataButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
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

	genDataButton.click = function genDataButton_click (event)// @startlock
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
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("genDataButton", "click", genDataButton.click, "WAF");
// @endregion
};// @endlock
