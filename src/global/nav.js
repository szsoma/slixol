// jQuery test
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function nav() {
    gsap.registerPlugin(ScrollTrigger);

    // Move .nav_component on entering and leaving .works_section
    gsap.fromTo(
        ".nav_component",
        { y: "0%" },
        {
        y: "-150%",
        scrollTrigger: {
            trigger: ".works_section",
            start: "top top", // Start when .works_section enters the viewport
            end: "bottom top", // End when .works_section leaves the viewport
            toggleActions: "play reverse play reverse", // Reset position on leave
            duration: 0.2
        },
        }
    );
}

export default nav