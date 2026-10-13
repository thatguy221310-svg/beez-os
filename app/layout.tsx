import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Beez OS — a little more productive', description: 'A lightweight, responsive web desktop for Chromebooks, laptops, tablets and phones.', applicationName: 'Beez OS', appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Beez OS' } };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, viewportFit: 'cover', themeColor: '#10120f' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
