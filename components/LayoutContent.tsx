'use client'

import { Navigation } from './Navigation'
import { Footer } from './Footer'

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation variant="overlay" />
      {children}
      <Footer />
    </>
  );
}
