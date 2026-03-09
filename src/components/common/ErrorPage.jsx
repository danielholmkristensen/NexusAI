import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Home, ArrowLeft, SearchX, ServerCrash, WifiOff } from 'lucide-react';

const ErrorPage = () => {
  const error = useRouteError();

  // Determine error type and messaging
  const getErrorContent = () => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return {
          icon: SearchX,
          title: "Page not found.",
          message: "The page you're looking for doesn't exist or has been moved.",
          code: "404"
        };
      }
      if (error.status === 500) {
        return {
          icon: ServerCrash,
          title: "Server error.",
          message: "Something went wrong on our end. We're working on it.",
          code: "500"
        };
      }
      if (error.status === 503) {
        return {
          icon: WifiOff,
          title: "Service unavailable.",
          message: "We're temporarily offline for maintenance. Check back soon.",
          code: "503"
        };
      }
      return {
        icon: ServerCrash,
        title: "Something went wrong.",
        message: error.statusText || "An unexpected error occurred.",
        code: error.status?.toString() || "ERR"
      };
    }

    // Generic JS error
    return {
      icon: ServerCrash,
      title: "Something broke.",
      message: "An unexpected error occurred. This has been logged.",
      code: "ERR"
    };
  };

  const { icon: Icon, title, message, code } = getErrorContent();

  return (
    <div className="min-h-screen bg-[#E6E6E1] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Error Code Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-black text-[#E6E6E1] px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#E6E6E1] animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-wider">Error {code}</span>
          </div>
        </div>

        {/* Error Card */}
        <div className="bg-white border-4 border-black rounded-xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mx-auto mb-8">
            <Icon size={40} className="text-[#E6E6E1]" />
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-black/70 font-medium mb-10 max-w-md mx-auto">
            {message}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-4 font-bold uppercase tracking-tight border-2 border-black hover:bg-black/5 transition-colors rounded-lg"
            >
              <ArrowLeft size={18} />
              Go back
            </button>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-black text-[#E6E6E1] px-6 py-4 font-bold uppercase tracking-tight hover:bg-black/90 transition-colors rounded-lg"
            >
              <Home size={18} />
              Go home
            </Link>
          </div>
        </div>

        {/* Brand footer */}
        <div className="text-center mt-12">
          <Link to="/" className="font-bold text-xl text-black/30 uppercase tracking-tighter hover:text-black/50 transition-colors">
            Agentic Agency
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
