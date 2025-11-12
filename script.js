// Initialize All
let fixedBox = document.querySelector("#fixed-box")
let fixedimg = document.querySelector("#fixed-box img")
let stripContainer = document.querySelector("#strip-container")
let allStrips = document.querySelectorAll('.strip')
let stripImage = document.querySelector('#strip-img')
let allH3Tag = document.querySelectorAll("#big-text h3")
let paraOfH3 = document.querySelector("#text-div p")
let bigImg = document.querySelector("#img-div img")
let landingTxt = document.querySelector('#landing-div h1')
let landingDiv = document.querySelector('#landing-div')
let full = document.querySelector('#full-scr')
let navBtn = document.querySelector('#mob-nav');
let navImg = document.querySelector('nav img')
let icon1 = document.querySelector('#icon1')
let icon2 = document.querySelector('#icon2')
const lenis = new Lenis();

// All Function
const txtTrigger = () => {

    // STEP 3.1: Animation shuru hote hi scroll lock kar dein
    lenis.stop();

    let txtArr = ['', 'Environment', 'Experiences', 'Content'];
    gsap.set(landingTxt, { autoAlpha: 0 });
    for (let i = 0; i < txtArr.length; i++) {

        setTimeout(() => {

            // (Aapka text blink wala logic...)
            gsap.to(landingTxt, {
                autoAlpha: 0,
                duration: 0.25,
                onComplete: () => {
                    landingTxt.textContent = txtArr[i];
                    gsap.to(landingTxt, {
                        autoAlpha: 1,
                        duration: 0.25
                    });
                }
            });

        }, (1000 * i));
    }

    // STEP 3.2: Jab landing-div upar chala jaaye, tab scroll wapas chalu karein
    gsap.to(landingDiv, {
        yPercent: -100,
        duration: 1,
        delay: 4,
        onComplete: () => {
            lenis.start(); // <-- Yahan scroll unlock hoga
        }
    })
}
const fnxSwipe = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
    });
}
const fullScreenSmoothScroll = () => {
    //continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}
const stripAnimation = () => {
    stripContainer.addEventListener('mouseenter', () => {
        stripImage.removeAttribute('src');
        fixedBox.style.display = 'block'
    })
    stripContainer.addEventListener('mouseleave', () => {
        fixedBox.style.display = 'none'
    })

    allStrips.forEach(strip => {
        strip.addEventListener('mouseenter', () => {
            fixedimg.style.display = 'block'
            let img = strip.getAttribute('data-img')
            stripImage.setAttribute('src', img)

        })
        strip.addEventListener('mouseleave', () => {
            fixedimg.style.display = 'none'
        })
    })
}
const clickAnimation = () => {
    allH3Tag[0].classList.add('active')
    paraOfH3.textContent = allH3Tag[0].getAttribute('data-text')
    allH3Tag.forEach(heading => {
        heading.addEventListener("click", (e) => {

            allH3Tag.forEach(h => {
                h.classList.remove('active')
            })

            e.currentTarget.classList.add('active')

            let imgAdd = e.currentTarget.getAttribute('data-img')
            paraOfH3.textContent = e.currentTarget.getAttribute('data-text')
            bigImg.setAttribute('src', imgAdd)

        })
    })
}
const clicked = () => {
    let i = 0
    navBtn.addEventListener('click', () => {
        if (i == 0) {
            navImg.style.opacity = '0'
            full.style.top = '0'
            icon1.classList.add('active')
            icon2.classList.add('active')
            i = 1;
        } else {
            navImg.style.opacity = '1'
            full.style.top = '-100%'
            icon1.classList.remove('active')
            icon2.classList.remove('active')
            i = 0;
        }
    })
}
// Calling...
fullScreenSmoothScroll()
stripAnimation()
clickAnimation()
fnxSwipe()
clicked()
window.addEventListener('load', () => {
    txtTrigger()
})


