import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function setupScrollAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const worksItems = Array.from(document.querySelectorAll(".works_item"));
    const workTrack = document.querySelector(".works_track");

    if (window.matchMedia("(min-width: 768px)").matches) {
      // Select all brand stages
      const brandStages = document.querySelectorAll(".works_scrollbar-stage.is-brand");

      // Initially hide all brand stages
      gsap.set(brandStages, { autoAlpha: 0 });

      // GSAP animation
      gsap.to(brandStages, {
        autoAlpha: 1, // Reveal the element
        stagger: 0.2, // Stagger the reveal of each element
        scrollTrigger: {
          trigger: workTrack,
          start: "top top", // Start when the workTrack section enters the viewport
          end: "bottom bottom", // End when the workTrack section leaves the viewport
          scrub: true, // Link animation progress to scroll progress
        },
      });
    }


    if (!worksItems.length || !workTrack) return;

    // Calculate and set the height of .work_track
    const itemHeight = worksItems[0].offsetHeight;
    const trackHeight = (itemHeight * worksItems.length);
    workTrack.style.height = `${trackHeight}px`;

    worksItems.forEach((item, index) => {
      if (index < worksItems.length - 1) {
        const nextItem = worksItems[index + 1];

        gsap.timeline({
          scrollTrigger: {
            trigger: nextItem,
            start: "top 80%", // When the next item enters the viewport
            end: "top top", // When the next item reaches the top
            scrub: 1,
          },
        })
          .to(item, {
            scale: 0.95,
            opacity: 0,
            ease: "power1.inOut",
          });
      }
    });
}