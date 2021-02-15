
//Hide element after animation end

var square = document.getElementById('square');
square.addEventListener('webkitAnimationEnd',function( event ) {
  square.style.display = 'none';
}, false);


document.addEventListener("scroll", function() {
  // var navbar = querySelector(".navbar");
  // navbar.classList.add("bg-white");
});