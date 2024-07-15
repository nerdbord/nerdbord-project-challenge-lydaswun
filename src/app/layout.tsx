import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const font = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title:
		"TechBlog - Your Gateway to Technology, AI, Business, Sport, Travel, Culture, and Innovation",
	description:
		"Dive into the world of technology, AI, business insights, sports updates, travel guides, cultural highlights, and groundbreaking innovations. Tech Explorer is your ultimate blog for staying updated with the latest trends and developments across these diverse fields, offering in-depth articles, expert opinions, and comprehensive guides to fuel your curiosity and knowledge.",
	metadataBase: new URL("https://acme.com"), //change the url to domain after upload
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		images: "/ogpengraph-image.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={font.className}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
