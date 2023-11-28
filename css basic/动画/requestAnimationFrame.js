/**
 * @description 
 */
const animationDiv = document.querySelector(".requestAnimationFrameKey");
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
const cancelAnimationFrame =
  window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.msCancelAnimationFrame;
const max = 2000;
const timer = 200;
let start = null,
  myReq = null;
function step(timestamp) {
  let progress = timestamp - start;
  animationDiv.style.left = progress + "px";
  if (progress < max) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
setTimeout(() => {
  cancelAnimationFrame(myReq);
},timer)

