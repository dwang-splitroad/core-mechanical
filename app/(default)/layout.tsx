// app/(default)/layout.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer'; // We will create this
// import { StickyCTAs } from '@/components/layout/StickyCTAs';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="default" />
      {children}
      <Footer />
      {/** Sticky CTAs removed per request */}
    </>
  );
}