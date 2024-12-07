// Import home scripts
import logoproof from "./logoproof";
import addUnifiedAnimation from "./bentoInteraction";
import timeline from "./timeline";
import addTooltip from "./tooltips";

export default function home()
{
    logoproof();
    timeline();
    addTooltip();
    document.addEventListener("DOMContentLoaded", () => {
        addUnifiedAnimation();
      });
    console.log("hello home");   // -- Check if it is okay
    // console.log(ScrollTrigger)   // -- Check if it is okay
}