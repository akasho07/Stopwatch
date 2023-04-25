//assiging values to buttons
let strBtn = document.getElementById('start');
let stpBtn = document.getElementById('stop');
let resBtn = document.getElementById('reset');

//declarin variable and assigning values to them
let hor = 00;
let minu = 00;
let seco = 00;
let milo = 00;

//this operation reflect on buttons when they got clicked
strBtn.addEventListener('click', function () {
    timer = true; 
    stopWatch();
});

stpBtn.addEventListener('click',function() {
    timer = false;
});

resBtn.addEventListener('click' , function() {
    timer = false;
    hor = 0;
    minu = 0;
    seco = 0;
    milo = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milSec').innerHTML = "00";
});

//function to run stopwatch
function stopWatch() {
     if(timer){
        milo++;

        if(milo == 100){
            seco++;
            milo = 0;
        }

        if(seco == 60){
            minu++;
            seco = 0;
        }

        if(minu == 60){
            hor++;
            minu == 0;
            seco == 0;
        }
        let hour = hor;
        let minute = minu;
        let second = seco;
        let milliSecond = milo;
        
        if(hor<10) {
            hour = "0" + hour;
        }

        if(minu<10){
            minute = "0" + minute;
        }

        if(seco<10){
            second = "0" + second;
        }
        
        if(milo<10){
            milliSecond = "0" + milliSecond;
        }

        //getting elements by their respective id's
        document.getElementById('hr').innerHTML = hour;
        document.getElementById('min').innerHTML = minute;
        document.getElementById('sec').innerHTML = second;
        document.getElementById('milSec').innerHTML = milliSecond;
        setTimeout(stopWatch,10);
     }
}