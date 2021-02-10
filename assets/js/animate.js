startupAnimation();

function startupAnimation(){
    tl = gsap.timeline({defaults: {ease: "sine"}});

    tl.to(".animation2", {opacity:0, duration: 2, delay: 1});
    tl.to(".animation2", {display:"none", duration: 0.1,});
    tl.to(".animation1", {width: "0%", duration: 4});
    tl.to(".animation3", {width: "0%", duration: 4}, "-=4");
    tl.to(".animation1", {display:"none", duration: 0.1});
    tl.to(".animation3", {display:"none", duration: 0.1}, "-=0.1");
}

window.addEventListener('click', function(){
    tl = gsap.timeline({defaults: {ease:"none"}});

    tl.to(".animation1", {display:"block", borderRadius:"0%", duration: 0.1});
    tl.to(".animation3", {display:"block", borderRadius:"0%", duration: 0.1}, "-=0.1");

    tl.to(".animation1", {width: "50%", duration: 4});
    tl.to(".animation3", {width: "50%", duration: 4}, "-=4");

    tl.to(".animation1", {width: "0%", duration: 4});
    tl.to(".animation3", {width: "0%", duration: 4}, "-=4");
    tl.to(".animation1", {display:"none", duration: 0.1});
    tl.to(".animation3", {display:"none", duration: 0.1}, "-=0.1");

})

