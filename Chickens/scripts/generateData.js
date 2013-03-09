

/**
 * @public
 * @method handleDataInitRequest
 * @param {request Object} request
 * @param {response Object} response
**/

function handleDataInitRequest(request, response){
	var theQuery = getURLQuery(request.url);
	var coopCount = theQuery.coopCount || 100;
	//coopCount = 1000;
	response.contentType = 'text/html';
	if (theQuery.rebuildData) {
		ds.Breed.remove();
		ds.Breed.setAutoSequenceNumber(1);
		ds.Coop.remove();
		ds.Coop.setAutoSequenceNumber(1);
		ds.Chicken.remove();
		ds.Chicken.setAutoSequenceNumber(1);
	}
	
	response.body = "<pre>" + generateSomeData(coopCount) + "\n</pre>" + new Date();
}

/**
 * @private
 * @method generateSomeData
 * @param {number} coopsToGenerate
 * @param {string} progressReference
 * @returns string
 * This is kinda sloppy - but does it's duty.
 **/
function generateSomeData(coopCount, progressReference) {
	progressReference = progressReference || "generateCoops";
	coopCount = coopCount || 100;
	var status = '';
	var breeds = loadArrayFromFile("breeds.txt");
	var roosterFirstNames = loadArrayFromFile("firstRoosters.txt");
	var henFirstNames = loadArrayFromFile("firstHens.txt");
	var coopNames = loadArrayFromFile("coopNames.txt");
	if (breeds != null && ds.Breed.all() < 5 )
	{
		console.log("Building Breeds");
		breeds.forEach( function(name){
			breed = new ds.Breed({name: name});
			breed.save();
		});
		status = status + "Created Breeds\n";
	}
	var breedIds = ds.Breed.all().toArray("ID");
    if (coopNames != null && ds.Coop.all().length > 300 ){
    	

        // Let's erase the exisitng coops and chickens
		ds.Coop.remove();
		ds.Coop.setAutoSequenceNumber(1);
		ds.Chicken.remove();
		ds.Chicken.setAutoSequenceNumber(1);
    }

	if ( coopNames != null )
	{
		var i;
		var hensCreated = 0;
		var roostersCreated = 0;
		console.log("Creating Coops");
		var progress = ProgressIndicator(coopCount,
            "Creating Coops - Coop number {curValue} out of {maxValue}",
            true, "", progressReference);
		for (i=0; i< coopCount; i++)
		{
            progress.setValue(i);
			var j;
			var numberOfHens = Math.ceil( Math.random() * 20);
		    numberOfHens = 10; //testing speed
		
			coop = new ds.Coop({name: coopNames.getRandomElement()});
			coop.save();
			for (j=0; j < numberOfHens; j++)
			{
				var currentBreedID = breedIds[rangedRandom(0, breedIds.length-1)].ID;
			    
				hen = new ds.Chicken({
					name: henFirstNames.getRandomElement(),
					hatchDate: new Date(randomInteger(2010, 2012), randomInteger(0, 11), randomInteger(1, 28)),
					coop: coop,
					breed: currentBreedID,
					gender: "female"
				});
				try
			    {
        			hen.save();
        			hensCreated ++;
        		} catch(e) {
        			
        		}				

			};
			//testing speed if (rangedRandom(1,10) == 9)
            if (rangedRandom(1,10) > 0)
			{
				var currentBreedID = breedIds[rangedRandom(0, breedIds.length-1)].ID;
				rooster = new ds.Chicken({
					name: roosterFirstNames.getRandomElement(),
					hatchDate: new Date(randomInteger(2010, 2012), randomInteger(0, 11), randomInteger(1, 28)),
					coop: coop,
					breed: currentBreedID,
					gender: "male"
				});
				try
			    {
					rooster.save();
        			roostersCreated ++;
        		} catch(e) {
        			
        		}		
			}
		}
        progress.setValue(coopCount);
        //
		status = status + "Created " + coopCount.toString() + " coops\n";
		status = status + "Created " + hensCreated.toString() + " hens\n";
		status = status + "Created " + roostersCreated.toString() + " roosters\n";
		
	}

	if ('' == status){
		status = "no data generated";
	}
	return status;
}




Array.prototype.getRandomElement = function()
{
	var x = rangedRandom(0, this.length-1);
	return this[x];
}
function rangedRandom(from, to)
{
	from = from || 0;
	to = to || 1000;
	var range = to - from;
	return Math.round((Math.random() * range) + from);
}


//generateSomeData(1000000);