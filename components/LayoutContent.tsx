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
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
