import { gsap } from "gsap";

export function animateWaves() {
  gsap.to("#waveGroup", {
    x: -200,
    duration: 6,
    repeat: -1,
    ease: "linear"
  });
}