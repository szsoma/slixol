// Import home scripts
import addTooltip from "./tooltips";
import setupScrollAnimation from "./workanimaton";
import timeline from "./timeline";

export default function home()
{
    timeline();
    addTooltip();
    setupScrollAnimation();
}