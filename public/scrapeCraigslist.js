function scrapeIt(keyWord, url, selector){
	var request = require("request"), 
	cheerio = require("cheerio");
	url = url;

	request(url, function(error, response, body){

	if(!error){
		var $ = cheerio.load(body),
			links = $(selector);
			jobTitleArray = [];

			links.each(function(i, link){
				jobTitle = $(link).html();
				searchJobTitle = jobTitle.toLowerCase().indexOf(keyWord);
				

				if( searchJobTitle > 0){
					jobTitleArray.push(jobTitle);
				}
			});

		if(jobTitleArray.length > 0){
			console.log(jobTitleArray);
			
		} else {
			console.log("Sorry, we didn't find any matches for " + "'" + keyWord + ".'")
		}
	} else {
		console.log("We've encountered an error: " + error);
	}
});
}

scrapeIt("node", "http://portland.craigslist.org/search/sof", '.row .pl a');

	