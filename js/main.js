function navbarAutohideWhenBurgermenuDisplayed() {
  // add padding top to show content behind navbar
  // $("body").css("padding-top", $(".navbar").outerHeight() + "px");

  var last_scroll_top = 0;
  $(window).on("scroll", function () {
    if ($(".navbar-toggle").css("display") === "none") return;
    console.log(" window.innerWidth;", window.innerWidth);
    var scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
      setTimeout(() => {
        forkMeOnGithubRibbonAdjustPosition();
      }, 700);
    } else {
      $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
      setTimeout(() => {
        forkMeOnGithubRibbonAdjustPosition();
      }, 700);
    }
    last_scroll_top = scroll_top;
  });
}

function reportWindowSize() {
  forkMeOnGithubRibbonAdjustPosition();
}

function initOnWindowResize() {
  window.addEventListener("resize", reportWindowSize);
}

function forkMeOnGithubRibbonAdjustPosition() {
  var element = document.getElementById("menu");
  var y = element.getBoundingClientRect().bottom;
  var element = document.getElementById("fork-me-on-github");
  element.style.transform = "translateY(" + y + "px)";
}

function main() {
  (function () {
    "use strict";

    initOnWindowResize();
    forkMeOnGithubRibbonAdjustPosition();

    $("a.page-scroll").click(function (e) {

      var isMoreEdgeNeeded = 
        $(e.currentTarget).is("#link-to-second-screen-demo-video")
        ||
        $(e.currentTarget).is("#link-to-what-is-display-dummy-plug")
      var minusOnTop = isMoreEdgeNeeded ? 120 : 20;
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - minusOnTop,
            },
            900
          );
          return false;
        }
      }
    });

    $("body").scrollspy({
      target: ".navbar-default",
      offset: 80,
    });

    navbarAutohideWhenBurgermenuDisplayed();

    // Hide nav on click
    $(document).ready(function (e) {
      $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
          $(".navbar-collapse").collapse("hide");
        }
      });
    });

    // Nivo Lightbox
    $(".howtos-item a").nivoLightbox({
      effect: "slideDown",
      keyboardNav: true,
    });
  })();
}

$("document").ready(function () {
  main();

  var donatePatreonBtn = document.getElementById("donate-patreon-button");
  donatePatreonBtn.addEventListener("click", function () {
    window.open("https://www.patreon.com/deskreen/", "_blank");
    win.focus();
  });
  var donatePatreonBtnInContributeSection = document.getElementById(
    "donate-patreon-button-contribute-section"
  );
  donatePatreonBtnInContributeSection.addEventListener("click", function () {
    window.open("https://www.patreon.com/deskreen/", "_blank");
    win.focus();
  });

  var pavlobuCopyright = document.getElementById("pavlobu-copyright");
  pavlobuCopyright.innerHTML = pavlobuCopyright.innerHTML + " " + new Date().getFullYear()
});
