import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { VerseBILogo } from './VerseBILogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Business Intelligence',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Keyboard Escape & Scroll Lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Focus initial input
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email';
    }
    if (!formData.company.trim()) errs.company = 'Please provide your company';
    if (!formData.message.trim()) errs.message = 'Please provide a brief message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Business Intelligence',
        message: '',
      });
      setErrors({});
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        className="bg-[#0b0f17] border border-slate-800 rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-left"
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <VerseBILogo variant="mark" className="w-7 h-7" />
          <div>
            <h3 id="contact-modal-title" className="text-xl font-display font-bold text-white">
              Connect with VerseBI
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Engineering inquiry & architecture consultation
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="modal-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-10 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Dispatched</h4>
              <p className="text-sm text-slate-300 max-w-sm mb-6 leading-relaxed font-sans">
                Thank you, <span className="text-white font-medium">{formData.name}</span>. An engineer will follow up regarding {formData.company}'s requirements.
              </p>
              <button
                onClick={handleClose}
                className="px-5 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Close Window
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="modal-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-mono text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    id="modal-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'modal-name-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p id="modal-name-error" role="alert" className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono text-slate-400 mb-1">
                    Work Email *
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'modal-email-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p id="modal-email-error" role="alert" className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-mono text-slate-400 mb-1">
                    Company *
                  </label>
                  <input
                    id="modal-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'modal-company-error' : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                      errors.company ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.company && (
                    <p id="modal-company-error" role="alert" className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-service" className="block text-xs font-mono text-slate-400 mb-1">
                    Discipline
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-500"
                  >
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Data Engineering">Data Engineering</option>
                    <option value="Automation">Automation</option>
                    <option value="Complete Overhaul">Complete Architecture</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-mono text-slate-400 mb-1">
                  Message *
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your data infrastructure and goals..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'modal-message-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                    errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-emerald-500'
                  }`}
                />
                {errors.message && (
                  <p id="modal-message-error" role="alert" className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
