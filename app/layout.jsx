import "./globals.css";

export const metadata = {
  title: "Blank Website",
  description: "A minimal Next.js starter prepared for GitHub, Netlify, and Netlify Visual Editor."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
