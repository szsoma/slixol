import Lenis from "@studio-freight/lenis"; // TODO Add lenis smooth scrolling 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lenis SmoothScroll
function initLenis() {
    "use strict"; // fix lenis in Safari

    // Add a fallback for Webflow
    const isEditor = typeof Webflow !== "undefined" && Webflow.env("editor") === true;

    if (!isEditor) {
        const lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 1,
            infinite: false,
            gestureOrientation: "vertical",
            normalizeWheel: false,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        $("[data-lenis-start]").on("click", function () {
            lenis.start();
        });
        $("[data-lenis-stop]").on("click", function () {
            lenis.stop();
        });
        $("[data-lenis-toggle]").on("click", function () {
            $(this).toggleClass("stop-scroll");
            if ($(this).hasClass("stop-scroll")) {
                lenis.stop();
            } else {
                lenis.start();
            }
        });

        function connectToScrollTrigger() {
            lenis.on("scroll", ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
        }
        // Uncomment this if using GSAP ScrollTrigger
        connectToScrollTrigger();
    }
}

export default initLenis;
