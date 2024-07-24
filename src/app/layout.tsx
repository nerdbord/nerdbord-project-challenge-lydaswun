import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const font = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SkurVival - jak przetrwać w Polsce!",
	description:
		"Nie pierdolimy się w tańcu! Świeże newsy, najważniejsze wydarzenia i najnowsze trendy. Zobacz, jak radzić sobie w tym popierdolonym świecie. Przetrwanie to nasza specjalność!",
	metadataBase: new URL("https://nerdbord-project-challenge-lydaswun.vercel.app/"), //change the url to domain after upload
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		images: "/opengraph-image.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" className={font.className}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
