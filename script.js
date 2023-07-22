gsap.to("#nav", {
    backgroundColor: "#000",
    duration : 0.5,
    // delay : 1 
    height: "120px",
    scrollTrigger : {
        trigger: "#nav",
        scroller: "body"
    }
})