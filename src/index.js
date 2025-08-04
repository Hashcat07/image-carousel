import "./styles.css";
let currentSlide=0;
let dots=new Array()
const pictureFrame = document.querySelector(".pictureFrame");
const container = pictureFrame.querySelector(".container");
console.log(container)
const slides = Array.from(container.querySelectorAll(".slides"));
const nextButton=document.querySelector(".nextSlide")
const prevButton=document.querySelector(".prevSlide")
const navigation=document.querySelector(".navigation")
function init() {
  slides.forEach((slide) => {
    slide.style.display = "none";
    
  });
  slides[0].style.display="block"
  attachNavigation();
}

init();


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
    dots[currentSlide].classList.add("active")
}

function hideSlide(slideno){
    slides[slideno].style.display="none"
    dots[currentSlide].classList.remove("active")
}
function prevSlide(){
    hideSlide(currentSlide)
    currentSlide--;
    if(currentSlide<0){currentSlide=slides.length-1}
    
    showSlide(currentSlide)

}
nextButton.addEventListener("click",nextSlide)
prevButton.addEventListener("click",prevSlide)

function attachNavigation(){
    slides.forEach((_,index)=>{
        const navDot=document.createElement("span")
        navDot.className="navDot"
        if(index===currentSlide){
            navDot.classList.add("active")
        }
        dots.push(navDot)
        navDot.addEventListener("click",()=>goTo(index))
        navigation.appendChild(navDot)
    })
}
function goTo(index)
{
    hideSlide(currentSlide)
    currentSlide=index
    showSlide(index)
}
setInterval(nextSlide, 5000);