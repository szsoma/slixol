import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale-subtle.css';

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

    const tooltipContent2 = `
    <div style="padding-bottom: 1.5rem;">
        <p style="margin: 0; font-size: 1rem;">
        Már hónapok óta dolgozunk velük, én csak ajánlani tudom őket! Rengeteg jó ötletük van, amelyek segítségével mindig egy lépéssel közelebb kerülünk a céljaink eléréséhez. Mindenben segítenek, és nem utolsó sorban szinte bármikor elérhetők! Nagy hangsúlyt fektetnek az egyedi igényeinkre, ami hatalmas pluszt jelent a mi szakterületünkön. Profi csapat!
        </p>
        <strong style="display: block; margin-top: 0.5rem;">Norbert Erdélyi</strong>
        <span style="display: block; font-size: 0.9rem; color: #666;">Konsport Hungary</span>
    </div>
    `;
    const tooltipContent3 = `
    <div style="padding-bottom: 1.5rem;">
        <p style="margin: 0; font-size: 1rem;">
        Már hónapok óta dolgozunk velük, én csak ajánlani tudom őket! Rengeteg jó ötletük van, amelyek segítségével mindig egy lépéssel közelebb kerülünk a céljaink eléréséhez. Mindenben segítenek, és nem utolsó sorban szinte bármikor elérhetők! Nagy hangsúlyt fektetnek az egyedi igényeinkre, ami hatalmas pluszt jelent a mi szakterületünkön. Profi csapat!
        </p>
        <strong style="display: block; margin-top: 0.5rem;">Norbert Erdélyi</strong>
        <span style="display: block; font-size: 0.9rem; color: #555;">Konsport Hungary</span>
    </div>
    `;

    // Initialize Tippy.js on the #testimonial-1 element
    tippy('.testimonial_heading-span', {
        content: tooltipContent,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top', 
        animation: 'scale-subtle', 
    });
    tippy('.testimonial_heading-span.is-2', {
        content: tooltipContent2,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top', 
        animation:'scale-subtle'
    });
    tippy('.testimonial_heading-span.is-3', {
        content: tooltipContent3,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top',
        animation:'scale-subtle'
    });
}
