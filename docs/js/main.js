
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');



navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    document.querySelector('.nav').classList.toggle('nav--active');

 })

 const navLinks = document.querySelectorAll('.nav a'); 
 

 navLinks.forEach(function(link){
    link.addEventListener('click', function(){
               
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');


    })
 })


 const searchForm = document.querySelector('.search');
 const searchButton = document.querySelector('.search__button');

 searchButton.addEventListener('click', function(event){
    event.preventDefault();
    searchForm.classList.toggle('search--visible');

 });
 



 /*carousel*/

 /*$(document).ready(function(){
    $("#clients-slider").owlCarousel({
        items: 1
    });
  });*/


  $(document).ready(function () {
const owl = $('#clients-slider');
owl.owlCarousel({
    items: 1,
    loop:3
});
   
const prev = $('#prev');
const next = $('#next');

prev.click(function(){
    owl.trigger('prev.owl.carousel');

})
next.click(function(){
    owl.trigger('next.owl.carousel');

  });

}); 

