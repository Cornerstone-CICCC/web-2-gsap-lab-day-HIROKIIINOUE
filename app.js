gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const sectionOneTimeline = gsap.timeline();

sectionOneTimeline
  .from(".content div h1 span:first-child", {
    x: -1500,
    duration: 1,
  })
  .from(
    ".content div h1 span:last-child",
    {
      x: 1500,
      duration: 1,
    },
    "<"
  )
  .from(".content div p", {
    rotate: 40,
    transformOrigin: "left",
    opacity: 0,
    duration: 1,
  })
  .from(".content img", {
    y: 1000,
    duration: 1,
  });

const sectionTwoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 40%",
    end: "top top",
    scrub: true,
  },
});

sectionTwoTimeline
  .from(".section2 div h2 span", {
    y: -500,
    opacity: 0,
    duration: 2,
    stagger: 0.3,
  })
  .from(".section2 div p", {
    rotateY: 120,
    transformOrigin: "center",
    opacity: 0,
    duration: 2,
  });

gsap.from(".section3 div h2", {
  scale: 2,
  x: -600,
  duration: 1,
  scrollTrigger: {
    trigger: ".section3",
    start: "top 40%",
  },
});

const sectionThreeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    pin: true,
    scrub: true,
  },
});

sectionThreeTimeline
  .from(".section3 div p span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
  })
  .to(
    ".section3 div p span",
    {
      color: "black",
      backgroundColor: "white",
    },
    "<"
  )
  .to(".horizontal-sections", {
    x: "-100vw",
    duration: 4,
  })
  .from(
    ".section4 div .portfolio-item",
    {
      x: 1200,
      duration: 2,
      stagger: 1,
      opacity: 0,
    },
    "<"
  );

const contactMessage = document.querySelector(".section5 div h2");
const letters = contactMessage.textContent.split("");
contactMessage.innerHTML = "";
letters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  if (letter === " ") {
    span.innerHTML = "&nbsp;";
  }
  contactMessage.appendChild(span);
});

const sectionFiveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    pin: true,
    scrub: true,
  },
});

sectionFiveTimeline
  .from(".section5 div h2 span", {
    y: -1000,
    opacity: 0,
    stagger: 0.5,
  })
  .from(".section5 div p", {
    y: 100,
    opacity: 0,
  })
  .from(".section5 div button", {
    scale: 0,
  })
  .to(".section5", {
    backgroundColor: "black",
  })
  .from(
    ".section5",
    {
      backgroundPosition: "180% 90%",
      duration: 5,
    },
    "-=2.5"
  );
