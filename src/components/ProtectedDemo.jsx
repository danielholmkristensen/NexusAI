import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PASSPHRASE = 'YCS26';
const SESSION_KEY = 'demo_auth';

// Lazy load the actual demo page
const DemoPage = React.lazy(() => import('../pages/DemoPage'));

export default function ProtectedDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem(SESSION_KEY);
    setIsAuthenticated(auth === 'true');
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

  // Loading auth state
  if (isAuthenticated === null) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
          <meta name="googlebot" content="noindex, nofollow" />
          <title>Demo | Agentic Agency</title>
        </Helmet>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <span className="text-[#E6E6E1] text-5xl font-black animate-pulse">{'>>'}</span>
        </div>
      </>
    );
  }

  if (isAuthenticated) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
          <meta name="googlebot" content="noindex, nofollow" />
          <title>Demo | Agentic Agency</title>
        </Helmet>
        <React.Suspense fallback={
          <div className="min-h-screen bg-[#E8E4DE] flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black animate-pulse"></div>
              <span className="font-mono text-sm uppercase tracking-wider">Loading</span>
            </div>
          </div>
        }>
          <DemoPage />
        </React.Suspense>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow" />
        <title>Demo | Agentic Agency</title>
      </Helmet>
      <div className="min-h-screen bg-black flex items-center justify-center font-['Space_Grotesk'] p-5">
        <div className="w-full max-w-sm text-center">
          <span className="text-[#E6E6E1] text-6xl font-black tracking-tight block mb-6">
            {'>>'}
          </span>
          <h1 className="text-white text-2xl font-bold mb-2">
            Agentic Agency
          </h1>
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-10">
            YC S26 Demo
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-lg text-white text-center text-base py-4 px-5 font-mono tracking-widest focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-white/30 placeholder:tracking-wider ${error ? 'animate-shake' : ''}`}
              placeholder="Enter access code"
              autoFocus
              autoComplete="off"
            />

            {error && (
              <p className="text-red-400 text-sm mt-4">
                Invalid access code
              </p>
            )}

            <button
              type="submit"
              className="mt-4 w-full py-4 px-8 bg-[#E6E6E1] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:-translate-y-0.5 transition-all"
            >
              Enter →
            </button>
          </form>

          <p className="text-white/30 text-xs mt-8">
            Contact daniel.holm@agenticagency.dev for access
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.4s ease;
        }
      `}</style>
    </>
  );
}
