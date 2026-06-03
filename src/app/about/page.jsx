
import AboutWrapper from '@/components/AboutWrapper'
import React from 'react'


export const metadata = {
title: "How to Contact Live Support | About Us Guide",

  description:
    "How to contact live support quickly and discover more about our team, services, commitment to customer assistance, and expert solutions.",

  alternates: {
    canonical: "https://howtocontact.live/about",
  },

  openGraph: {
    title: "About Us | How to Contact",

    description:
      "How to contact live support quickly and discover more about our team, services, commitment to customer assistance, and expert solutions.",

    url: "https://howtocontact.live/about",

    siteName: "How to Contact",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact How to Contact",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About How to Contact | Global IT Consulting & Tech Support",

    description:
      "How to contact live support quickly and discover more about our team, services, commitment to customer assistance, and expert solutions.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
    <div>
      <AboutWrapper/>
    </div>
  )
}

export default page
