import tippy from 'tippy.js';
import '../../../node_modules/tippy.js/dist/tippy.css';

export default function addTooltip() {
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
    tippy('.testimonial_heading-span', {
        content: tooltipContent,
        allowHTML: true, // Allows HTML content
        theme: 'slixol', // Use the default Tippy.js theme (optional, as it's default)
        placement: 'top', // Tooltip appears above the element
        animation: 'scale', // Smooth scaling animation
    });
}
