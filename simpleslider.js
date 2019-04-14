let getArticles = document.getElementsByClassName("slider__img-container");
let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");
btnLeft.style.pointerEvents = "none";
btnLeft.style.opacity = 0.3;

let marginLeft = 0;
let td = getArticles[0].offsetWidth;


let rightArea = document.createElement('section'),
    leftArea = document.createElement('section');
    rightArea.id = "right-area";
    leftArea.id = "left-area"; 
    document.body.appendChild(rightArea);
    document.body.appendChild(leftArea); 

function tdLoop(tdValue, varHandel, area, event, multiplyTd) {
    for (let index = 0; index < getArticles.length; index++) {
        marginLeft += tdValue / (getArticles.length * multiplyTd);
        getArticles[0].style.marginLeft = marginLeft + "px";
        area.removeEventListener(event, varHandel);
    }
}; 


//Desktop swipe
let rightDesktopSwipe = function() {
    let event = 'mousemove';
    tdLoop(-td, rightDesktopSwipe, rightArea, event, 1);
};
    
    rightArea.addEventListener('mousedown', function() {
        rightArea.addEventListener('mousemove', rightDesktopSwipe);
        if( Math.floor( parseInt(getArticles[0].style.marginLeft) ) <= Math.floor(getArticles[0].offsetWidth * -8.9) ) {
            rightArea.removeEventListener('mousemove', rightDesktopSwipe);
        } 
    });

let leftDesktopSwipe = function() {
    let event = 'mousemove';
    tdLoop(td, leftDesktopSwipe, leftArea, event, 1)
};

    leftArea.addEventListener('mousedown', function() {
        leftArea.addEventListener('mousemove', leftDesktopSwipe);
        if( parseInt(getArticles[0].style.marginLeft) > -10  || getArticles[0].style.marginLeft == "") {      
            leftArea.removeEventListener('mousemove', leftDesktopSwipe);                                        
        } 
    });


//Mobile swipe
let rightMobileSwipe = function() {
    let event = 'touchmove';
    tdLoop(-td, rightMobileSwipe, rightArea, event, 6);
};

    rightArea.addEventListener('touchmove', function() {
        this.addEventListener('touchmove', rightMobileSwipe);
        if( Math.floor( parseInt(getArticles[0].style.marginLeft) ) <= Math.floor(getArticles[0].offsetWidth * -9.9) ) {
            this.removeEventListener('touchmove', rightMobileSwipe);                                        
        } 
    });

let leftMobileSwipe = function() {
    let event = 'touchmove';
    tdLoop(td, leftMobileSwipe, leftArea, event, 6);
};

    leftArea.addEventListener('touchmove', function() {
        this.addEventListener('touchmove', leftMobileSwipe);
        if( parseInt(getArticles[0].style.marginLeft) > -10  || getArticles[0].style.marginLeft == "") {      
            leftArea.removeEventListener('touchmove', leftMobileSwipe);                                        
        } 
    });


//Btn slider
btnRight.addEventListener('click', function(e) {
    btnRight.style.opacity = 1;
    for (let index = 0; index < getArticles.length; index++) {
        marginLeft += -td / getArticles.length;
        getArticles[0].style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();
    if(window.innerWidth > 480) { 
        multiplay = -8.9;
    } else {
        multiplay = -9.9;
    }
    if( Math.floor( parseInt(getArticles[0].style.marginLeft) ) <= Math.floor(getArticles[0].offsetWidth * multiplay) ) {
       btnRight.style.pointerEvents = "none"; 
       btnRight.style.opacity = 0.3;                                        
    
    }
    btnLeft.style.pointerEvents = "auto";
    btnLeft.style.opacity = 1;
});


btnLeft.addEventListener('click', function(e) {
    for (let index = 0; index < getArticles.length; index++) {
        marginLeft += td / getArticles.length;
        getArticles[0].style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();

    if( parseInt(getArticles[0].style.marginLeft) > -10  || getArticles[0].style.marginLeft == "" ) {      
        btnLeft.style.pointerEvents = "none";  
        btnLeft.style.opacity = 0.3;                                      
    } 
    btnRight.style.pointerEvents = "auto";
    btnRight.style.opacity = 1;
});