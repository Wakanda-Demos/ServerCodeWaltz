
//By this time in Server Initiation the
//Model.waModel JSON file has been processed
//And thoes objects exist
//This "new" will not blow away existing catelog 

model = new DataStoreCatalog();

include("scripts/utils.js");

include("classes/chicken.js");

include("classes/breed.js");

//include("classes/coop.js");

//Using AMD for Model Loading
model.Address = require('Model/Address');

model.Coop = require('Model/Coop');

model.Coop.addAttribute("address", "relatedEntity", "Address", "Address");
model.Address.addAttribute("coops", "relatedEntities", "Coop", "address", {reversePath:true});

//model.Address.addAttribute("coop", "relatedEntity", "Coop", "address");

//model.Coop.address = new Attribute("relatedEntity", "Address", "Address");

//model.Address.coops = new Attribute("relatedEntities", "Coop", "address", {reversePath:true});

//model.Coop.addAttribute("funName", "calculated", "string");
//model.Coop.funName.onGet = function(value)
//{ 
//    return this.name + ' hut';
//}
