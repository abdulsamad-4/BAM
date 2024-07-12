//hidden-dropdown

/* function init() {
  document.getElementsByClassName("ministries-dropdown").style.visibility = "hidden";
    var onMinistries = document.getElementsByClassName("ministries");
    onMinistries.onclick = function() {
     demoVisibility() ;
    }
  }
  
function demoVisibility() {
    document.getElementsByClassName("ministries-dropdown").style.visibility = "visible";
} */

    document.getElementsByClassName("ministries").hover(function(){
      document.getElementsByClassName("ministries-dropdown").fadeToggle();
  });


 /* document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      init();
    }
  }); */


// Testimony slide
let index = 0;
const slides = document.querySelectorAll('.text');
const totalSlides = slides.length;

// Function to update slide position
function updateSlidePosition() {
  for (let slide of slides) {
    slide.style.transform = 'translateX(' + (-index * 100) + '%)';
  }
}

// Auto-slide functionality
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlidePosition();
}, 3000); // Change slide every 3 seconds

// Click event listeners for navigation buttons
/* document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlidePosition();
}); */
