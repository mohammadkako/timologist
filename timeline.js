"use strict"



let moviesTime = [[8,2],[11,14],[15,46],[9,50],[12,40],[7,36],[5,15],[17,11],[6,47],[13,45],[13,24],[11,12],[9,35],[8,52],[21,24],[20,48],[7,19],[20,1],[22,9],[16,24],[15,6],[20,36],[13,49],[16,3],[9,12],[15,9],[22,27],[15,54],[18,39],[11,6],[20,49],[22,34],[13,54]]
//تمام قسمت های دوره اضافه میشه//
console.log(`There are ${moviesTime.length} movies to watch.`)

//تعداد دوره اضافه میشه و ازش لاگ گرفته میشه//




let min = 0
let sec = 0
for (let eachPart of moviesTime){
    min += eachPart[0];
    sec += eachPart[1];
}
//کل قسمت های دوره پیمایش میشه//
let wholeMins = ((Math.round(sec/60)) + min);
//کل دقایق دوره به دست میاد//
let wholeHours = ((wholeMins/60).toFixed(1)).split('.');
//کل ساعات دوره بر حسب ساعت و اعشار به دست میاد و با اسپلیت ازش آرایه دو بعدی ایجاد میشه//
//برای تبدیل قسمت اعشاری به دقیقه اونو ضربدر 6 میکنیم(همراه با کنسول گرفتن انجام شده)

console.log(`All of these movies are ${wholeMins} minutes or ${wholeHours[0]}:${(wholeHours[1] * 6)} hours.`)



let doneSections = 22
let spentedMins = 0
let spentedSecs = 0

for (let i = 0; i < doneSections && i < moviesTime.length; i++) {
        spentedMins += moviesTime[i][0];
        spentedSecs += moviesTime[i][1];
}
// قسمت هایی که تماشا شده رو پیمایش میکنه//
let watchedMins = (Math.round(spentedSecs/60) + spentedMins);
//کل دقایق مشاهده به دست میاد//
let watchedHours = ((watchedMins/60).toFixed(1)).split('.');
//کل ساعات مشاهده بر حسب ساعت و اعشار به دست میاد و با اسپلیت آرایه دو بعدی ایجاد میشه//
let leftMins = wholeMins - watchedMins;
//کل دقایق باقی مانده از دوره به دست میاد //
let leftHours = ((leftMins/60).toFixed(1)).split('.');
//کل ساعات باقی مونده بر حسب ساعت و اعشار به دست میاد و با اسپلیت آرایه دو بعدی ایجاد میشه//

console.log(`There are ${leftMins} minutes or ${leftHours[0]}:${(leftHours[1] * 6)} hours remain.`)
console.log(`You have watched ${watchedMins} minutes or ${watchedHours[0]}:${(watchedHours[1] * 6)} hours.`)

