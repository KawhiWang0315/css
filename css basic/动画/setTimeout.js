/**
 * @description setInterval 的执行步调和屏幕的刷新步调不一致，从而引起丢帧现象
 * @reason
 * 1- setInterval 的执行时间并不是确定的
 * 2- 刷新频率受屏幕分辨率和屏幕尺寸的影响，因此不同设备的屏幕刷新频率可能会不同。而 setInterval 只能设置一个固定的时间间隔，这个时间不一定和屏幕的刷新时间相同
 *
 */
const TIMER = 16.7;
const MAX = 300;
const animationContainer = document.querySelector(".setTimeout");
let i = 0;
let inter = setInterval(() => {
  animationContainer.style.left = 1/2 * (++i) + '%';
  if(i === MAX){
    clearInterval(inter);
  }
}, 1000);