import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PASSPHRASE = 'ADAPT2026';
const SESSION_KEY = 'stark_auth';

export default function ProtectedSTARK() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem(SESSION_KEY);
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSPHRASE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
          <meta name="googlebot" content="noindex, nofollow" />
          <meta name="bingbot" content="noindex, nofollow" />
          <meta name="GPTBot" content="noindex, nofollow" />
          <meta name="anthropic-ai" content="noindex, nofollow" />
          <meta name="CCBot" content="noindex, nofollow" />
          <title>STARK Procurement - Agentic Agency Proposal</title>
        </Helmet>
        <iframe
          src="/stark-procurement.html"
          className="w-full h-screen border-0"
          title="STARK Procurement Proposal"
        />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
        <meta name="GPTBot" content="noindex, nofollow" />
        <meta name="anthropic-ai" content="noindex, nofollow" />
        <meta name="CCBot" content="noindex, nofollow" />
        <title>STARK Procurement - Confidential</title>
      </Helmet>
      <div className="min-h-screen bg-black flex items-center justify-center font-['Space_Grotesk'] p-4">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-[#E6E6E1] text-2xl font-bold uppercase tracking-widest mb-4">
            STARK Procurement
          </h1>
          <p className="text-[#E6E6E1]/50 text-sm uppercase tracking-wider mb-12">
            Confidential Proposal
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              className="w-full bg-transparent border-b-2 border-[#E6E6E1]/30 text-[#E6E6E1] text-center text-lg py-3 focus:outline-none focus:border-[#E6E6E1] transition-colors placeholder:text-[#E6E6E1]/30"
              placeholder="Enter passphrase"
              autoFocus
            />

            {error && (
              <p className="text-red-400 text-sm mt-4">
                Invalid passphrase
              </p>
            )}

            <button
              type="submit"
              className="mt-8 text-[#E6E6E1]/50 text-sm uppercase tracking-widest hover:text-[#E6E6E1] transition-colors"
            >
              Enter →
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
