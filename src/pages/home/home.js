// Import home scripts
import logoproof from "./logoproof";
import addUnifiedAnimation from "./bentoInteraction";
import timeline from "./timeline";

export default function home()
{
    logoproof();
    timeline();
    document.addEventListener("DOMContentLoaded", () => {
        addUnifiedAnimation();
      });
    console.log("hello home");   // -- Check if it is okay
    // console.log(ScrollTrigger)   // -- Check if it is okay
}