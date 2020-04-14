
//Hide element after animation end

var square = document.getElementById('square');
square.addEventListener('webkitAnimationEnd',function( event ) {
  square.style.display = 'none';
}, false);


document.addEventListener("scroll", function() {
  console.log("im in");
  // var navbar = querySelector(".navbar");
  // navbar.classList.add("bg-white");
});