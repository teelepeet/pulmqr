import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import BootstrapActivation from '@/components/BootstrapActivation';

export const metadata: Metadata = {
  title: "Ly & Mark",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      <BootstrapActivation />
      </body>
    </html>
  );
}
