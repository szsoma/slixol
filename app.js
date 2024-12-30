/**
  * █▀▀ █░░ █░█ █ █▀▄   █░█░█ █▀▀ █▄▄ █▀▀ █░░ █▀█ █░█░█   ░░█ █▀
  * █▀░ █▄▄ █▄█ █ █▄▀   ▀▄▀▄▀ ██▄ █▄█ █▀░ █▄▄ █▄█ ▀▄▀▄▀   █▄█ ▄█
  * █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀▀ █▀█   ▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀
  * ▄█ ░█░ █▀█ █▀▄ ░█░ ██▄ █▀▄   ░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄
*/
// Variable for checking if dev server is running
const parceled = true

// Initialize Parcel.js with Webflow | Don't forget to delete or comment this line after project setup! ;) 
//alert('Your Parcel.js based Webflow development environment is up and running! 👍');

// Import custom styles
import "./src/styles/style.css";

// Import global scripts
import initLenis from "./src/global/lenis";
initLenis();

import nav from "./src/global/nav";
nav();

import footer from "./src/global/footer";
footer();

import addAnimation from "./src/global/main";
addAnimation();

// Import page-specific scripts
import home from "./src/pages/home/home";
import work from "./src/pages/work/work";

var options = {
  animate: true,
  patternWidth: 100,
  patternHeight: 100,
  grainOpacity: 0.06,
  grainDensity: .6,
  grainWidth: 1,
  grainHeight: 1
};

grained("#grain", options);


  // Function to initialize page-specific scripts
  const initializePageScripts = () => {
    const pages = [
      { className: 'body--home', initFunction: home },
      { className: 'body--work-t', initFunction: work },
    ];

    const body = document.querySelector('body');

    if (!body) {
      console.error("Error: <body> element not found in the DOM.");
      return;
    }

    pages.forEach(page => {
      if (body.classList.contains(page.className)) {
        try {
          page.initFunction();
        } catch (error) {
          console.error(`Error initializing script for ${page.className}:`, error);
        }
      }
    });
  };

  initializePageScripts();

// TODO: Import and register GSAP plugins in the relevant function files
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger, Flip);
