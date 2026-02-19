import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div id="contact" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">Visit Our Clinic</h2>
              <p className="text-slate-400 text-lg">
                We are conveniently located on Doctors Street in Karimnagar. Walk-ins are welcome for emergencies, but appointments are recommended for routine checkups.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20 text-blue-400">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Our Address</h3>
                  <p className="mt-1 text-slate-400">
                    Doctors Street, Karimnagar,<br />
                    Telangana, 505001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-600/20 text-pink-400">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Contact Number</h3>
                  <p className="mt-1 text-slate-400 font-mono text-lg">
                    <a href="tel:+919177769169" className="hover:text-white transition-colors">
                        +91 91777 69169
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Available for emergency calls</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-600/20 text-green-400">
                    <Clock size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Clinic Hours</h3>
                  <div className="mt-1 text-slate-400 grid grid-cols-2 gap-4 max-w-xs">
                    <div>Mon - Sat:</div>
                    <div>10:00 AM - 08:30 PM</div>
                    <div>Sunday:</div>
                    <div>10:00 AM - 01:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder Side */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-slate-800 relative group">
             {/* Simulating a Map View */}
             <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/79.1328,18.4386,14,0/800x600?access_token=placeholder')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-lg animate-bounce">
                    <MapPin className="text-red-500 h-8 w-8" fill="currentColor" />
                </div>
             </div>
             <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg text-slate-900">
                <p className="font-bold">Navya Sree Children Clinic</p>
                <p className="text-sm text-gray-600">Doctors Street, Karimnagar</p>
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=Navya+Sree+Children+Clinic+Karimnagar" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-2 inline-block text-blue-600 text-sm font-semibold hover:underline"
                >
                    Open in Google Maps
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};