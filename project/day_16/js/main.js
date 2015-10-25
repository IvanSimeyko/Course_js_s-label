/*
* You have to implement missing part of the application that making code below (which untouchble)
* to be compiled and executed without exceptions and assertions.
*/

var job = {

};


// PLACE YOUR CODE HERE





/************************************************
* Please don`t change the code bellow this line *
************************************************/
var runner = new Parallel({
    parallelJobs: 2 //optional, you may not implement this feature.
});

runner.job(step1)
    .job(step2)
    .job(step3)
    .job(step4)
    .done(onDone);

function step1(done) {
    console.log('step1');
    setTimeout(done, 1000, 'step1');
}

function step2(done) {
    console.log('step2');
    setTimeout(done, 100, 'step2');
}

function step3(done) {
    console.log('step3');
    setTimeout(done, 1500, 'step3');
}

function step4(done) {
    console.log('step4');
    setTimeout(done, 500, 'step4');
}

var isPassed = false;
function onDone(results) {
    console.assert(Array.isArray(results), 'expect result to be array');
    console.assert(results[0] === 'step1', 'Wrong answer 1');
    console.assert(results[1] === 'step2', 'Wrong answer 2');
    console.assert(results[2] === 'step3', 'Wrong answer 3');
    console.assert(results[3] === 'step4', 'Wrong answer 4');
    console.log('Thanks, all works fine');
    isPassed = true;
}

setTimeout(function(){
    if(isPassed) return;
    console.error('Test is not done.');
}, 3500);