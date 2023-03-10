let button = document.getElementsByClassName("threadd");
let content = document.getElementsByClassName("contt");
const svg = document.querySelector("#my-svg");
const svgTwo = document.querySelector(".secSVG");
const svgThree = document.querySelector(".ThirdSVG");

let seeM = document.querySelector(".seeMore");
let cLM = document.querySelector(".contentShowML");
let clmF = document.querySelector(".contF");

let arrowSideBar = document.querySelector(".bi-arrow-left-circle");

let sidebar = document.querySelector(".sidebar-closed");

let maxLength = 60;

function sideBarF() {
  console.log("hua");
  if (sidebar.style.width == "390px") {
      sidebar.style.width = "130px";
      arrowSideBar.style.transform = "rotate(0)"
    } else {
        sidebar.style.width = "390px";
        arrowSideBar.style.transform = "rotate(180deg)"
  }
}

function change() {
  for (let i = 0; i < content.length; i++) {
    if (content[i].style.height == "0px") {
      content[i].style.height = "360px";
      svg.style.transform = "rotate(0deg)";
    } else {
      svg.style.transform = "rotate(180deg)";
      content[i].style.height = "0px";
    }
  }
}

function lastCardDrop() {
  if (cLM.style.height == "0px") {
    cLM.style.height = "100%";
    svgThree.style.transform = "rotate(0deg)";
  } else {
    cLM.style.height = "0px";
    svgThree.style.transform = "rotate(180deg)";
  }
}

function lastCardDropi() {
  if (clmF.style.height == "0px") {
    clmF.style.height = "100%";
    svgTwo.style.transform = "rotate(0deg)";
  } else {
    clmF.style.height = "0px";
    svgTwo.style.transform = "rotate(180deg)";
  }
}

const fullText = cLM.innerHTML.trim();
const finalText = fullText.slice(0, maxLength);
cLM.innerHTML =
  finalText +
  '<span class="dots">...</span> <span class="more">' +
  fullText.slice(maxLength);

const dots = document.querySelector(".dots");
const moreText = document.querySelector(".more");

function seeMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }

  if (seeM.innerHTML == "Show Less") {
    seeM.innerHTML = "See more";
  } else {
    seeM.innerHTML = "Show Less";
  }
}
