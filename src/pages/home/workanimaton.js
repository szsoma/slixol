import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setupScrollAnimation() {

  document.addEventListener("DOMContentLoaded", () => {
    const worksItems = Array.from(document.querySelectorAll(".works_item"));
    const workTrack = document.querySelector(".works_track");

    if (!worksItems.length || !workTrack) return;

    // Calculate and set the height of .work_track
    const itemHeight = worksItems[0].offsetHeight;
    const trackHeight = itemHeight * worksItems.length;
    workTrack.style.height = `${trackHeight}px`;

    worksItems.forEach((item, index) => {
      if (index < worksItems.length - 1) {
        const nextItem = worksItems[index + 1];

        gsap.timeline({
          scrollTrigger: {
            trigger: nextItem,
            start: "top center", // When the next item enters the viewport
            end: "top top", // When the next item reaches the top
            scrub: true,
          },
        })
          .to(item, {
            scale: 0.8,
            opacity: 0,
            ease: "power2.out",
          });
      }
    });
  });
}