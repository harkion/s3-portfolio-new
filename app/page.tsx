import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";

interface NavCardProps {
  title: string;
  href: string;
}

function NavCard({ title, href }: NavCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <ArrowUpRight size={24} color="#666" />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fahri Can Genç</h1>

      <div className={styles.grid}>
        <NavCard title="About" href="/about" />
        <NavCard title="Portfolio" href="/portfolio" />
        <NavCard title="Contact" href="/contact" />
      </div>
    </div>
  );
}
