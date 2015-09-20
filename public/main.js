
var scrapeIt = require('./scrapeIt');

$("#searchForm").on("submit", function(event){
	event.preventDefault(); 
	var keyWord = $("#keyword").val();
	$('body').append(keyWord);
	var result = scrapeIt("http://portland.craigslist.org/search/sof", '.row .pl a', keyWord);
	
	console.log('test')
});

//I am trying to run this scrapeIt in the browser. What I need is for the browser
//to collect the information, then pass that information to the scrapeIt function
//to make