'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from './ui/Modal';
import Input from './ui/Input';
import Button from './ui/Button';
import { inquiryFormSchema, InquiryFormData } from '@/lib/validation';
import { BUSINESS_INFO } from '@/lib/constants';
import { HiPhone, HiMail } from 'react-icons/hi';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
  });

  const onSubmit = (data: InquiryFormData) => {
    // Display the form data in console for reference
    console.log('Inquiry Form Data:', data);
    
    // Show success message
    alert('Thank you for your interest! Please contact us directly using the information below.');
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Contact Us">
      <div className="space-y-6">
        {/* Contact Information */}
        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
          <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
          
          <div className="flex items-center space-x-3">
            <HiPhone className="w-5 h-5 text-[var(--color-primary-600)]" />
            <div>
              <p className="text-sm font-medium text-gray-900">Call Us:</p>
              {BUSINESS_INFO.phones.business.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="text-sm text-[var(--color-primary-600)] hover:underline block"
                >
                  {phone}
                </a>
              ))}
              <p className="text-xs text-gray-600 mt-1">
                Support: {BUSINESS_INFO.phones.support}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <HiMail className="w-5 h-5 text-[var(--color-primary-600)]" />
            <div>
              <p className="text-sm font-medium text-gray-900">Email Us:</p>
              <a
                href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                className="text-sm text-[var(--color-primary-600)] hover:underline break-all"
              >
                {BUSINESS_INFO.primaryEmail}
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-700 pt-2 border-t border-blue-200">
            <p className="font-medium">Working Hours:</p>
            <p>{BUSINESS_INFO.workingHours}</p>
          </div>
        </div>

        {/* Optional: Keep the form for user reference */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Or fill out the form below and we'll get back to you:
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Name"
            placeholder="Your full name"
            {...register('name')}
            error={errors.name?.message}
            required
          />

          <Input
            label="Email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email')}
            error={errors.email?.message}
            required
          />

          <Input
            label="Phone"
            type="tel"
            placeholder="10-digit phone number"
            {...register('phone')}
            error={errors.phone?.message}
            required
          />

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('message')}
              placeholder="Tell us about your inquiry..."
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-3">
            <Button type="submit" variant="primary" className="flex-1">
              Submit Inquiry
            </Button>
            <Button type="button" variant="outline" onClick={handleClose}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
