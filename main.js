"use strict";

var heading = document.querySelector(".heading");
var donate = document.querySelector(".donate");
var fab = document.querySelectorAll(".fab");
var subHeading = document.querySelector(".logo h2");
var tl = new TimelineLite();
tl.from(heading, 0.9, {
  left: "-=60px",
  ease: Back.easeOut
}).staggerFrom("rect", 0.7, {
  width: 0,
  ease: Back.easeOut
}, 0.5, "-=0.8").from(donate, 0.9, {
  autoAlpha: 0
}, "-=0.7").from(subHeading, 0.9, {
  autoAlpha: 0
}, "-=0.7").staggerFrom(fab, .7, {
  top: "-=30px",
  rotation: "-40deg",
  autoAlpha: 0,
  scale: 1.8,
  ease: Back.easeOut
}, 0.2);