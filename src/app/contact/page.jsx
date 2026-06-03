import ContactWrapper from '@/components/Contactwrapper'
import React from 'react'


export const metadata = {
 title: "Contact Us | Get Support & Assistance Today",

  description:
    "Reach out to our team for quick support, inquiries, or assistance. Contact us today for reliable help and prompt solutions to your questions. ",

  alternates: {
    canonical: "https://www.howtocontact.live/contact",
  },

  openGraph: {
   title: "Contact Us | Get Support & Assistance Today",

    description:
      "Reach out to our team for quick support, inquiries, or assistance. Contact us today for reliable help and prompt solutions to your questions. ",

    url: "https://howtocontact.live/contact",

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

   title: "Contact Us | Get Support & Assistance Today",

    description:
      "Reach out to our team for quick support, inquiries, or assistance. Contact us today for reliable help and prompt solutions to your questions. ",

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
            <ContactWrapper />
        </div>
    )
}

export default page
