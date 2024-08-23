import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux-provider";
import "antd/dist/antd.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-volkhov",
});

export const metadata = {
  title: "Jadoo",
  description: "$AMP (Algorithmic Monetary Policy)",
  icons: {
    icon: [{ url: "/favicon/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${volkhov.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
