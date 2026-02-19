import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AppointmentFormData {
  parentName: string;
  childName: string;
  phone: string;
  date: string;
  reason: string;
}

export interface FormErrors {
  parentName?: string;
  childName?: string;
  phone?: string;
  date?: string;
  reason?: string;
}