import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Services />

        <section id="appointment" className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5 mb-10 lg:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Book Your Visit Today
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                  Don't wait in line. Schedule an appointment for your child's vaccination, general check-up, or neonatal care consultation. 
                </p>
                <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">What to bring:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Previous prescription records</li>
                        <li>Vaccination chart</li>
                        <li>Any recent test reports</li>
                    </ul>
                </div>
              </div>
              <div className="lg:col-span-7">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>

        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
};

export default App;