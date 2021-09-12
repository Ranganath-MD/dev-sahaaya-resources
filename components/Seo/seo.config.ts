import { DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  openGraph:{
    type: "website",
    locale: "en_IE",
    url: "https://dev-sahaaya.vercel.app/",
    site_name: "Dev Sahaaya",
    description: "Resources for Javascript Developers",
    images: [
      {
        url: "https://res.cloudinary.com/devsahaaya/image/upload/v1631424305/images/devsahaaya_cb3hno.png",
        width: 800,
        height: 600,
        alt: "Dev sahaaya site",
      },
    ],
  },
  twitter: {
    handle: "Ranganath MD",
    site: "https://dev-sahaaya.vercel.app/",
    cardType: "summary_large_image",
  },
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
  },
};
