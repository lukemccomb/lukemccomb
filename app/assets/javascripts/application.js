//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).on("ready", function(){

  var bod = document.body;

  var background = function() {
    bod.style.background = 'url("http://res.cloudinary.com/devmknhk5/image/upload/v1417269126/tetons_ko9pac.jpg") no-repeat center center fixed'
  };


  var navMouseEnter = function(elem) {
    $(elem).on("mouseenter", function() {
      this.style.boxShadow = '2px 2px 2px rgba(255, 0, 0, 0.50)'
    })
  };

  var navMouseLeave = function(elem) {
    $(elem).on("mouseleave", function() {
      this.style.boxShadow = ''
    })
  };

  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');

  var previousImage = function(lA) {
    $(lA).on('click', function(){
      bod.style.background = 'url("http://res.cloudinary.com/devmknhk5/image/upload/v1411070271/clouds_nyc.jpg") no-repeat center center fixed'
    })
  };

  var nextImage = function(rA) {
    $(rA).on('click', function(){
      bod.style.background = 'url("http://res.cloudinary.com/devmknhk5/image/upload/v1411070241/dog_jump.jpg") no-repeat center center fixed'
    })
  };

  var navLinks = document.getElementsByTagName('li');

  background();

  navMouseEnter(navLinks);
  navMouseLeave(navLinks);

  previousImage(leftArrow);
  nextImage(rightArrow);


});