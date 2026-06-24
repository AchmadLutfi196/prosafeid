import { useState, useRef, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
    sublabel?: string;
}

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder: string;
    icon?: string;
    required?: boolean;
    name?: string;
}

export default function CustomSelect({
    value,
    onChange,
    options,
    placeholder,
    icon = 'school',
    required = false,
    name
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="relative w-full" ref={containerRef}>
            {/* Hidden Input for Form Submission */}
            <input 
                type="hidden" 
                name={name} 
                value={value} 
                required={required} 
            />
            
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left input-prosafe flex items-center justify-between bg-white relative transition-all duration-200 ${
                    isOpen ? 'border-safety-orange ring-3 ring-safety-orange/15 shadow-sm' : ''
                }`}
                style={{ paddingLeft: '48px', paddingRight: '40px', minHeight: '46px' }}
            >
                {/* Leading Icon */}
                <span 
                    className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                        isOpen || value ? 'text-safety-orange' : 'text-text-secondary'
                    }`}
                >
                    {icon}
                </span>

                {/* Selected Value Text */}
                <span className={`text-sm block truncate ${selectedOption ? 'text-deep-navy font-semibold' : 'text-text-secondary/60'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>

                {/* Trailing Chevron Icon */}
                <span 
                    className={`material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary transition-transform duration-200 pointer-events-none ${
                        isOpen ? 'rotate-180 text-safety-orange' : ''
                    }`}
                >
                    expand_more
                </span>
            </button>

            {/* Dropdown Options List Panel */}
            {isOpen && (
                <div 
                    className="absolute left-0 right-0 mt-2 bg-white border border-outline-variant rounded-2xl shadow-2xl z-50 overflow-hidden py-1 max-h-[300px] overflow-y-auto"
                    style={{
                        animation: 'select-fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    }}
                >
                    {options.map((option) => {
                        const isSelected = option.value === value;
                        return (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3.5 flex flex-col transition-colors border-b border-outline-variant/10 last:border-0 ${
                                    isSelected 
                                        ? 'bg-safety-orange/10 text-safety-orange' 
                                        : 'hover:bg-safety-orange/5 text-deep-navy hover:text-safety-orange'
                                }`}
                            >
                                <span className="text-sm font-semibold block">{option.label}</span>
                                {option.sublabel && (
                                    <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-safety-orange/80' : 'text-text-secondary/70'}`}>
                                        {option.sublabel}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
