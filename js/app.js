//animate运动
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

  t.to("#android-robot",1,{rotation: "-30deg"})
   .to("#android-robot",0.5,{rotation: "-60deg"});
}

//SliderControl
function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a")
      // console.log (window.scrollY+"  实时高度");
  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    var sectionId = "#"+link.href.toString().split('#')[1];
    // 获取被链接指向的部分
    var section = document.querySelector(sectionId);
    var sectionTop = (i)*section.offsetHeight;
    var sectionBottom = (i+1)*section.offsetHeight;
      // console.log (sectionTop+"       Top");
      // console.log (sectionBottom+"       Bottom")；
    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}


//平滑滚动
function scrollToElement(section) {

  var topOfElement = section.offsetTop;//当你点击指示器的链接时，浏览器立即跳转到被链接 href 属性定位的部分。
  //console.log(topOfElement)
  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },
    // scrollTo:sectionId 
    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    (function (link) {
            link.addEventListener("click",function(event) {
              // `event` 是鼠标点击事件
              event.preventDefault();
              var href = link.href;
              //console.log(href+"     1024")
              var sectionId = "#"+href.toString().split('#')[1];
              var section = document.querySelector(sectionId);
              scrollToElement(section);
            });
        })(link); //使用闭包或者 ES6 `let` 修复事件侦监听器的 bug 
  }
}

function addScrollMagic() {
  var controller = new ScrollMagic.Controller();
  // TweenMax.to("#iphone-overlay", 1, {width:"50%",y: "100%" } )
  var moveIphone = new ScrollMagic.Scene({
    triggerElement: "#native",
    triggerHook: "onEnter",
    duration: "100%"
  }).addTo(controller)
     // .addIndicators({name: "move iphone"})
    .setTween("#iphone-overlay", 1, {width:"50%",y: "100%" })

  var pinIphone = new ScrollMagic.Scene({
    triggerElement: "#native",
    triggerHook: "onLeave",
    duration: "100%"
  }).addTo(controller)
    // .addIndicators({name: "pin iphone"})
    .setPin("#iphone-overlay")
}

window.onscroll = function() {
  updateSliderControl();
}

window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
  addScrollMagic();
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