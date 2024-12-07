import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Import Tippy.js styles
import 'tippy.js/themes/translucent.css';


export default function addTooltip() {
    // Tooltip content with styled HTML
    const tooltipContent = `
    <div style="padding-bottom: 1.5rem;">
        <p style="margin: 0; font-size: 1rem;">
        Már hónapok óta dolgozunk velük, én csak ajánlani tudom őket! Rengeteg jó ötletük van, amelyek segítségével mindig egy lépéssel közelebb kerülünk a céljaink eléréséhez. Mindenben segítenek, és nem utolsó sorban szinte bármikor elérhetők! Nagy hangsúlyt fektetnek az egyedi igényeinkre, ami hatalmas pluszt jelent a mi szakterületünkön. Profi csapat!
        </p>
        <strong style="display: block; margin-top: 0.5rem;">Norbert Erdélyi</strong>
        <span style="display: block; font-size: 0.9rem; color: #666;">Konsport Hungary</span>
    </div>
    `;

    // Initialize Tippy.js on the #testimonial-1 element
    tippy('#testimonial-1', {
        content: tooltipContent,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top', // Tooltip appears above the element
        animation: 'scale', // Smooth scaling animation
    });

}
