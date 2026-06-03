import FeaturedUSP from "@/components/FeaturedUSP";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import OurShop from "@/components/OurShop";
import Services from "@/components/Services";
import VideoContactSection from "@/components/VideoContactSection";


export const metadata={

   

   title: "24/7 | Contact Global IT & Technical Help Support",

  description:
    "Contact 24/7 at 888-812-8678 for IT consulting, printer support, PC & laptop solutions, software help, browser fixes, and digital marketing.",

  alternates: {
    canonical: "https://www.howtocontact.live",
  },

   openGraph: {
  title: "24/7 | Contact Global IT & Technical Help Support",

    description:
      "Contact 24/7 at 888-812-8678 for IT consulting, printer support, PC & laptop solutions, software help, browser fixes, and digital marketing.",

    url: "https://howtocontact.live",

    siteName: "How to Contact",

    images: [
      {
        url:  "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How to Contact Technical Support",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

  title: "24/7 | Contact Global IT & Technical Help Support",

    description:
      "Contact 24/7 at 888-812-8678 for IT consulting, printer support, PC & laptop solutions, software help, browser fixes, and digital marketing.",

    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedUSP/>
      <OurShop/>
      <Services/>
      <HappyCustomers/>
      <VideoContactSection/>
    </>
  );
}