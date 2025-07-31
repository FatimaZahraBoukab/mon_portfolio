
import type { Metadata } from 'next';
import { LanguageProvider } from './contexts/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fatima Zahra BOUKAB - Portfolio',
  description: 'Portfolio de Fatima Zahra BOUKAB ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
