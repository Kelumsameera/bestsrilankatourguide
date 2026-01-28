import { Poppins, Playfair_Display, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600"],
  variable: "--font-sinhala",
});

export const metadata = {
  title: "Sri Lanka Tours Driver",
  description: "Luxury & Adventure Tours in Sri Lanka",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} ${sinhala.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
