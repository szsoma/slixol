import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function footer() {
    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        let letters = gsap.utils.toArray(document.querySelectorAll(".logo-letter"));
        gsap.fromTo(
            letters,
            { yPercent: 100 },
            {
                yPercent: 0,
                stagger: { each: 0.25 },
                duration: 1.8,
                ease: "quart.out",
                scrollTrigger: {
                    trigger: ".footer_wrap",
                    start: "top center", //.footer_wrap hits the center of the viewport
                    scrub: false,
                },
            }
        );
    });
}
