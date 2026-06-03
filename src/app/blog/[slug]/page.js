import BlogDetailWrapper from "@/components/BlogDetailWrapper";
import React from "react";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `https://a-backend-phi.vercel.app/api/blogs/slug/${slug}`
    );

    if (!res.ok) throw new Error(`API responded with status: ${res.status}`);

    const data = await res.json();
    const blog = data.blog;
    // console.log(data);

    if (!blog) {
      return { title: "Blog Not Found | How to Contact" };
    }

    const title = blog?.seo?.metaTitle ;
    const description = blog?.seo?.metaDescription ;
    const canonicalUrl =  `https://howtocontact.live/blog/${blog.slug}`;
    const imageUrl = blog?.image?.url || "https://howtocontact.live/og-image.jpg";

    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "How to Contact",
        images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
      robots: { index: true, follow: true },
    };
  } catch (error) {
    // AB YEH ERROR AAPKO RUNTIME LOGS MEIN PAKKA DIKHEGA
    console.error("Metadata Fetch Error for slug:", slug, error);

    const defaultTitle = "How to Contact Blog";
    const defaultDesc = "Expert tech blogs on IT support and cybersecurity.";
    const defaultImg = "https://howtocontact.live/og-image.jpg";

    return {
      title: defaultTitle,
      description: defaultDesc,
      openGraph: {
        title: defaultTitle,
        description: defaultDesc,
        images: [{ url: defaultImg, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: defaultTitle,
        description: defaultDesc,
        images: [defaultImg],
      },
    };
  }
}

const Page = async ({ params }) => {
  const { slug } = await params;

  let blog = null;
  try {
    const res = await fetch(
      `https://a-backend-phi.vercel.app/api/blogs/slug/${slug}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    blog = data?.blog || null;
  } catch (err) {
    console.error("Page fetch error:", err);
  }

  return (
    <div>
      <BlogDetailWrapper blog={blog} />
    </div>
  );
};

export default Page;