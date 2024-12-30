// Import home scripts
import logoproof from "./logoproof";
import addTooltip from "./tooltips";
import setupScrollAnimation from "./workanimaton";
import timeline from "./timeline";
import nav from "../../global/nav";

export default function home()
{
    logoproof();
    timeline();
    addTooltip();
    setupScrollAnimation();
    nav();
    console.log("hello home");   // -- Check if it is okay
}