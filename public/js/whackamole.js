var moleArray = [];
var moleIndex = 0;
var timeRemaining;
 $('#gameTime').change(function(){
     timeRemaining = $('#gameTime').val();
});

var counterRemaining = setInterval(function(){

    if(timeRemaining == 0){
    clearInterval(counterRemaining)
    }
    $('#countDown').html(timeRemaining);
    timeRemaining--;

},1000);
function getUserInput(){
    $('.moleHoles').on('click',function(){
        $(this).addClass('moleImgs');

    })
}

function getRandomNumber(){
    randomNumber = Math.floor(Math.random() * $('.moleHoles').length);
    moleArray.push(randomNumber);
}

function getMoleHole(){
    setInterval(function(){
        getRandomNumber();
    },3000);
console.log(moleArray);
    getUserInput();
}

function getMoleImg(){
    moleIndex = 0;
    var moleSpawn = moleArray[moleIndex];
    console.log(moleSpawn);
    if(moleArray.length > 0){
        moleIndex++;
    }

}


for (var i = 0; i < counterRemaining.length; i++) {
    var obj = counterRemaining[i];
    
}




function factorialize(num) {
    var number = 0;
    for(var i = 1; i <= num; i++){
        number.push(i);
        console.log("this is i:  "+ number);
    }
    return num;
}

factorialize(5);
