
//Chicken class exists (loaded from JSON Model.waModel)
//this addClas method will not blow away what exists

chicken = model.addClass("Chicken", "Chickens");

chicken.addAttribute("age", "calculated", "long");




// ---------------------------

chicken.age.onGet = function()
{
	return datetool.computeAge(this.hatchDate, "weeks");
}

chicken.age.onSort = function(ascending)
{
	return datetool.buildSortQuery(ascending, "hatchDate");
}

chicken.age.onQuery = function(compareOperator, compareValue)
{
	return datetool.buildQuery(compareOperator, compareValue, "hatchDate");
}