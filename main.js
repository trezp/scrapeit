
var scrapeIt = require('./scrapeIt');
var server = require('./server');
var sayName = require('./test');

$("#searchForm").on("submit", function(event){
	event.preventDefault(); 
	scrapeIt("http://portland.craigslist.org/search/sof", '.row .pl a');
});
