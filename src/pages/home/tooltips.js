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
        <span style="display: block; font-size: 0.9rem; color: #555;">Konsport Hungary</span>
    </div>
    `;

    const tooltipContent2 = `
    <div style="padding-bottom: 1.5rem;">
        <p style="margin: 0; font-size: 1rem;">
        Minden honlap elkészítése más és más jellegű kihívást jelent. Minden cég azt szeretné, ha az üzleti elképzelése, a piacnak szóló üzenetei egyedi, kreatív módon lennének bemutatva a weboldalán keresztül. Ebben és a precíz, pontosan ütemezett fejlesztő munkában teljesen megbízható partner a slixol.
        </p>
        <strong style="display: block; margin-top: 0.5rem;">Görbe Ferenc</strong>
        <span style="display: block; font-size: 0.9rem; color: #555;">Dinoxsed</span>
    </div>
    `;
    const tooltipContent3 = `
    <div style="padding-bottom: 1.5rem;">
        <p style="margin: 0; font-size: 1rem;">
         Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        </p>
        <strong style="display: block; margin-top: 0.5rem;">John Doe</strong>
        <span style="display: block; font-size: 0.9rem; color: #555;">Lorem ipsum</span>
    </div>
    `;

    // Initialize Tippy.js on the #testimonial-1 element
    tippy('.testimonial_heading-span.is-1', {
        content: tooltipContent,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top',
        arrow: true,
        animation: 'scale-subtle', 
    });
    tippy('.testimonial_heading-span.is-2', {
        content: tooltipContent2,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top', 
        arrow: true,
        animation:'scale-subtle'
    });
    tippy('.testimonial_heading-span.is-3', {
        content: tooltipContent3,
        allowHTML: true,
        theme: 'slixol', 
        placement: 'top',
        arrow: true,
        animation:'scale-subtle'
    });
}
