let tl = gsap.timeline();

tl.from(
    "#nav_logo, #nav_options h3, #btn_section h2, #btn_section button", {
        y: -200,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.08
    }
)

tl.from(
    "#section_h1_ev", {
        y: 200,
        opacity: 0,
        duration: 0.4,
        delay:0.4
    }
)
tl.from(
    "#h1_span", {
        y: 200,
        opacity: 0,
        duration: 0.4
    }
)
tl.from(
    "#section_h1_any", {
        y: 200,
        opacity: 0,
        duration: 0.4
    }
)

gsap.from(
    "#img1", {
        x: -200,
        opacity: 0,
        duration: 0.8
    }
)

gsap.from(
    "#img2", {
        y: -200,
        opacity: 0,
        duration: 1
    }
)

gsap.from(
    "#img3", {
        y: 200,
        opacity: -2,
        duration: 1.2
    }
)

tl.from (
    "#scroll_down", {
        scale: 0,
        opacity: 0
    }
)

tl.to (
    "#scroll_down", {
        y:12,
        duration: 1,
        repeat: -1,
        yoyo: true
    }
)