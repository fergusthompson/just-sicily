
  $(".see-more-link").hover(function(){
      console.log("connected");
    $(".see-link-underline").animate({
    width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
  });

  $(".book-now-link").hover(function(){
      console.log("connected");
    $(".book-link-underline").animate({
    width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
  });

  $(".reserve-link").hover(function(){
      console.log("connected");
    $(".reserve-link-underline").animate({
    width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
  });

  $( window ).scroll(function() {
  $( ".about-header-underline" ).animate({
      width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"

  }, 4000);
});

$( window ).scroll(function() {
  $( ".hotels-header-underline" ).animate({
      width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"

  }, 4000);
});

$( window ).scroll(function() {
  $( ".dining-header-underline" ).animate({
      width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"

  }, 4000);
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

/* Open when someone clicks on the span element */
function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
} 


