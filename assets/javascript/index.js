
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


