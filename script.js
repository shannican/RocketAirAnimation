gsap.registerPlugin(ScrollTrigger);


function show() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    getDirection: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}


function loader(){
  var load = document.querySelector("#loader");
  var count = document.querySelector("#counter");
  var icon = document.querySelector("#icon")
  var grow = 0;
  setTimeout(function(){
    // load.style.height="0vh"
    // load.style.top="-100%"
    document.querySelector("#main").style.display="initial"
    gsap.to(load,{
      y:"-100%",
    })
    gsap.to(count,{
      y:"-1%",
      opacity:0,
    })
    gsap.to(icon,{
      // y:"-30%",
      opacity:0,
    })
  },4500)
  setInterval(function(){
    if(grow<=100){
      count.innerHTML=`${grow++}%`  
    }  
  }, 40);

}
loader();
gsap.to(icon,{
  rotate:"360deg",
  repeat:3,
  duration:1,
  ease: Power0.easeNone,
})

function settimer(){
  setTimeout(function(){
    show();
    digitalAnimate();
    textAnimate();
    videoSlide();
    playButton();
    workCard2Animation();
    lineAnimate();
    workCard1Animate();
    workCard3Animate();
    cardCircle();
    cardCircle2();
    cardCircle3();
    page8LineAnimate();
    circle();
    page8Round();
    nav();
  },4800)
}
settimer();
function digitalAnimate() {
  gsap.to(".digital", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#video",
      start: "top 70%",
      end: "top 10%",
      scrub: 2,
    },
    opacity: 0,
    ease: Expo,
  });
}
function textAnimate() {
  document.querySelectorAll(".rowtxt").forEach(function (row) {
    row.innerHTML = `<div class="textwrapper">${row.innerHTML}</div>`;
  });
  document.querySelectorAll(".textwrapper").forEach((txt) => {
    let clutter = "";
    txt.textContent.split(" ").forEach((wrd) => {
      clutter += `<span>${wrd}</span>`;
    });
    txt.innerHTML = clutter;
  });
  gsap.set(".rowtxt span", { y: "200%" });
  document.querySelectorAll(".rowtxt").forEach(function (elem) {
    gsap.from(elem, {
      scrollTrigger: {
        scroller: "#main",
        trigger: elem,
        start: "top 60%",
        scrub: 2,
      },
      onStart: function () {
        gsap.to(elem.children[0].children, {
          y: 0,
          ease: Power4,
          duration: 0.4,
          stagger: 0.3,
        });
      },
    });
  });
}
function videoSlide() {
  let allSlides = document.querySelectorAll(".sld");
  allSlides = [...allSlides];

  var isHovered = null;
  allSlides.forEach(function (elem) {
    elem.addEventListener("mouseover", function (dets) {
      isHovered = "#opener" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "100%";
    });
    elem.addEventListener("mouseleave", function (dets) {
      isHovered = "#opener" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "0%";
    });
  });
  document
    .querySelector(".circular")
    .addEventListener("mousemove", function (dets) {
      var bndrectvals = document
        .querySelector(".circular")
        .getBoundingClientRect();
      var xVal = dets.clientX - bndrectvals.x;
      var yVal = dets.clientY - bndrectvals.y;
      document.querySelector("#minicircle").style.top = yVal + "px";
      document.querySelector("#minicircle").style.left = xVal + "px";
      document.querySelector("#minicircle").style.boxShadow =
        "0 0 5px 5px yellow";
    });
  document
    .querySelector(".circular")
    .addEventListener("mouseleave", function (dets) {
      document.querySelector("#minicircle").style.top = 50 + "%";
      document.querySelector("#minicircle").style.left = 50 + "%";
      document.querySelector("#minicircle").style.boxShadow = "none";
    });
}
function playButton() {
  var videoPlay = document.querySelector("#content #video");
  videoPlay.addEventListener("mousemove", function (dets) {
    var bndrectvals2 = document
      .querySelector("#content #video")
      .getBoundingClientRect();
    var topVal = dets.clientY - bndrectvals2.y;
    var leftVal = dets.clientX - bndrectvals2.x;
    document.querySelector("#play-button").style.top = topVal + "px";
    document.querySelector("#play-button").style.left = leftVal + "px";
    document.querySelector("#play-button").style.width = "150px";
    document.querySelector("#play-button").style.height = "150px";
    document.querySelector("#video #play-button p").style.display = "initial";
    // document.querySelector("#play-button").style.transform="scaleX(1)"
    // document.querySelector("#play-button").style.left=`${dets.X}px`;
    // document.querySelector("#play-button").style.top=`${dets.Y}px`;
  });
  videoPlay.addEventListener("mouseleave", function (dets) {
    document.querySelector("#play-button").style.width = "0px";
    document.querySelector("#play-button").style.height = "0px";
    document.querySelector("#play-button").style.top = "50%";
    document.querySelector("#play-button").style.left = "50%";
    document.querySelector("#video #play-button p").style.display = "none";
  });
}
function workCard1Animate() {
  gsap.to("#page7 #card1", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page7",
      start: "top 40%",
      scrub: 2,
    },
    top: "-100%",
    ease: Power4,
    stagger: 0.08,
  });
}
function workCard2Animation() {
  gsap.to("#page7 #card2", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page7",
      start: "top 25%",
      scrub: 2,
    },
    top: "-100%",
    ease: Power4,
    stagger: 0.08,
  });
}
function workCard3Animate() {
  gsap.to("#page7 #card3", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page7",
      start: "top 27%",
      scrub: 2,
    },
    top: "-100%",
    ease: Power4,
    stagger: 0.08,
  });
}
function cardCircle() {
  var imgCircle = document.querySelector("#page7 #card1 #img1");
  imgCircle.addEventListener("mousemove", function (dets) {
    var crlBndRect = document
      .querySelector("#page7 #card1 #img1")
      .getBoundingClientRect();
    var topCursor = dets.clientY - crlBndRect.y;
    var leftCursor = dets.clientX - crlBndRect.x;
    document.querySelector("#page7 #card1 #img1 #view-circle").style.top =
      topCursor + "px";
    document.querySelector("#page7 #card1 #img1 #view-circle").style.left =
      leftCursor + "px";
    document.querySelector("#page7 #card1 #img1 #view-circle").style.width =
      "130px";
    document.querySelector("#page7 #card1 #img1 #view-circle").style.height =
      "130px";
    document.querySelector("#card1 #img1 #view-circle a").style.display =
      "initial";
    document.querySelector("#page7 #card1 #img1").style.height = "61vh";
    document.querySelector("#page7 #card1 p").style.top = "3%";
    document.querySelector("#page7 #work-text").style.color =
      "rgba(223, 212, 200, 0.908)";
  });
  imgCircle.addEventListener("mouseleave", function () {
    document.querySelector("#page7 #card1 #img1 #view-circle").style.width =
      "0px";
    document.querySelector("#page7 #card1 #img1 #view-circle").style.height =
      "0px";
    document.querySelector("#card1 #img1 #view-circle a").style.display =
      "none";
    document.querySelector("#page7 #card1 #img1").style.height = "65vh";
    document.querySelector("#page7 #card1 p").style.top = "11%";
    document.querySelector("#page7 #work-text").style.color = "#000";
  });
}
function cardCircle2() {
  var imgCircle = document.querySelector("#page7 #card2 #img2");
  imgCircle.addEventListener("mousemove", function (dets) {
    var crlBndRect = document
      .querySelector("#page7 #card2 #img2")
      .getBoundingClientRect();
    var topCursor = dets.clientY - crlBndRect.y;
    var leftCursor = dets.clientX - crlBndRect.x;
    document.querySelector("#page7 #card2 #img2 #view-circle2").style.top =
      topCursor + "px";
    document.querySelector("#page7 #card2 #img2 #view-circle2").style.left =
      leftCursor + "px";
    document.querySelector("#page7 #card2 #img2 #view-circle2").style.width =
      "130px";
    document.querySelector("#page7 #card2 #img2 #view-circle2").style.height =
      "130px";
    document.querySelector("#card2 #img2 #view-circle2 a").style.display =
      "initial";
    document.querySelector("#page7 #card2 #img2").style.height = "61vh";
    document.querySelector("#page7 #card2 p").style.top = "3%";
    document.querySelector("#page7 #work-text").style.color =
      "rgba(223, 212, 200, 0.908)";
  });
  imgCircle.addEventListener("mouseleave", function () {
    document.querySelector("#page7 #card2 #img2 #view-circle2").style.width =
      "0px";
    document.querySelector("#page7 #card2 #img2 #view-circle2").style.height =
      "0px";
    document.querySelector("#card2 #img2 #view-circle2 a").style.display =
      "none";
    document.querySelector("#page7 #card2 #img2").style.height = "65vh";
    document.querySelector("#page7 #card2 p").style.top = "11%";
    document.querySelector("#page7 #work-text").style.color = "#000";
  });
}
function cardCircle3() {
  var imgCircle = document.querySelector("#page7 #card3 #img3");
  imgCircle.addEventListener("mousemove", function (dets) {
    var crlBndRect = document
      .querySelector("#page7 #card3 #img3")
      .getBoundingClientRect();
    var topCursor = dets.clientY - crlBndRect.y;
    var leftCursor = dets.clientX - crlBndRect.x;
    document.querySelector("#page7 #card3 #img3 #view-circle3").style.top =
      topCursor + "px";
    document.querySelector("#page7 #card3 #img3 #view-circle3").style.left =
      leftCursor + "px";
    document.querySelector("#page7 #card3 #img3 #view-circle3").style.width =
      "130px";
    document.querySelector("#page7 #card3 #img3 #view-circle3").style.height =
      "130px";
    document.querySelector("#card3 #img3 #view-circle3 a").style.display =
      "initial";
    document.querySelector("#page7 #card3 #img3").style.height = "61vh";
    document.querySelector("#page7 #card3 p").style.top = "3%";
    document.querySelector("#page7 #work-text").style.color =
      "rgba(223, 212, 200, 0.908)";
  });
  imgCircle.addEventListener("mouseleave", function () {
    document.querySelector("#page7 #card3 #img3 #view-circle3").style.width =
      "0px";
    document.querySelector("#page7 #card3 #img3 #view-circle3").style.height =
      "0px";
    document.querySelector("#card3 #img3 #view-circle3 a").style.display =
      "none";
    document.querySelector("#page7 #card3 #img3").style.height = "65vh";
    document.querySelector("#page7 #card3 p").style.top = "11%";
    document.querySelector("#page7 #work-text").style.color = "#000";
  });
}
function lineAnimate() {
  gsap.to("#call-it #line", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#orbital",
      start: "top 95%",
      scrub: 0.2,
    },
    width: "100vw",
    ease: Expo,
  });
}
function page8LineAnimate() {
  gsap.to("#page8 .work-text:nth-child(2) #line", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page8",
      start: "top 60%",
      scrub: 1,
    },
    width: "58vw",
  });
}
function circle() {
  var circleee = document.querySelector("#company-info");
  circleee.addEventListener("mousemove", function (dets) {
    var bndrectvals = document
      .querySelector("#company-info")
      .getBoundingClientRect();
    var xVal = dets.clientX - bndrectvals.x;
    var yVal = dets.clientY - bndrectvals.y;
    document.querySelector("#circle2").style.top = yVal + "px";
    document.querySelector("#circle2").style.left = xVal + "px";
    document.querySelector("#circle2").style.display = "initial";
  });
  circleee.addEventListener("mouseleave", function () {
    document.querySelector("#circle2").style.display = "none";
    document.querySelector("#circle2").style.top = "50%";
    document.querySelector("#circle2").style.left = "50%";
  });
}
function page8Round() {
  gsap.to("#page8 #round", {
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 50%",
      // end: "bottom top",
      // pin: true,
      // scrub: 2,
      // marker: true,
    },
    top: "-55%",
    ease: Power4,
    stagger: 0.05,
    duration:2,
    onComplete: function onComplete () {
      var page8 = document.querySelector("#page8 #round")
      page8.style.backgroundColor="yellow";
      document.querySelector("#page8").style.backgroundColor = "#000";
      document.querySelector("#page8 #wrktxt1").style.color = "#fff";
      document.querySelector("#page8 #wrktxt2").style.color = "#fff";
      document.querySelector("#page8 #wrktxt3").style.color = "#fff";
      document.querySelector("#page8 #wrktxt4").style.color = "#fff";
      page8.style.color="#000";
    },
   
  });
}

function nav() {
  gsap.to("#nav", {
    scrollTrigger: {
      trigger: "#main",
      scroller: "#main",
      start: "top 30%",
      scrub: 1,
    },
    top: "-100%",
    ease: Power4,
    stagger: 0.01,
  });
}


