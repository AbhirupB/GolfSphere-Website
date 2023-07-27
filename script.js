/*
whenever the mouse moves, this event listener prints hie on the console.

document.addEventListener("mousemove",function(){
    console.log("hie");
})

what events occur when the mouse moves is listed on the console. 
dets is just an argument, you can any other meaningful name

document.addEventListener("mousemove",function(dets){
    console.log(dets);
    console.log(dets.x);    prints the positions of the x-axis when the mouse moves in x-axis.
    console.log(dets.y);    prints the positions of the y-axis when the mouse moves in y-axis.
})
*/

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});
// -150 is done to align the x-axis and y -axis movement of the blur-cursor and the cursor. 

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

/*the command below selects multiple items together, in this case, 
nav items and then prints a NodeList that comprises info about each h4 item.
if we use just querySelector, only the first h4 would have been captured.

var h4all = document.querySelectorAll("#nav h4")
console.log(h4all);

the command below captures each h4 first and their treats each as an elem.
it prints the all the nav item names and info.

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    console.log(elem)
})

}

*/

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {

    //whenever an elem is selected, the cursor size(scale) and style changes.
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });

    //whenever the mouse pointer stops hovering over a nav elem, change the cursor styles.
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #18b085";
        crsr.style.backgroundColor = "#18b085";
    });
});


gsap.from("#about-us img, #about-us-in", {
    y: 90,  //come up from the y-axis.
    opacity: 0, //initially they are not seen, they become more opaque according to duration.
    duration: 1,    //scroll effect for 1 sec
    stagger: 0.4,   //elements come one-by-one
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});


gsap.from(".card", {
    scale: 0.8, //size will increase as we scroll and become normal. Initially 0.8times the original scale.
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});


gsap.from("#colon1", {
    y: -70, //move downwards
    x: -70, //move rightwards

    //the effect takes place when we scroll the body and the colon is found.
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});


gsap.from("#colon2", {
    y: 70,  //move upwards
    x: 70,  //move leftwards

    //the effect takes place when we scroll the body and the colon is found.
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});


gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.getElementById("arrow");
  
    scrollArrow.addEventListener("click", function () {
      const page2 = document.getElementById("page2");
      page2.scrollIntoView({ behavior: "smooth" });
    });
  });
  