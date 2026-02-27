/**Tiny inline SVG line chart used in each Live Market row */

export default function SparkLine ({path, color}) {
    return(
        <svg viewBox="0 0 90 30" className="w-20 h-8" aria-hidden="true">
            <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    );
}