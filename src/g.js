import { gsap } from "gsap";

export function animateWaves() {
  const svg = document.querySelector("#waveArea");
  const string = document.querySelector("#string");
  if (!svg || !string) return;

  const baseY = 160;
  const width = 1440;

  let currentY = baseY;
  let pullY = baseY;


  const updatePath = gsap.quickSetter(string, "attr:d");

  function render(y) {
    updatePath(`M 0 ${baseY} Q ${width / 2} ${y} ${width} ${baseY}`);
  }

  svg.addEventListener("mousemove", (e) => {
    const bounds = svg.getBoundingClientRect();
    const y = e.clientY - bounds.top;

    pullY = gsap.utils.clamp(
      baseY - 50,
      baseY + 50,
      y
    );

    gsap.to({ y: currentY }, {
      y: pullY,
      duration: 0.15,
      ease: "power2.out",
      onUpdate() {
        currentY = this.targets()[0].y;
        render(currentY);
      }
    });
  });

  svg.addEventListener("mouseleave", () => {
    gsap.to({ y: currentY }, {
      y: baseY,
      duration: 1.4,
      ease: "elastic.out(1, 0.15)",
      onUpdate() {
        currentY = this.targets()[0].y;
        render(currentY);
      }
    });
  });
}