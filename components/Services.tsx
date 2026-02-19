import React from 'react';
import { Baby, Syringe, Stethoscope, HeartPulse } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Neonatal Care',
    description: 'Specialized care for newborn infants, ensuring proper growth monitoring and early detection of health issues.',
    icon: <Baby size={32} className="text-pink-500" />,
  },
  {
    id: 2,
    title: 'Vaccination',
    description: 'Comprehensive immunization programs following national guidelines to protect your child from infectious diseases.',
    icon: <Syringe size={32} className="text-blue-500" />,
  },
  {
    id: 3,
    title: 'General Consultation',
    description: 'Expert diagnosis and treatment for common childhood illnesses like fevers, infections, and allergies.',
    icon: <Stethoscope size={32} className="text-green-500" />,
  },
  {
    id: 4,
    title: 'Child Healthcare',
    description: 'Holistic approach to physical and mental well-being, including nutritional guidance and development tracking.',
    icon: <HeartPulse size={32} className="text-red-500" />,
  },
];

export const Services: React.FC = () => {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Specialties</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Care for Your Child
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We provide a wide range of medical services tailored specifically for children from birth through adolescence.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.id} className="pt-6">
                <div className="flow-root bg-slate-50 rounded-2xl px-6 pb-8 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-lg border border-gray-100">
                      {service.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};