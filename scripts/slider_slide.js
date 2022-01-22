
const prev = document.getElementById('btn__prev');
const next = document.getElementById('btn__next');
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.dot__btn');

let index = 0;
let dot;
let slide;

const activeSlide = n => {
    for(slide  of slides){
        slide.classList.remove('slider__active');
    }
    slides[n].classList.add('slider__active');
}


const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('dot__active');
    }
    dots[n].classList.add('dot__active');
}


const nextSlide = () => {
    if( index === slides.length - 1 ) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index ++;
        activeSlide(index);
        activeDot(index);
    }
}


const prevSlide = () => {
    if( index === 0 ) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index --;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot)=>{
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})

next.addEventListener('click', nextSlide );
prev.addEventListener('click', prevSlide );

setInterval(nextSlide, 5000);
