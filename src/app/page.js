import dynamic from "next/dynamic";
import FeaturedUSP from "@/components/FeaturedUSP";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const OurShop = dynamic(
  () => import("@/components/OurShop"),
  {
    loading: () => <div className="h-96" />,
  }
);

const HappyCustomers = dynamic(
  () => import("@/components/HappyCustomers"),
  {
    loading: () => <div className="h-96" />,
  }
);

const VideoContactSection = dynamic(
  () => import("@/components/VideoContactSection"),
  {
    loading: () => <div className="h-96" />,
  }
);

export const metadata = {
  title: "24/7 | Contact Global IT & Technical Help Support",
  description:
    "Contact 24/7 at +1-800-879-0156 for IT consulting, printer support, PC & laptop solutions, software help, browser fixes, and digital marketing.",
  alternates: {
    canonical: "https://www.howtocontact.live",
  },
  openGraph: {
    title: "24/7 | Contact Global IT & Technical Help Support",
    description:
      "Contact 24/7 at +1-800-879-0156 for IT consulting, printer support, PC & laptop solutions, software help, browser fixes, and digital marketing.",
    url: "https://howtocontact.live",
    siteName: "How to Contact",
    images: [
      {
        url: "/og-image.jpg",
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
      "Contact 24/7 at +1-800-879-0156 for IT consulting, printer support, PC & laptop solutions, software help, browser fixes, and digital marketing.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedUSP />
      <Services />
   
      <OurShop />
      <HappyCustomers />
      <VideoContactSection />
    </>
  );
}