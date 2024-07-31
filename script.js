let tl = gsap.timeline();
let tl2 = gsap.timeline();

tl.from(".logo", {
  opacity: 0,
  y: "-20",
  duration: 0.25,
  delay: 0.3,
});

tl.from(".navElement", {
  opacity: 0,
  y: "-20",
  duration: 0.2,
  delay: 0.1,
  stagger: 0.2,
});

gsap.from(".left__image", {
  opacity: 0,
  x: "-25",
  delay: 0.13,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".right__box", {
  opacity: 0,
  x: "25",
  delay: 0.13,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".both-container", {
  opacity: 0,
  y: "50",
  delay: 2,

  scrollTrigger: {
    trigger: ".chat-bot-container",
    scroller: "body",
    // start: "top 0%",
    end: "top 10%",
    scrub: 2,
    // markers:true,
    pin: false,
  },
});


gsap.from(".talk-us", {
  opacity: 0,
  y: "50",
  delay: 2,

  scrollTrigger: {
    trigger: ".talk-us",
    scroller: "body",
    // start: "top 0%",
    end: "top 10%",
    scrub: 2,
    // markers:true,
    pin: false,
  },
});

gsap.from(".contact", {
  opacity: 0,
  y: "50",
  delay: 2,

  scrollTrigger: {
    trigger: ".contact",
    scroller: "body",
    // start: "top 0%",
    end: "top 10%",
    scrub: 2,
    // markers:true,
    pin: false,
  },
});



// let cursorDot = document.querySelector('[data-cursor-dot]');
let cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // cursorDot.style.left = `${posX}px`;
//   cursorOutline.style.left = `${posX}px`;
  // cursorDot.style.top = `${posY}px`;
//   cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    {
      duration: 200,
      fill: "forwards",
    }
  );
});
