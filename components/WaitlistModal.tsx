import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'waitlist'), {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        createdAt: new Date()
      });
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({ name: '', email: '', company: '' });
      }, 2000);
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
        <p className="text-gray-400 mb-6">
          Be among the first to experience H2Safety.ai
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              required
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-[#00AEEF] text-white rounded-lg font-semibold
              hover:bg-[#0098d1] transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-center">Successfully joined the waitlist!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center">Error joining waitlist. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
} 