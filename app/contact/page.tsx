import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import styles from "./contact.module.css";

function ContactLink({
    icon: Icon,
    label,
    value,
    href,
    }: 

    {
    icon: any;
    label: string;
    value: string;
    href: string;
}
) 

{
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        >
        <div className={styles.iconWrapper}>
            <Icon size={24} />
        </div>
        <div className={styles.cardContent}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
        </a>
    );
}

export default function Contact() {
    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.title}>
            Let`s create something amazing together
            </h1>
            <p className={styles.subtitle}>
            I`m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
            </p>
        </header>

        <div className={styles.list}>
            <ContactLink
            icon={Mail}
            label="Email"
            value="gencfahrican@outlook.com"
            href="mailto:gencfahrican@outlook.com"
            />
            <ContactLink
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/genc-fahri-can"
            href="https://www.linkedin.com/in/genc-fahri-can"
            />
            <ContactLink
            icon={Github}
            label="GitHub"
            value="github.com/harkion"
            href="https://github.com/harkion"
            />
            <ContactLink
            icon={Instagram}
            label="Instagram"
            value="@gencfahrican"
            href="https://instagram.com/gencfahrican"
            />
        </div>

        <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
            <div className={styles.statusDot}></div>
            <span>Available for work</span>
            </div>
            <p className={styles.statusText}>
            Currently accepting select freelance projects and full-time
            opportunities.
            </p>
        </div>
        </div>
    );
}
