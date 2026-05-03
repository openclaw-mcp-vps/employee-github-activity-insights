import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Activity Insights — Team Productivity Analytics",
  description: "Analyzes team GitHub activity for productivity patterns. Track commit patterns, code review participation, and collaboration metrics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="54916d72-fd30-4b2e-980e-7b9b8977f179"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
