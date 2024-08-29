var currentIdx = 1;
var slideWidth = 330;


function getSlideCount() {
    return document.querySelectorAll('.slide_flex img').length;
}

function initializeSlides() {
    totalSlides = getSlideCount(); 
    document.getElementById('currentSlide').innerText = currentIdx;
    document.getElementById('totalSlides').innerText = totalSlides;
}

function updateSlideInfo(){
    document.getElementById('currentSlide').innerText = currentIdx;
    document.getElementById('totalSlides').innerText = getSlideCount();
}

function nextslide(){
    var slideCount = getSlideCount();
    if(currentIdx < slideCount){
        document.querySelector('.slide_flex').style.left = (-slideWidth*currentIdx)+'px';
        currentIdx ++;
    }
    updateSlideInfo();
    
}
            
function prevslide(){
    if(currentIdx > 1){
        currentIdx=currentIdx-1;
        document.querySelector('.slide_flex').style.left = (-slideWidth*(currentIdx-1))+'px';
    }
    updateSlideInfo();
    
}

document.addEventListener('DOMContentLoaded', initializeSlides);