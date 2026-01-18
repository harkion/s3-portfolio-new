import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahri Can Genç | Frontend Developer",
  description: "Portfolio of Fahri Can Genç",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header Section */}  
        <header className={styles.header}>
          <div className={styles.brand}>Fahri Can Genç</div>
          <div>Frontend Developer</div>
          <div>Your Location • 11:17 AM</div> {/* Here comes the location and time */}
        </header>

        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
