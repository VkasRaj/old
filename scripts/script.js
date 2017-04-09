$(document).ready(function () {
  var winH = $(window).height();
  $(".height").css("height", winH );

  $(window).scroll(function () {

    var wscroll = $(window).scrollTop();

    //------------------------- Landing -------------
    $(".combine").css("transform","translate(0%, "+ wscroll / 8 +"%)")
    // $(".social").css("transform","translate("+ wscroll/10 +"%,0%)")

    //------------------------- Footer --------------
    if (wscroll > 1000) {
      $(".up-arrow").css("display","block");
    } else {
      $(".up-arrow").css("display","none");
    }

    // // Add smooth scrolling to all links
    //   $("a").on('click', function(event) {
    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //       // Prevent default anchor click behavior
    //       event.preventDefault();
    //       // Store hash
    //       var hash = this.hash;
    //       // Using jQuery's animate() method to add smooth page scroll
    //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //       $(window).animate({
    //         scrollTop : $(hash).offset().top
    //       }, 800, function(){
    //         // Add hash (#) to URL when done scrolling (default click behavior)
    //         window.location.hash = hash;
    //       });
    //     } // End if
    //   });

  });
});
