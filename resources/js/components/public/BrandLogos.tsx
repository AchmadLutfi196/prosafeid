import React from 'react';

interface BrandLogoProps {
    name: string;
    className?: string;
}

export default function BrandLogo({ name, className = 'h-8 w-auto' }: BrandLogoProps) {
    const brandName = name.toLowerCase();

    let logoSrc = '';

    if (brandName.includes('pertamina')) {
        logoSrc = '/images/clients/pertamina.svg';
    } else if (brandName.includes('pln')) {
        logoSrc = '/images/clients/pln.svg';
    } else if (brandName.includes('telkom')) {
        logoSrc = '/images/clients/telkom.png';
    } else if (brandName.includes('astra')) {
        logoSrc = '/images/clients/astra.svg';
    } else if (brandName.includes('semen')) {
        logoSrc = '/images/clients/semen.svg';
    } else if (brandName.includes('freeport')) {
        logoSrc = '/images/clients/freeport.svg';
    } else if (brandName.includes('chevron')) {
        logoSrc = '/images/clients/chevron.svg';
    } else if (brandName.includes('adaro')) {
        logoSrc = '/images/clients/adaro.png';
    } else if (brandName.includes('asam') || brandName.includes('ptba')) {
        logoSrc = '/images/clients/bukitasam.png';
    } else if (brandName.includes('medco')) {
        logoSrc = '/images/clients/medco.png';
    }

    if (logoSrc) {
        return (
            <img 
                src={logoSrc} 
                alt={name} 
                className={`${className} object-contain transition-all duration-300`}
            />
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
