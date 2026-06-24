import React from 'react';

interface BrandLogoProps {
    name: string;
    className?: string;
}

export default function BrandLogo({ name, className = 'h-8 w-auto' }: BrandLogoProps) {
    const brandName = name.toLowerCase();

    if (brandName.includes('pertamina')) {
        return (
            <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pertamina Graphic symbol (P-like) */}
                <path d="M12 5 L28 5 L23 18 L12 18 Z" fill="#0072C6" /> {/* Blue top-left */}
                <path d="M12 21 L21 21 L16 35 L12 35 Z" fill="#32CD32" /> {/* Green bottom-left */}
                <path d="M26 14 L38 5 L38 35 L28 35 L28 17 Z" fill="#FF0000" /> {/* Red right */}
                {/* Pertamina Text */}
                <text x="46" y="25" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="13" fill="#001F3F" letterSpacing="0.05em">PERTAMINA</text>
            </svg>
        );
    }

    if (brandName.includes('pln')) {
        return (
            <svg viewBox="0 0 100 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* PLN Logo lightning symbol */}
                <rect x="8" y="4" width="22" height="32" rx="4" fill="#00A2E8" />
                <polygon points="19,10 13,22 18,22 16,30 25,18 20,18" fill="#FFEB3B" />
                {/* PLN Text */}
                <text x="38" y="26" fontFamily="Montserrat, Inter, sans-serif" fontWeight="900" fontSize="18" fill="#001F3F" letterSpacing="0.1em">PLN</text>
            </svg>
        );
    }

    if (brandName.includes('telkom')) {
        return (
            <svg viewBox="0 0 110 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Telkom circle with hand swirl */}
                <circle cx="20" cy="20" r="16" fill="#E21A22" />
                <circle cx="20" cy="20" r="10" fill="#FFFFFF" />
                <path d="M20,10 C26,10 26,20 20,20 C14,20 14,30 20,30 C27,30 30,24 30,20" stroke="#E21A22" strokeWidth="2.5" fill="none" />
                {/* Telkom Text */}
                <text x="42" y="22" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="13" fill="#001F3F" letterSpacing="0.02em">Telkom</text>
                <text x="42" y="32" fontFamily="Montserrat, Inter, sans-serif" fontWeight="500" fontSize="8" fill="#5C5F60" letterSpacing="0.05em">Indonesia</text>
            </svg>
        );
    }

    if (brandName.includes('astra')) {
        return (
            <svg viewBox="0 0 110 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Astra Corporate Hexagon */}
                <polygon points="20,6 32,13 32,27 20,34 8,27 8,13" fill="#0A3E79" />
                <text x="20" y="25" fontFamily="Montserrat, Inter, sans-serif" fontWeight="900" fontSize="16" fill="#FFFFFF" textAnchor="middle">A</text>
                {/* Astra Text */}
                <text x="40" y="25" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="14" fill="#0A3E79" letterSpacing="0.05em">ASTRA</text>
            </svg>
        );
    }

    if (brandName.includes('semen')) {
        return (
            <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Semen Indonesia arch & logo */}
                <path d="M8,28 C8,14 20,10 20,10 C20,10 32,14 32,28" stroke="#003399" strokeWidth="5" fill="none" />
                <circle cx="20" cy="18" r="6" fill="#CC0000" />
                <rect x="17" y="22" width="6" height="10" fill="#003399" />
                {/* Semen Indonesia Text */}
                <text x="40" y="20" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="12" fill="#003399">SEMEN</text>
                <text x="40" y="30" fontFamily="Montserrat, Inter, sans-serif" fontWeight="500" fontSize="9" fill="#CC0000">INDONESIA</text>
            </svg>
        );
    }

    if (brandName.includes('freeport')) {
        return (
            <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Freeport Gold Star & Mountain */}
                <polygon points="20,6 35,32 5,32" fill="#005B82" />
                <polygon points="20,12 28,32 12,32" fill="#D4AF37" />
                {/* Freeport Text */}
                <text x="44" y="20" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="11" fill="#005B82" letterSpacing="0.05em">FREEPORT</text>
                <text x="44" y="30" fontFamily="Montserrat, Inter, sans-serif" fontWeight="600" fontSize="9" fill="#D4AF37" letterSpacing="0.02em">INDONESIA</text>
            </svg>
        );
    }

    if (brandName.includes('chevron')) {
        return (
            <svg viewBox="0 0 110 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chevron Red and Blue V shapes */}
                <g transform="translate(4, 0)">
                    <polygon points="6,8 20,20 34,8 28,8 20,15 12,8" fill="#005C9E" />
                    <polygon points="6,17 20,29 34,17 28,17 20,24 12,17" fill="#D6232A" />
                </g>
                {/* Chevron Text */}
                <text x="44" y="25" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="13" fill="#001F3F" letterSpacing="0.05em">Chevron</text>
            </svg>
        );
    }

    if (brandName.includes('adaro')) {
        return (
            <svg viewBox="0 0 100 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Adaro Teal & Green droplet leaf */}
                <path d="M20,6 C32,18 32,32 20,35 C8,32 8,18 20,6 Z" fill="#008080" />
                <path d="M20,12 C27,20 27,30 20,32 Z" fill="#8FBC8F" />
                {/* Adaro Text */}
                <text x="38" y="25" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="15" fill="#005A5B" letterSpacing="0.05em">adaro</text>
            </svg>
        );
    }

    if (brandName.includes('bukit asam') || brandName.includes('asam')) {
        return (
            <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bukit Asam Energy design */}
                <circle cx="20" cy="20" r="14" fill="#333333" />
                <polygon points="20,10 24,18 16,18" fill="#FF851B" />
                <rect x="18" y="18" width="4" height="10" fill="#FF851B" />
                {/* Bukit Asam Text */}
                <text x="40" y="20" fontFamily="Montserrat, Inter, sans-serif" fontWeight="800" fontSize="11" fill="#111111" letterSpacing="0.05em">BUKIT ASAM</text>
                <text x="40" y="30" fontFamily="Montserrat, Inter, sans-serif" fontWeight="500" fontSize="9" fill="#FF851B" letterSpacing="0.02em">PTBA</text>
            </svg>
        );
    }

    if (brandName.includes('medco')) {
        return (
            <svg viewBox="0 0 110 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Medco Energo arcs */}
                <circle cx="20" cy="20" r="14" stroke="#00A859" strokeWidth="3.5" fill="none" strokeDasharray="65 20" />
                <circle cx="20" cy="20" r="9" stroke="#0072BC" strokeWidth="2.5" fill="none" strokeDasharray="40 15" />
                {/* Medco Text */}
                <text x="40" y="25" fontFamily="Montserrat, Inter, sans-serif" fontWeight="900" fontSize="15" fill="#0072BC" letterSpacing="0.02em">MEDCO</text>
            </svg>
        );
    }

    // Fallback if none of the above matches, return custom high fidelity generic logo
    return (
        <svg viewBox="0 0 100 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="24" height="24" rx="4" fill="#001F3F" />
            <text x="16" y="24" fontFamily="Montserrat, sans-serif" fontWeight="bold" fontSize="12" fill="#FFFFFF" textAnchor="middle">
                {name.substring(0, 2).toUpperCase()}
            </text>
            <text x="34" y="24" fontFamily="Montserrat, sans-serif" fontWeight="bold" fontSize="10" fill="#001F3F">
                {name.length > 8 ? name.substring(0, 8) + '.' : name}
            </text>
        </svg>
    );
}
