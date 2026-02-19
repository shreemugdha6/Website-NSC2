import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:justify-start gap-4 items-center">
           <Logo className="h-8 w-8" />
           <p className="text-gray-900 font-bold">Navya Sree Children Clinic</p>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Navya Sree Children Clinic. All rights reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex justify-center space-x-6 md:order-2">
            <span className="text-gray-400 hover:text-gray-500">
                Privacy Policy
            </span>
             <span className="text-gray-400 hover:text-gray-500">
                Terms of Service
            </span>
        </div>
      </div>
    </footer>
  );
};