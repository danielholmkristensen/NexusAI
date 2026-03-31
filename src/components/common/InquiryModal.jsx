import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react';

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID || '';
const HUBSPOT_FORM_GUID = import.meta.env.VITE_HUBSPOT_INQUIRY_FORM_GUID || '';
const HUBSPOT_REGION = import.meta.env.VITE_HUBSPOT_REGION || '';

const PRODUCT_OPTIONS = [
  { value: 'spark', label: 'The Spark — Onboarding & Readiness' },
  { value: 'catalyst', label: 'The Catalyst — AI Development as a Service' },
  { value: 'core', label: 'The Core — Command Center & Support' },
  { value: 'general', label: 'General Inquiry' },
];

const InquiryModal = ({ isOpen, onClose, product = 'general', ctaLabel = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: product,
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update product when prop changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, product }));
  }, [product]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getCookie = (cookieName) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) return;

    setStatus('loading');
    setErrorMessage('');

    const baseUrl = HUBSPOT_REGION ? `https://api-${HUBSPOT_REGION}.hsforms.com` : 'https://api.hsforms.com';
    const endpoint = `${baseUrl}/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

    const productLabel = PRODUCT_OPTIONS.find(p => p.value === formData.product)?.label || formData.product;

    const payload = {
      fields: [
        { name: 'email', value: formData.email },
        { name: 'firstname', value: formData.name },
        { name: 'mobilephone', value: formData.phone },
        { name: 'company', value: formData.company },
        { name: 'product_interest', value: productLabel },
        { name: 'message', value: formData.message },
        { name: 'inquiry_source', value: `${window.location.pathname} - ${ctaLabel}` },
      ],
      context: {
        hutk: getCookie('hubspotutk'),
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isOpen) return null;

  // Fallback when HubSpot isn't configured
  const productEmail = {
    spark: 'spark@agenticagency.dev',
    catalyst: 'catalyst@agenticagency.dev',
    core: 'core@agenticagency.dev',
    general: 'contact@agenticagency.dev',
  }[formData.product] || 'contact@agenticagency.dev';

  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-[#E6E6E1] rounded-2xl p-8 max-w-md w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Get in Touch</h2>
          <p className="text-black/70 mb-6">Email us directly and we'll get back to you shortly.</p>
          <a
            href={`mailto:${productEmail}?subject=${encodeURIComponent(PRODUCT_OPTIONS.find(p => p.value === formData.product)?.label || 'Inquiry')}`}
            className="inline-flex items-center gap-2 bg-black text-[#E6E6E1] px-6 py-4 rounded-xl font-bold uppercase tracking-tight hover:bg-black/90 transition-colors"
          >
            Send Email <ArrowRight size={18} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#E6E6E1] rounded-2xl p-8 max-w-lg w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-lg transition-colors"
        >
          <X size={24} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-[#E6E6E1]" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Message Sent</h2>
            <p className="text-black/70 mb-6">We'll get back to you within 24 hours.</p>
            <button
              onClick={onClose}
              className="bg-black text-[#E6E6E1] px-6 py-3 rounded-xl font-bold uppercase tracking-tight hover:bg-black/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Let's Talk</h2>
            <p className="text-black/70 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white focus:border-black outline-none transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white focus:border-black outline-none transition-colors disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Mobile Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white focus:border-black outline-none transition-colors disabled:opacity-50"
                  placeholder="+45 12 34 56 78 (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white focus:border-black outline-none transition-colors disabled:opacity-50"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Interest *</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white focus:border-black outline-none transition-colors disabled:opacity-50"
                >
                  {PRODUCT_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white focus:border-black outline-none transition-colors disabled:opacity-50 resize-none"
                  placeholder="Tell us about your needs (optional)"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle size={16} />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !formData.email || !formData.name}
                className="w-full bg-black text-[#E6E6E1] px-6 py-4 rounded-xl font-bold uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
