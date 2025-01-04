"use strict"



var moviesTime = [[9,13],[8,7],[12,1],[14,46],[12,53],[15,14],[14,46],[9,8],[18,35],[11,6],[17,30],[21,1],[20,20],[20,23],[13,5],[22,49],[13,50],[15,47],[14,56],[10,36],[4,54],[12,32],[11,7],[7,55],[12,45],[14,33],[13,35],[7,6],[14,19],[20,11],[16,42],[10,44],[12,15],[8,11]]
console.log("there is " + moviesTime.length + " movie to watch")





var min = 0
var sec = 0

for (var i = 0; i < moviesTime.length; i++) {
    min += moviesTime[i][0];
    sec += moviesTime[i][1];
    var wholeMins = ((Math.round(sec/60)) + min);
    var wholeTime = ((wholeMins/60).toFixed(1)).split('.');
}
console.log('All of these movies are ' + wholeMins + ' minutes ' + 'or ' + wholeTime[0] + ':' + (wholeTime[1] * 6) + ' hours' )







var doneSections = 24;
var spentedMin = 0
var spentedSec = 0

for (var i = 0; i < doneSections && i < moviesTime.length; i++) {
    spentedMin += moviesTime[i][0];
    spentedSec += moviesTime[i][1];

    var spentedTime = (Math.round(spentedSec/60) + spentedMin);
    var spentedHours = ((spentedTime/60).toFixed(1)).split('.');

    var leftTime = wholeMins - spentedTime;
    var leftHours = ((leftTime/60).toFixed(1)).split('.');
}
console.log("There are " + leftTime + " minutes " + "or " + leftHours[0] + ":" + (leftHours[1] * 6) + " hours remain ")
console.log("you have watched " + spentedTime + " minutes " + "or " + spentedHours[0] + ":" + (spentedHours[1] * 6) + " hours remain ")
