
// using setInterval() to move an element on the web page a little bit every X milisec
//1) get image and button
const car = document.querySelector('#car'); 
const btn = document.querySelector('button');

//2) set the initial position of the car
car.style.left = '30px'; //not need because we already have a position absolute


//4 set a counter positin so it will stop
let leftPos = 30;


//A onclick move the car
btn.addEventListener('click', animateElement);

//stop the car onClick();
//make the button move the car and stop the car each time we click a button or the space bar
btn.addEventListener('click', animateElement);
let isPlay = false;
let intvl;
let speed = 10;

function animateElement() { 
    //this flips the booloean, this mean isPlay is not equals isPlay
    isPlay = !isPlay; 

    if (isPlay) {
    btn.textContent = 'Pause'
     intvl = setInterval(()=>{
        car.style.left = leftPos + 'px';
        leftPos +=speed;
    
        //check if the postion is greteer
        if (leftPos > window.innerWidth - 300) {
            //300 is the width(css) of the car
            // clearInterval(intvl) //this stop the setInterval();

            //turn the car around
            car.style.transform = 'scaleX(-1)';
            speed *= -1 //this multiply 10 by -1 == -10
        }; //end of if

        if (leftPos == 0) {
            //stop the car and turn around again
            car.style.transform = 'scaleX(1)';
            speed *= -1 //this multiply 10 by -1 == -10
        }

    }, 40); //end of setInterval();
    } else {
        btn.textContent = 'Play';
        clearInterval(intvl);
    }
}

//making the scpace bar stop the car
btn.addEventListener('keydown', evalSpaceBar);

function evalSpaceBar(e) {  
    if (e.key == 'Space') {
        animateElement;
    }
}
