import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

export default function timeline() {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    let track = document.querySelectorAll(".track_timeline");
    if (!track) {
        console.error("Error: '.track_timeline' element not found in the DOM.");
        return;
    }

    // Mobile version animation for brand stages
    if (window.matchMedia("(max-width: 768px)").matches) {
        const brandStages = document.querySelectorAll(".works_inner");
        // GSAP animation
        gsap.to(brandStages, 
        {
        y: "0", 
        scrollTrigger: {
            trigger: track,
            start: "top top", // Start when the workTrack section enters the viewport
            end: "bottom top", // End when the workTrack section leaves the viewport
            scrub: true,
        },
        });
    }

    gsap.fromTo( "#rect",
    { xPercent: -100 },
    {
        xPercent: 0, 
        scrollTrigger: {
            trigger: track,
            start: "top 27%", // Start animation when '.timeline_track' reaches the top
            end: "bottom bottom", // End animation when '.timeline_track' exits the viewport
            scrub: true,
            once: true
        }
    }
    );
    
    // Select all .timeline_stages-item elements
    let stages = gsap.utils.toArray(".timeline_stages-item");

    if (stages.length === 0) {
        console.error("Error: No .timeline_stages-item elements found.");
        return;
    }

    // Calculate scroll percentages dynamically
    let scrollSteps = 28 / (stages.length - 1); // Space each stage evenly until 75%

    // Create ScrollTrigger animations for each stage
    stages.forEach((stage, index) => {
        let startPercent = index * scrollSteps; // Start percentage for this stage
        let endPercent = startPercent + scrollSteps; // End percentage for smooth transition

        gsap.fromTo(
            stage,
            { autoAlpha: 0.3 }, // Initial opacity
            {
                autoAlpha: 1, // Final opacity
                duration: 0.4,
                scrollTrigger: {
                    trigger: track,
                    start: `${startPercent}% top`, // Start of animation
                    end: `${endPercent}% top`, // Smooth transition
                    scrub: .6,
                    once: true
                },
            }
        );
        index++;
    });
  
}