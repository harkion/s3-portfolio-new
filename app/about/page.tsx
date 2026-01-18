import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
return (
    <div className={styles.container}>
    <section className={styles.hero}>
        <div className={styles.textColumn}>
        <h1 className={styles.headline}>
            I am Fahri Can, a 25 year old ICT & Media student at Fontys
            University in Eindhoven.
        </h1>

        <div className={styles.bio}>
            <p>
            Originally from Turkey, I moved to the Netherlands in 2018 after
            beginning my studies in Scotland. I have a background in IT and
            Database Programming and currently work part-time as an ICT
            Helpdesk Assistant at the Municipality of Venlo, gaining hands-on
            experience in IT services.
            </p>
            <br />
            <p>
            Outside of work and study, I am passionate about creativity, with
            interests in painting, music, and theater, and I enjoy staying
            active through sports, gaming, and movies.
            </p>
        </div>
        </div>

        <div className={styles.imageContainer}>
        <Image
            src="/profile.jpg"
            alt="Fahri Can Genç"
            width={400}
            height={500}
            className={styles.profileImage}
            priority
        />
        </div>
    </section>

      {/* Information Cards */}
    <section className={styles.infoGrid}>
        {/* Expertise Card */}
        <div className={styles.card}>
        <h3 className={styles.cardTitle}>Expertise</h3>
        <ul className={styles.list}>
            <li className={styles.listItem}>Web Design</li>
            <li className={styles.listItem}>UI/UX Design</li>
            <li className={styles.listItem}>Brand Identity</li>
            <li className={styles.listItem}>Prototype</li>
        </ul>
        </div>

        {/* Tools Card */}
        <div className={styles.card}>
        <h3 className={styles.cardTitle}>Tools</h3>
        <ul className={styles.list}>
            <li className={styles.listItem}>Figma</li>
            <li className={styles.listItem}>Adobe Creative Cloud</li>
            <li className={styles.listItem}>Framer</li>
            <li className={styles.listItem}>Canva</li>
        </ul>
        </div>

        {/* Current Card */}
        <div className={styles.card}>
        <h3 className={styles.cardTitle}>Current</h3>
        <ul className={styles.list}>
            <li className={styles.listItem}>ICT & Media Student</li>
            <li className={styles.listItem}>ICT Helpdesk Assistant</li>
            <li className={styles.listItem}>Municipality of Venlo</li>
            <li className={styles.listItem}>Fontys University</li>
        </ul>
        </div>
    </section>
    </div>
);
}
