function animateLogo() {

  TweenMax.fromTo("#move",4, {
    // from
    css: {
      //top: "-30px",
      y: "-30px",// 使用 CSS3 transform,利用 GPU 加速
    }
  },{
    // to
    css: {
      //top: "30px",
      y: "30px",
    },

    // 永久重复动画的选项
    repeat: -1,

    // 反转、重新运行动画的选项
    yoyo: true,

    // 改变 easing 的默认 easeOut类型
    ease: Power2.easeInOut,
  }
);
}
function animateRobot() {
  var t = new TimelineMax({yoyo: true, repeat: -1});
t.to("#android-robot",2,{x: -400})
  .to("#android-robot",0.5,{rotation: "360deg"})
  .to("#android-robot",1,{y: -100})
  .to("#android-robot",0.5,{rotation: "-=50deg"})
  .to("#android-robot",0.5,{rotation: "50deg"})
  .to("#android-robot",0.5,{rotation: "-=50deg"})
  .to("#android-robot",0.5,{rotation: "50deg"})
  .to("#android-robot",2,{x: -20})
  .to("#android-robot",2,{y: 100})
  .to("#android-robot",0.5,{rotation: "-=360deg"});
}


window.onload = function() {
  animateLogo();
  animateRobot();
};


// var deg360 = 2*Math.PI;
// var $logo = document.getElementById("move");

// // 每秒做 60 个记号。把它当做计算当前时间的计数器。
// var tick = 0;
// function draw() {
//   var second = tick / 60;

//   // 计算当前位置
//   var y = Math.sin(second * deg360) * 100/3;
//   $logo.style.top = y + "px"; //结合css  position: relative;
//   tick++;

//   // 设置一个计时器在 
//   setTimeout(draw,100);
// }


// setTimeout(draw,100);