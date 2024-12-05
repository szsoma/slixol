import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function timeline() {
    // Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Animate the #_clip1 element
gsap.fromTo( "#rect",
  { xPercent: -100 }, // Start at -100% of its width
  {
    xPercent: 0, // Animate to 0%
    scrollTrigger: {
      trigger: ".track_timeline",
      start: "top top", // Start animation when '.timeline_track' reaches the top
      end: "bottom bottom", // End animation when '.timeline_track' exits the viewport
      scrub: true
    },
  }
);

}