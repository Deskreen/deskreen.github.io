function reportWindowSize() {
  forkMeOnGithubRibbonAdjustPosition();
}

function initOnWindowResize() {
  window.addEventListener("resize", reportWindowSize);
}

function forkMeOnGithubRibbonAdjustPosition() {
  var element = document.getElementById("menu");
  var y = element.getBoundingClientRect().bottom;
  var headerElement = document.getElementById("header");
  element = document.getElementById("fork-me-on-github");
  element.style.transform = "translate(" + (headerElement.getBoundingClientRect().width - element.getBoundingClientRect().width) + "px, " + y + "px)";
}

function main() {
  (function () {
    "use strict";

    initOnWindowResize();
    forkMeOnGithubRibbonAdjustPosition();

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

  var langSwitchOverlayElement = document.getElementById(
    "language-switch-overlay"
  );
  var langSwitchElement = document.getElementById("language-switch");
  var donatePatreonBtn = document.getElementById("donate-patreon-button");
  donatePatreonBtn.addEventListener("click", function () {
    // window.open("https://www.patreon.com/deskreen/", "_blank");
    window.open("https://twitter.com/Ukraine/status/1497294840110977024", "_blank");
    win.focus();
  });
  var donatePatreonBtnInContributeSection = document.getElementById(
    "donate-patreon-button-contribute-section"
  );
  donatePatreonBtnInContributeSection.addEventListener("click", function () {
    // window.open("https://www.patreon.com/deskreen/", "_blank");
    window.open("https://twitter.com/Ukraine/status/1497294840110977024", "_blank");
    win.focus();
  });
  var contributeOnGithubBtnInContributeSection = document.getElementById(
    "contribute-on-contribute-section"
  );
  contributeOnGithubBtnInContributeSection.addEventListener(
    "click",
    function () {
      window.open("https://github.com/pavlobu/deskreen", "_blank");
      win.focus();
    }
  );

  langSwitchOverlayElement.addEventListener("click", function () {
    langSwitchOverlayElement.style.display = "none";
    langSwitchElement.style.display = "none";
  });

  var pavlobuCopyright = document.getElementById("pavlobu-copyright");
  pavlobuCopyright.innerHTML =
    pavlobuCopyright.innerHTML + " " + new Date().getFullYear();

  var toggleLanguageSwitch = document.getElementById(
    "open-toggle-language-switch"
  );
  toggleLanguageSwitch.addEventListener("click", function (e) {
    e.preventDefault();
    langSwitchElement.style.display = "block";
    langSwitchOverlayElement.style.display = "block";
  });
});
