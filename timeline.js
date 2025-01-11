"use strict"



var moviesTime = [[8,2],[11,14],[15,46],[9,50],[12,40],[7,36],[5,15],[17,11],[6,47],[13,45],[13,24],[11,12],[9,35],[8,52],[21,24],[20,48],[7,19],[20,1],[22,9],[16,24],[15,6],[20,36],[13,49],[16,3],[9,12],[15,9],[22,27],[15,54],[18,39],[11,6],[20,49],[22,34],[13,54]]
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







var doneSections = 4;
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
console.log("you have watched " + spentedTime + " minutes " + "or " + spentedHours[0] + ":" + (spentedHours[1] * 6) + " hours")
