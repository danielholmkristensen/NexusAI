import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react';

// HubSpot configuration - set these in Vercel environment variables
// VITE_HUBSPOT_PORTAL_ID, VITE_HUBSPOT_FORM_GUID, VITE_HUBSPOT_REGION
const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID || '';
const HUBSPOT_FORM_GUID = import.meta.env.VITE_HUBSPOT_FORM_GUID || '';
const HUBSPOT_REGION = import.meta.env.VITE_HUBSPOT_REGION || '';

const WaitlistForm = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const getCookie = (cookieName) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    const baseUrl = HUBSPOT_REGION ? `https://api-${HUBSPOT_REGION}.hsforms.com` : 'https://api.hsforms.com';
    const endpoint = `${baseUrl}/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

    const payload = {
      fields: [
        { name: 'email', value: email },
        ...(name ? [{ name: 'firstname', value: name }] : [])
      ],
      context: {
        hutk: getCookie('hubspotutk'),
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
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

  // Fallback when HubSpot isn't configured
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) {
    return (
      <div className="w-full max-w-xl mx-auto text-center">
        <a
          href="mailto:waitlist@agenticagency.dev?subject=Spark%20Waitlist"
          className={`
            inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-tight
            ${variant === 'dark'
              ? 'bg-[#E6E6E1] text-black hover:bg-white'
              : 'bg-black text-[#E6E6E1] hover:bg-black/90'
            }
            transition-all
          `}
        >
          <span>Join waitlist</span>
          <ArrowRight size={18} />
        </a>
        <p className={`text-xs mt-4 ${variant === 'dark' ? 'text-[#E6E6E1]/50' : 'text-black/40'}`}>
          Email us to join the waitlist.
        </p>
      </div>
    );
  }

  // Success state
  if (status === 'success') {
    return (
      <div className={`${variant === 'dark' ? 'bg-white/10 border-white/30' : 'bg-black/5 border-black/20'} border-2 rounded-xl p-6 md:p-8 text-center`}>
        <div className={`w-12 h-12 rounded-full ${variant === 'dark' ? 'bg-[#E6E6E1]' : 'bg-black'} flex items-center justify-center mx-auto mb-4`}>
          <Check size={24} className={variant === 'dark' ? 'text-black' : 'text-[#E6E6E1]'} />
        </div>
        <h3 className={`text-xl font-bold uppercase tracking-tight mb-2 ${variant === 'dark' ? 'text-[#E6E6E1]' : 'text-black'}`}>
          You're on the list.
        </h3>
        <p className={`text-sm ${variant === 'dark' ? 'text-[#E6E6E1]/70' : 'text-black/60'}`}>
          We'll notify you when spots open up.
        </p>
      </div>
    );
  }

  // Form state (idle, loading, error)
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col gap-3">
        {/* Name field (optional) */}
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'loading'}
          className={`
            w-full px-5 py-4 rounded-xl font-medium
            ${variant === 'dark'
              ? 'bg-white/10 border-2 border-white/30 text-[#E6E6E1] placeholder:text-[#E6E6E1]/50 focus:border-[#E6E6E1] focus:bg-white/15'
              : 'bg-white border-2 border-black/20 text-black placeholder:text-black/40 focus:border-black'
            }
            outline-none transition-all
            disabled:opacity-50
          `}
        />

        {/* Email field + submit button row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className={`
              flex-1 px-5 py-4 rounded-xl font-medium
              ${variant === 'dark'
                ? 'bg-white/10 border-2 border-white/30 text-[#E6E6E1] placeholder:text-[#E6E6E1]/50 focus:border-[#E6E6E1] focus:bg-white/15'
                : 'bg-white border-2 border-black/20 text-black placeholder:text-black/40 focus:border-black'
              }
              outline-none transition-all
              disabled:opacity-50
            `}
          />
          <button
            type="submit"
            disabled={status === 'loading' || !email}
            className={`
              px-8 py-4 rounded-xl font-bold uppercase tracking-tight
              flex items-center justify-center gap-2
              transition-all
              ${variant === 'dark'
                ? 'bg-[#E6E6E1] text-black hover:bg-white disabled:bg-[#E6E6E1]/50'
                : 'bg-black text-[#E6E6E1] hover:bg-black/90 disabled:bg-black/50'
              }
              disabled:cursor-not-allowed
            `}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span className="hidden sm:inline">Joining...</span>
              </>
            ) : (
              <>
                <span>Join waitlist</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="flex items-center gap-2 mt-4 text-red-400">
          <AlertCircle size={16} />
          <span className="text-sm font-medium">{errorMessage}</span>
        </div>
      )}

      {/* Privacy note */}
      <p className={`text-xs mt-4 ${variant === 'dark' ? 'text-[#E6E6E1]/50' : 'text-black/40'}`}>
        No spam. We'll only contact you about workshop availability.
      </p>
    </form>
  );
};

export default WaitlistForm;
