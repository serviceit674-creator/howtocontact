import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsAppButton ";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://howtocontact.live"),



  other: {
    'citylocalpro-verification': '224889pG3oJ1XGeLKxeJg2',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/Logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LXGNCN97KX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXGNCN97KX');
          `}
        </Script>
      </head>
      <body>
        <Banner />
        <Navbar />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}