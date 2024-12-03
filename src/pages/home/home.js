// Import home scripts
import logoproof from "./logoproof";
import addUnifiedAnimation from "./bentoInteraction";
export default function home()
{
    logoproof();
    document.addEventListener("DOMContentLoaded", () => {
        addUnifiedAnimation();
      });
    console.log("hello home");   // -- Check if it is okay
    // console.log(ScrollTrigger)   // -- Check if it is okay
}