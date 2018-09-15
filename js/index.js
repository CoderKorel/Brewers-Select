/*slides - start*/
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slidesmain");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4000); 
}
/*slides - end*/
/*arrow - start*/
$(window).scroll(function() {
    if ($(this).scrollTop() >= 70) {        
        $('#return-to-top').fadeIn(200);   
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
/*arrow - end*/
/*modal in contact - start*/
const modal = document.getElementById('myModal');
const btn = document.getElementById("conBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*modal in contact - end*/