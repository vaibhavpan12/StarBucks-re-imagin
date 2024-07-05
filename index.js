function mouse3deffect() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll('.layer').forEach(Layer => {

            const speed = Layer.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed) / 500
            const y = (window.innerWidth - e.pageY * speed) / 500
            Layer.style.transform = `translate(${x}px) translate(${y}px)`;
        });

    }
}

function mouse3deffect700() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll('.layer').forEach(Layer => {

            const speed = Layer.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed) / 0
            const y = (window.innerWidth - e.pageY * speed) / 0
            Layer.style.transform = `translate(${x}px) translate(${y}px)`;
        });

    }
}

function gsap760pxwidth() {


    function myFunction(x) {
        if (x.matches) {
            mouse3deffect700()
        } else {
            mouse3deffect()
        }
    }

    // Create a MediaQueryList object
    var x = window.matchMedia("(max-width: 700px)")

    // Call listener function at run time
    myFunction(x);
}

gsap760pxwidth()

// mousemoving effect Close

function gsapanimation700width() {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "0% 95%",
            end: "70% 50%",
            scrub: 1,
            // markers:true

        }
    })
    tl1.to("#coffe-cup", {
        top: "45rem",
    },)
}





// GSAP start Animation
function gsap1699width() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "50% 95%",
            end: "70% 50%",
            scrub: 1,

        }
    })
    tl.to(".coffe-name , .coffee-text", {
        bottom: "102%",
        opacity: 0

    }, 0)


    tl.to("#coffe-cup", {
        top: "150%",
        left: "70%",
        width: "500px"
    }, 0.1)
    tl.to(".bottm-leaf", {
        top: "275%",
        left: "72%",
    }, 0.2)
    tl.to(".kiwi-name-side", {

        top: "150%",
        left: "55%",
        width: "500px"
    }, 0.2)
    tl.to(".kiwi-upper", {

        top: "170%",
        right: "70%",
        width: "400px"
    }, 0.2)



    // From 
    tl.from(".left-side", {
        top: "100rem",
        opacity: 0

    }, 0.2)


    // Media Queries


    function myFunction(x) {
        // Create a MediaQueryList object

        if (x.matches) {




            tl.to(".coffe-name , .coffee-text", {
                bottom: "102%",
                opacity: 0

            }, 0)


            tl.to("#coffe-cup", {
                top: "180%",
                left: "75%",
                width: "350px"
            }, 0.1)
            tl.to(".bottm-leaf", {
                top: "305%",
                left: "72%",
                zIndex: "10"
            }, 0.2)
            tl.to(".kiwi-name-side", {

                top: "150%",
                left: "55%",
                width: "450px"
            }, 0.2)
            tl.to(".kiwi-upper", {

                top: "170%",
                right: "70%",
                width: "300px"
            }, 0.2)
        } else {
            tl.to(".coffe-name , .coffee-text", {
                bottom: "102%",
                opacity: 0

            }, 0)


            tl.to("#coffe-cup", {
                top: "150%",
                left: "70%",
                width: "500px"
            }, 0.1)
            tl.to(".bottm-leaf", {
                top: "285%",
                left: "72%",
                zIndex: 1,

            }, 0.2)
            tl.to(".kiwi-name-side", {

                top: "150%",
                left: "55%",
                width: "500px"
            }, 0.2)
            tl.to(".kiwi-upper", {

                top: "170%",
                right: "70%",
                width: "400px"
            }, 0.2)
        }
    }


    var x = window.matchMedia("(max-width: 1699px)")
    // Call listener function at run time
    myFunction(x);

}





function gsapanimation700() {


    function myFunction(z) {
        if (z.matches) { // If media query matches
            gsapanimation700width()
        } else {
            gsap1699width()
        }
    }

    // Create a MediaQueryList object
    var z = window.matchMedia("(max-width: 700px)")

    // Call listener function at run time
    myFunction(z);
}

gsapanimation700()




// navbar hamburger
function navrespomsivediv() {
    navres = document.querySelector("#navres")
    rightnav = document.querySelector(".right-nav")
    rightnavbar = document.querySelector("#navul")

    console.log(navres);
    navres.addEventListener("click", function () {
        rightnavbar.style.display = "flex"
        rightnavbar.style.transform = "translatex(0)";
    })
    navres = document.querySelector("#closenavres")
    console.log(navres);
    navres.addEventListener("click", function () {
        rightnavbar.style.transform = "translatex(17rem)";
    })


    if (rightnavbar.style.transform === "translatex(17rem)") {
        rightnavbar.style.display = "none";
    }
    else {
        rightnavbar.style.display = "flex";
    }

}


navrespomsivediv()
