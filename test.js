var search = require('youtube-search');
 
var opts = {
  maxResults: 10,
  key: 'AIzaSyCnM2TYWydOAREkHx56gTkoiNzZvc_1Iiw'
};
 
search('sakthi', opts, function(err, results) {
  if(err) return console.log(err);
 
  console.log(results);
});