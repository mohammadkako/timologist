"use strict"

var moviesTime = [9,8,12,14,12,15,14,9,18,11,17,21,20,20,13,22,13,15,14,10,4,12,11,7,12,14,13,7,14,20,16,10,12,8]
console.log("there is " + moviesTime.unshift() + " movie to watch")


var timeTable = moviesTime.reduce(function (total , value) {
    return total + value
})
    var wholeTime = timeTable / 60
    console.log('All of these videos are '+ timeTable + ' minutes ' + 'or ' + wholeTime + ' hours ')





var doneSections = 24;






for (var i = 0; i < doneSections && i < moviesTime.length; i++) {
    timeTable -= moviesTime[i];
}
    var leftTime = timeTable / 60
    console.log("There are " + timeTable + " minutes " + "or " + leftTime.toFixed(2) + " hours remain ")





function totalMaker(x) {
    var total = 0
        for (var i = 0; i < doneSections  && i < x.length; i++) {
          total += x[i]
        }
    return total
}

    var overTime = totalMaker(moviesTime) / 60
    console.log("The watching time was "+ totalMaker(moviesTime) + " minutes " + "or " + overTime.toFixed(2) + " hours")
