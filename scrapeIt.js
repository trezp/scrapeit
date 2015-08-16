

var scrapeIt = function(keyWord, url, selector){
	var request = require("request"), 
	cheerio = require("cheerio");

	request(url, function(error, response, body){

	if(!error){
		var $ = cheerio.load(body),
			links = $(selector);
			jobTitleArray = [];

			//searches each selector for keyword
			links.each(function(i, link){
				jobTitle = $(link).html();
				searchJobTitle = jobTitle.toLowerCase().indexOf(keyWord);

				//if the keyword is found, pushes data containing keyword into array
				if( searchJobTitle > 0){
					jobTitleArray.push(jobTitle);
				}
			});
		//if the array has something in it, log the array, else apologize.
		if(jobTitleArray.length > 0){
			console.log(jobTitleArray);
			
		} else {
			console.log("Sorry, I didn't find any matches for " + "'" + keyWord + ".'")
		}
	} else {
		console.log("We've encountered an error: " + error);
	}
});
}

scrapeIt("software", "http://portland.craigslist.org/search/sof", '.row .pl a');


//next steps 
	//does not return search terms at the beginning of the string. Appears to be ignoring the first word
	//Built UI 
	//Access information inside job add



	