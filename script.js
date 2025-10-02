let slides = document.querySelectorAll('.slide');
let thumbs = document.querySelectorAll('.thumb');
let currentIndex = 0;

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        thumbs[i].classList.remove('active');
        if(i === index){
            slide.classList.add('active');
            thumbs[i].classList.add('active');
        }
    });
}
 
function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
 
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
 
thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        currentIndex = parseInt(thumb.dataset.index);
        showSlide(currentIndex);
    });
});
 
let autoSlide = setInterval(nextSlide, 4000);
 
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 4000);
});
 
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') nextSlide();
    if(e.key === 'ArrowLeft') prevSlide();
});
 
showSlide(currentIndex);
