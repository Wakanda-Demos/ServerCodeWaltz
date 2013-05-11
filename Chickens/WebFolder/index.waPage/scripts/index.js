
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var birdsEvent = {};	// @dataSource
	var dataGrid4 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	birdsEvent.onCollectionChange = function birdsEvent_onCollectionChange (event)// @startlock
	{// @endlock
		$('#dataGrid4').removeClass('disable');

	};// @lock

	WAF.sources.breed.addListener("onBeforeCurrentElementChange", function() {
		$('#dataGrid4').addClass('disable');
	}, "WAF");

	dataGrid4.onCellClick = function dataGrid4_onCellClick (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("birds", "onCollectionChange", birdsEvent.onCollectionChange, "WAF");
	WAF.addListener("dataGrid4", "onCellClick", dataGrid4.onCellClick, "WAF");
// @endregion
};// @endlock
