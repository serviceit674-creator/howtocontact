import Link from "next/link";
import ProductSlider from "./ProductSlider";
import ProductSlider2 from "./ProductSlider2";

const shopItems = [
    {
        title: "PRINTER",
        subtitle: "Solution for all problems",
        image: "/printerimg.webp",
        alt: "Expert printer troubleshooting and repair services",
        link: "/services/printer-solution",
    },

    {
        title: "Laptop",
        subtitle: "Sell Solution for all Brands",
        image: "/Laptop4.webp",
        alt: "Professional laptop repair and multi-brand support",
        link: "/services/pc-laptop-solution",
    },

    {
        title: "Antivirus",
        subtitle: "Remove all Virus",
        image: "/antivirusimg.webp",
        alt: "Complete antivirus protection and virus removal service",
        link: "/services/software",
    },

    {
        title: "Desktop",
        subtitle: "All Brand Desktop Support",
        image: "/desktopimg.webp",
        alt: "All-in-one desktop computer technical support",
        link: "/services/digital-marketing",
    },
];
const businessCards = [
    {
        title: "24*7 Technical Help",
        desc: "Access 24*7 technical help from certified experts delivering fast solutions anytime, anywhere, without downtime, guaranteed.",
    },
    {
        title: "Cyber security and data protection",
        desc: "Advanced cyber security and data protection solutions safeguarding your systems, networks, and sensitive information worldwide.",
    },
    {
        title: "Cost-Effective Solution",
        desc: "Cost effective technology solutions delivering high performance, scalability, and reliability without compromising quality or security.",
    },
];

const OurShop = () => {
    return (
        <>
            {/* SHOP SECTION */}
            <section className="max-w-7xl mx-auto px-4 py-20">
  
  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tight">
      Explore <span className="font-semibold text-[#457C3C]">More</span>
    </h2>

    <div className="flex justify-center items-center gap-2 mt-5">
      <span className="w-12 h-[3px] bg-[#457C3C] rounded-full"></span>
      <span className="w-3 h-3 bg-[#457C3C] rounded-full"></span>
      <span className="w-12 h-[3px] bg-[#457C3C] rounded-full"></span>
    </div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {shopItems.map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#457C3C]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative flex flex-col md:flex-row h-full">

          {/* Image */}
          <div className="md:w-[48%] h-[260px] md:h-auto overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="md:w-[52%] relative flex flex-col justify-center p-8 lg:p-10 bg-white">

            {/* Top Badge */}
            {/* <span className="absolute top-6 right-6 text-[11px] tracking-[3px] uppercase text-[#457C3C] font-semibold">
              Collection
            </span> */}

            {/* Title */}
            <h3 className="text-2xl lg:text-xl font-semibold text-gray-900 leading-tight">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {item.subtitle}
            </p>

            {/* Button */}
            <Link href={item.link}>
              <button className="mt-8 w-fit px-7 py-3 rounded-full bg-[#457C3C] text-white font-medium tracking-wide hover:bg-[#193315] hover:scale-105 transition duration-300">
                See More
              </button>
            </Link>

          </div>
        </div>
      </div>
    ))}

  </div>
</section>

            {/* ABOUT SECTION */}
            <section className="py-14 lg:py-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT CONTENT */}
                        <div className="max-w-xl">

                            <p className="font-medium underline text-xl text-[#348d27] mb-3">
                                About
                            </p>

                            <h2 className="text-3xl sm:text-4xl leading-snug font-medium text-gray-900">
                                <span className="text-[#071405] font-semibold">
                                    Revamp your business
                                </span>{" "}
                                technology with our stellar IT consulting solutions
                            </h2>

                            <p className="text-gray-600 mt-6 text-base leading-relaxed">
                                Let your business breathe quality and speed with proper
                                optimization, maintenance, and protection using information
                                consulting services.
                            </p>

                            <p className="text-gray-600 mt-5 leading-relaxed text-base">
                                Our experts deliver fast, secure, and scalable IT solutions
                                tailored for your business growth.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block mt-7 text-[#348d27] font-semibold hover:underline"
                            >
                                Read more →
                            </Link>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-14 justify-items-center">
                            <ProductSlider />
                            <ProductSlider2 />
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS CARDS */}
            <section className="pb-20">

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {businessCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white  shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition duration-300"
                            >
                                <div className="flex items-start gap-5">

                                    {/* ICON */}
                                    <div className="w-16 h-16 p-3 border rounded-full border-[#348d27] flex items-center justify-center shrink-0">
                                        <img
                                            src="/icon2.png"
                                            alt={card.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                                            {card.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mt-3">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurShop;