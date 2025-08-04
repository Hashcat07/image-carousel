import "./styles.css";

const pictureFrame = document.querySelector(".pictureFrame");
const container = pictureFrame.querySelector(".container");
console.log(container)
const slides = Array.from(container.querySelectorAll(".slides"));
const nextButton=document.querySelector(".nextSlide")
const prevButton=document.querySelector(".prevSlide")
function init() {
  slides.forEach((slide) => {
    slide.style.display = "none";
    slides[0].style.display="block"
  });
}

init();

let currentSlide=0;

function nextSlide(){
    hideSlide(currentSlide)
    currentSlide++
    if(currentSlide>=slides.length){
        currentSlide=0
    }
    
    showSlide(currentSlide)
    
}
function showSlide(slideno){
    slides[slideno].style.display="block"
}

function hideSlide(slideno){
    slides[slideno].style.display="none"
}
function prevSlide(){
    hideSlide(currentSlide)
    currentSlide--;
    if(currentSlide<0){currentSlide=slides.length-1}
    
    showSlide(currentSlide)

}
nextButton.addEventListener("click",nextSlide)
prevButton.addEventListener("click",prevSlide)