// Import home scripts
import logoproof from "./logoproof";
import addTooltip from "./tooltips";
import setupScrollAnimation from "./workanimaton";
import timeline from "./timeline";

export default function home()
{
    logoproof();
    timeline();
    addTooltip();
    setupScrollAnimation();
    console.log("hello home");   // -- Check if it is okay
}