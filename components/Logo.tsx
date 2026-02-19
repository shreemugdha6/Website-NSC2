import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="50" cy="50" r="45" fill="#3B82F6" fillOpacity="0.1" />
      <path 
        d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50" 
        stroke="#3B82F6" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <circle cx="50" cy="50" r="15" fill="#EC4899" fillOpacity="0.2" />
      <path 
        d="M50 35C41.7157 35 35 41.7157 35 50C35 58.2843 41.7157 65 50 65C58.2843 65 65 58.2843 65 50C65 41.7157 58.2843 35 50 35Z" 
        stroke="#EC4899" 
        strokeWidth="4" 
      />
      <path 
        d="M50 20V15M50 85V80M80 50H85M20 50H15" 
        stroke="#3B82F6" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
    </svg>
  );
};