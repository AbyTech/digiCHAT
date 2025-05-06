import React, { lazy, Suspense } from 'react';

// Instead of: import HeavyComponent from './HeavyComponent';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function SomeComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}