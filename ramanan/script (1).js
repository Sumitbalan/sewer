gsap.registerPlugin(ScrollTrigger);

// Hero text typing effect + subtle pulse
gsap.from(".hero-content h1 span", {
  opacity: 0, x: -50, duration: 1, ease: "power3.out", stagger: 0.05
});
gsap.to(".hero-section", {
  "--pulse-size": "1.05",
  duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut"
});

// Projects: fade-in & move up with stagger
gsap.utils.toArray(".project-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 50, opacity: 0, duration: 0.8, ease: "power2.out"
  });
});

// Skills: radial swirl-in animation
gsap.from(".skills-list li", {
  scrollTrigger: {
    trigger: ".skills-list",
    start: "top 80%"
  },
  scale: 0, rotation: 360, opacity: 0,
  duration: 1, ease: "back.out(1.7)", stagger: 0.1
});

// Scroll-pinned section titles with scale effect
gsap.to(".section-title", {
  scrollTrigger: {
    trigger: ".section-title",
    start: "top center",
    end: "+=150",
    pin: true,
    scrub: true
  },
  scale: 1.05, opacity: 1
});