import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-blue-50 to-pink-50 pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Accepting New Patients
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Compassionate Care for</span>{' '}
              <span className="block text-blue-600 xl:inline">Your Little Ones</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Expert pediatric services in Karimnagar. From neonatal care to vaccinations and general health checkups, we ensure your child's health journey is safe and happy.
            </p>
            <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <a
                  href="#appointment"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-transform transform hover:-translate-y-0.5"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Visit
                </a>
              </div>
              <div className="mt-3 sm:mt-0">
                <a
                  href="#services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Our Services
                  <ChevronRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=1" alt="Doctor" />
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=2" alt="Nurse" />
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=3" alt="Patient" />
                </div>
                <span>Trusted by 500+ Families</span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Pediatrician examining a child"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white text-xl font-bold">Navya Sree Children Clinic</p>
                  <p className="text-blue-100">Excellence in Child Healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};