const body = document.querySelector("body");
const btnMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".menuSection");
const imgMe = document.querySelector(".imgMe");
const headName = document.querySelector("section.head div");
const socials = document.querySelector(".socials");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  document.querySelector(".menuSection .btnAbout").classList.toggle("active");
  document.querySelector(".menuSection .btnImprove").classList.toggle("active");
  document
    .querySelector(".menuSection .btnPortfolio")
    .classList.toggle("active");
  document.querySelector(".menuSection .btnContact").classList.toggle("active");

  const hideMe = () => {
    imgMe.classList.add("active");
  };

  const showMe = () => {
    imgMe.classList.remove("active");
  };

  if (mobileMenu.classList.contains("active")) {
    hideMe();
  } else {
    showMe();
  }
});

const pageStart = () => {
  setTimeout(function() {
    body.style.opacity = "1";
  }, 300);
};

$(document).ready(function() {
  $("body").addClass("active");
  $(".menu").addClass("active");
  $("section.head div").addClass("active");
  $(".imgMe").addClass("active");
  $(".socials").addClass("active");
});

$(".btnAbout").click(function() {
  $(".menuSection").removeClass("active");
  $(".btnAbout").removeClass("active");
  $(".btnImprove").removeClass("active");
  $(".btnPortfolio").removeClass("active");
  $(".btnContact").removeClass("active");
  $(".imgMe").removeClass("active");
  document.querySelector("input").checked = false;
  $("html,body").animate(
    {
      scrollTop: $(".about").offset().top
    },
    "slow"
  );
  $();
});

$(".btnImprove").click(function() {
  $(".menuSection").removeClass("active");
  $(".btnAbout").removeClass("active");
  $(".btnImprove").removeClass("active");
  $(".btnPortfolio").removeClass("active");
  $(".btnContact").removeClass("active");
  $(".imgMe").removeClass("active");
  document.querySelector("input").checked = false;
  $("html,body").animate(
    {
      scrollTop: $(".skills").offset().top
    },
    "slow"
  );
  $();
});

$(".btnPortfolio").click(function() {
  $(".menuSection").removeClass("active");
  $(".btnAbout").removeClass("active");
  $(".btnImprove").removeClass("active");
  $(".btnPortfolio").removeClass("active");
  $(".btnContact").removeClass("active");
  $(".imgMe").removeClass("active");
  document.querySelector("input").checked = false;
  $("html,body").animate(
    {
      scrollTop: $(".portfolio").offset().top
    },
    "slow"
  );
  $();
});

$(".btnContact").click(function() {
  $(".menuSection").removeClass("active");
  $(".btnAbout").removeClass("active");
  $(".btnImprove").removeClass("active");
  $(".btnPortfolio").removeClass("active");
  $(".btnContact").removeClass("active");
  $(".imgMe").removeClass("active");
  document.querySelector("input").checked = false;
  $("html,body").animate(
    {
      scrollTop: $(".contact").offset().top
    },
    "slow"
  );
  $();
});

function formValid() {
  let title = document.forms["mailForm"]["dtitle"];
  let email = document.forms["mailForm"]["demail"];
  let message = document.forms["mailForm"]["dmessage"];

  if (title.value == "") {
    window.alert("Proszę podać temat wiadomości.");
    title.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Proszę podać adres e-mail.");
    email.focus();
    return false;
  }

  if (email.value.indexOf("@", 0) < 0) {
    window.alert("Proszę podać poprawny adres e-mail.");
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
    window.alert("Proszę podać poprawny adres e-mail.");
    email.focus();
    return false;
  }

  if (message.value == "") {
    window.alert("Proszę wpisać treść wiadomości.");
    message.focus();
    return false;
  }

  return true;
}
