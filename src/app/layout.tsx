import { siteConfig } from "config/site";
import "../styles/globals.css";
import type { Metadata, Viewport } from 'next';
import { WEBSITE_HOST_URL } from "lib/constants";
import clsx from "clsx";

// import { Montserrat } from "next/font/google";
// import localFont from "next/font/local";

// export const montserrat = Montserrat({
// 	weight: ["300", "400", "600", "900"],
// 	style: ["normal", "italic"],
// 	subsets: ["latin"],
// 	variable: "--font-montserrat",
// });

// export const freightBigPro = localFont({
// 	src: [
// 		{
// 			path: "../fonts/freight-big-pro-light.otf",
// 			weight: "300",
// 			style: "normal",
// 		},
// 		{
// 			path: "../fonts/freight-big-pro-light-italic.otf",
// 			weight: "300",
// 			style: "italic",
// 		},
// 	],
// 	variable: "--font-freight-big-pro",
// });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description:
    "A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Vidro temperado, laminado, box, espelhos. | (61) 9 8669-2775",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"]
    }
  },
  manifest: "/manifest.json",
  authors: [{ name: "Glazing Design" }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Glazing Design",
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  },
  alternates: {
    canonical: WEBSITE_HOST_URL
  },
  keywords: [
    "Vidro temperdo",
    "Vidro laminado",
    "Box para banheiro",
    "Espelho",
    "Guarda corpo de vidro",
    "Pergolado",
    "Vidro para varanda",
    "Glazing design",
    "Pele de vidro"
  ]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="Pt-BR" className="[color-scheme:dark]">
      <body
        className={clsx(
					// montserrat.variable,
					// freightBigPro.variable,
					"h-full",
					"font-sans",
          "bg-gradient-to-r from-bodyColor to-[#107a39]"
				)}
        >
        {children}
        </body>
    </html>
  )
}
