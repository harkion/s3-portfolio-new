import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./project.module.css";

// Unified Project Data Structure
interface ProjectData {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  team: string;
  heroImage: string;
  middleImages: string[];
  bottomImages: string[];
  overview: string;
  challenge: string;
  solution: string;
}

// Project Data
const projects: Record<string, ProjectData> = {
  "gaha-geek": {
    slug: "gaha-geek",
    title: "Gaha Geek",
    category: "Web Design",
    year: "2024 - 2025",
    role: "Developer",
    team: "Fahri Can Genç, Bianka Hadnagy, Cedya Elif Ekiz, Matthew Garcia",
    heroImage: "/project-gaha-hero.jpg",
    middleImages: ["/project-gaha-1.jpg", "/project-gaha-2.jpg"],
    bottomImages: ["/project-gaha-3.jpg", "/project-gaha-4.jpg"],
    overview:
      "Gaha Geek was our semester 1 project from the school. We had few pre-select options to choose from, but me and my group chose to do our own concept: making a game asset store.",
    challenge:
      "Our goal with this asset store was to make a website mostly for students to have access to a friendly website to use any assets they want for free and upload assets they made for others to use. We decided to make a sign up/login system. We had 6 weeks for this project and we tried our best to reach our goal.",
    solution:
      "We developed a card-based interface with large imagery and minimal text, allowing users to quickly browse and compare experiences. We added filtering options for the assets, and a blog section to get more information. I built the login pop-up & user page, assets at the home page, star rating system and the contact form.",
  },

  osfast: {
    slug: "osfast",
    title: "Osfast",
    category: "Brand Identity",
    year: "2025",
    role: "UI/UX Designer",
    team: "Fahri Can Genç, Bianka Hadnagy, Cedya Elif Ekiz, Matthew Garcia, Constantin Sarafov",
    heroImage: "/project-osfast-hero.jpg",
    middleImages: ["/project-osfast-1.jpg", "/project-osfast-2.jpg"],
    bottomImages: ["/project-osfast-3.jpg", "/project-osfast-4.jpg"],
    overview:
      "This was a real client project for Oscar Wouterse (OSFAST), who wanted a full rebrand of his tech-focused personal brand. His vision was a modern, energetic identity something bold enough to work even without text.",
    challenge:
      "Create a visual identity with modern tech energy, design a text-free logo with strong visual presence, and support a new portfolio site. We needed to blend clarity with energy while considering accessibility.",
    solution:
      "We created mood boards and stylescapes with inspiration directly from Oscar. Each group member created their own stylescape, and Oscar chose his favorite aspects. My contribution helped form the bold, energetic look that became our final direction.",
  },

  belco: {
    slug: "belco",
    title: "Belco",
    category: "UI/UX Design",
    year: "2025",
    role: "UI/UX Designer & Developer",
    team: "Fahri Can Genç, Bianka Hadnagy, Cedya Elif Ekiz",
    heroImage: "/project-belco-hero.jpg",
    middleImages: ["/project-belco-1.jpg", "/project-belco-2.jpg"], 
    bottomImages: ["/project-belco-3.jpg", "/project-belco-4.jpg"],
    overview:
      "This project was about redesigning the BELCO website, a platform aimed at university students, similar to Erasmus. The client asked for a modern, functional, and user-friendly website that improves the overall student experience.",
    challenge:
      "Their existing website was over 10 years old, and they were looking for a fresh, modern redesign to better represent their organization. The current site had several bugs and lacked optimization.",
    solution:
      "My responsibilities included designing the Partner Institutions page, the FAQ section, and the Registration Form. I also added an image slider to the homepage to make it more engaging. We used Trello to organize our tasks and created a team agreement to set clear expectations.",
  },

  "zone-in": {
    slug: "zone-in",
    title: "Zone In",
    category: "Web-based Game",
    year: "2025",
    role: "Developer & UI/UX Designer",
    team: "Fahri Can Genç",
    heroImage: "/project-zonein-hero.jpg",
    middleImages: ["/project-zonein-1.jpg", "/project-zonein-2.jpg"],
    bottomImages: ["/project-zonein-3.jpg", "/project-zonein-4.jpg"],
    overview:
      "Zone In is a web-based reaction game I created to explore how interactive media can be used in a focused, creative way. Built using HTML, CSS, and JavaScript, the game was a designed especially for people with ADHD, focusing on training focus and reflexes in a minimal, clear, and fun way.",
    challenge:
      "Initially, I wasn't sure what direction to take. The challenge was to create a focus-based game that would be ADHD friendly, avoiding overstimulation while keeping it engaging. I needed to understand how to design for attention and accessibility.",
    solution:
      "I started with sketches and then moved into Figma to prototype my idea. I prioritized getting into the code and refining the experience iteratively. Key insights included: keeping instructions minimal, using non-overstimulating visuals, and adding keyboard shortcuts. I built the game using dynamic game logic and used localStorage for saving settings.",
  },
};

function getNavLinks(currentSlug: string) {
  const keys = Object.keys(projects);
  const index = keys.indexOf(currentSlug);
  const prevKey = index > 0 ? keys[index - 1] : null;
  const nextKey = index < keys.length - 1 ? keys[index + 1] : null;

  return {
    prev: prevKey ? projects[prevKey] : null,
    next: nextKey ? projects[nextKey] : null,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  const nav = getNavLinks(slug);

  return (
  <div className={styles.container}>
    <header className={styles.header}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>{project.title}</h1>
        <span className={styles.category}>{project.category}</span>
      </div>

      <div className={styles.metaGrid}>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Year:</span>
          <span className={styles.metaValue}>{project.year}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Role:</span>
          <span className={styles.metaValue}>{project.role}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Team:</span>
          <span className={styles.metaValue}>{project.team}</span>
        </div>
      </div>
    </header>

    <div className={styles.heroWrapper}>
      {project.heroImage && (
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className={styles.imageObject}
        />
      )}
    </div>

    {project.middleImages && project.middleImages.length > 0 && (
      <section className={styles.middleGallery}>
        {project.middleImages.map((img, i) => (
          <div key={i} className={styles.galleryItemWrapper}>
            <Image
              src={img}
              alt={`Detail ${i}`}
              fill
              className={styles.imageObject}
            />
          </div>
        ))}
      </section>
    )}

    <section className={styles.storySection}>
      <h2 className={styles.storyTitle}>Explore the Full Story</h2>
      <div className={styles.gridTwoColumns}>
        <div>
          <h3 className={styles.sectionTitle}>Overview</h3>
          <p className={styles.text}>{project.overview}</p>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>The Challenge</h3>
          <p className={styles.text}>{project.challenge}</p>
        </div>
      </div>
      <div className={styles.fullWidthText}>
        <h3 className={styles.sectionTitle}>Solution</h3>
        <p className={styles.text}>{project.solution}</p>
      </div>
    </section>

    {project.bottomImages && project.bottomImages.length > 0 && (
      <section className={styles.bottomGallery}>
        {project.bottomImages.map((img, i) => (
          <div key={i} className={styles.galleryItemWrapper}>
            <Image
              src={img}
              alt={`Gallery ${i}`}
              fill
              className={styles.imageObject}
            />
          </div>
        ))}
      </section>
    )}

    <footer className={styles.footerNav}>
      {nav.prev ? (
        <Link href={`/portfolio/${nav.prev.slug}`} className={styles.navLink}>
          <span className={styles.navLabel}>
            <ChevronLeft size={16} /> Prev
          </span>
          <span className={styles.navProject}>{nav.prev.title}</span>
        </Link>
      ) : (
        <div />
      )}

      {nav.next ? (
        <Link
          href={`/portfolio/${nav.next.slug}`}
          className={`${styles.navLink} ${styles.alignRight}`}
        >
          <span className={styles.navLabel}>
            Next <ChevronRight size={16} />
          </span>
          <span className={styles.navProject}>{nav.next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </footer>
  </div>
);
}