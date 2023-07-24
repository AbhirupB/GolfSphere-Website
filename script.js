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

// -150 is done to align the x-axis and y -axis movement of the blur-cursor and the cursor. 
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    // delay : 3, 
    height: "130px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2.5
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -70%%",
        scrub: 1
    },
});