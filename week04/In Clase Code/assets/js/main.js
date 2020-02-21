//load things first
window.addEventListener("DOMContentLoaded", () => {
  attachEvents();
  let navOffset = $("nav").offset().top;

  //   $(window).scroll(() => {
  //     let scrollPos = $(window).scrollTop();
  //     //console.log(scrollPos);
  //     let stickNavigation = $(".menubar");
  //     stickyMenu(stickNavigation);

  //     function stickyMenu(stick) {
  //       if (scrollPos >= navOffset) {
  //         stick.addClass("fixed");
  //       }
  //     }
  //   });
});

// $(document).ready(() => {
// console.log("It's working")
// });

function attachEvents() {
  // document.getElementsByTagName("a")
  //link.addEventListner('click', ()=> {})

  $("a").click(function() {
    let myTarget = $(this.hash); //on click stores the value in a into a variable
    myTarget = myTarget.length && myTarget;
    console.log(myTarget);
    let targetOffset = myTarget.offset().top;
    $("html, body").animate({ scrollTop: targetOffset }, 100);
  });

  //new syntax
  //   $("a").click(e => {
  //     let myTarget = $(e.target.hash); //on click stores the value in a into a variable
  //     myTarget = myTarget.length && myTarget;
  //     console.log(myTarget);
  //     let targetOffset = myTarget.offset().top;
  //     $("html, body").animate({ scrollTop: targetOffset }, 100);
  //   });
}
