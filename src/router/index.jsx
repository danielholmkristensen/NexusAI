import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { ErrorPage } from '../components/common';

// Lazy load pages for better performance
const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const SparkPage = React.lazy(() => import('../pages/SparkPage'));
const CatalystPage = React.lazy(() => import('../pages/CatalystPage'));
const ScaleEnginePage = React.lazy(() => import('../pages/ScaleEnginePage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const MethodPage = React.lazy(() => import('../pages/MethodPage'));
const ProtectedDeck = React.lazy(() => import('../components/ProtectedDeck'));
const ProtectedSTARK = React.lazy(() => import('../components/ProtectedSTARK'));
const FlowSlides = React.lazy(() => import('../components/FlowSlides'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#E6E6E1] flex items-center justify-center">
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-black animate-pulse"></div>
      <span className="font-mono text-sm uppercase tracking-wider">Loading</span>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/pitch',
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <ProtectedDeck />
      </React.Suspense>
    ),
  },
  {
    path: '/flow',
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <FlowSlides />
      </React.Suspense>
    ),
  },
  {
    path: '/STARK-Procurement',
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <ProtectedSTARK />
      </React.Suspense>
    ),
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <LandingPage />
          </React.Suspense>
        ),
      },
      {
        path: 'the-spark',
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <SparkPage />
          </React.Suspense>
        ),
      },
      {
        path: 'the-catalyst',
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <CatalystPage />
          </React.Suspense>
        ),
      },
      {
        path: 'the-scale-engine',
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <ScaleEnginePage />
          </React.Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <AboutPage />
          </React.Suspense>
        ),
      },
      {
        path: 'method',
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <MethodPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
