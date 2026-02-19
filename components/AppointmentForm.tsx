import React, { useState } from 'react';
import { AppointmentFormData, FormErrors } from '../types';
import { Send, CheckCircle } from 'lucide-react';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    parentName: '',
    childName: '',
    phone: '',
    date: '',
    reason: 'General Consultation',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child name is required';
    }

    // Indian Phone Validation: 10 digits, starts with 6-9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      console.log('Submitting form:', formData);
      setIsSubmitted(true);
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
            parentName: '',
            childName: '',
            phone: '',
            date: '',
            reason: 'General Consultation',
        })
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center h-full flex flex-col justify-center items-center border-t-4 border-green-500">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Requested!</h3>
        <p className="text-gray-500">
          Thank you, {formData.parentName}. We have received your request for {formData.childName}. 
          Our staff will call you at +91 {formData.phone} shortly to confirm the slot.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-blue-600 py-6 px-8">
        <h3 className="text-xl font-bold text-white">Book an Appointment</h3>
        <p className="text-blue-100 text-sm mt-1">Fill out the form below to schedule a visit.</p>
      </div>
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
            <input
              type="text"
              name="parentName"
              id="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.parentName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm`}
              placeholder="Your Name"
            />
            {errors.parentName && <p className="mt-1 text-xs text-red-600">{errors.parentName}</p>}
          </div>

          <div>
            <label htmlFor="childName" className="block text-sm font-medium text-gray-700">Child's Name</label>
            <input
              type="text"
              name="childName"
              id="childName"
              value={formData.childName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.childName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm`}
              placeholder="Child's Name"
            />
            {errors.childName && <p className="mt-1 text-xs text-red-600">{errors.childName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`block w-full pl-12 rounded-md shadow-sm py-2 px-3 border ${errors.phone ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm`}
              placeholder="98765 43210"
              maxLength={10}
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 border ${errors.date ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} sm:text-sm`}
                />
                {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
            </div>
            <div>
                 <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                >
                <option>General Consultation</option>
                <option>Vaccination</option>
                <option>Fever/Cold</option>
                <option>Growth Checkup</option>
                <option>Neonatal Care</option>
                <option>Other</option>
                </select>
            </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <Send className="mr-2 h-5 w-5" />
          Request Appointment
        </button>
      </form>
    </div>
  );
};