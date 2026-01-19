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
  link?: string;
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
    link: "https://i556437.hera.fontysict.net/belco/index.html",
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
    link: "https://i556437.hera.fontysict.net/zone-in/",
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

  owow: {
    slug: "owow",
    title: "OWOW",
    category: "Flipdot Display Tetris",
    year: "2026",
    role: "UI/UX Designer & Developer",
    team: "Fahri Can Genç, Jaycey B., Joël V., Louis G., Melanie v.d. G. & Sefa Y.",
    link: "https://github.com/tenchi-of-darkness/node-flipdots-tetris",
    heroImage: "/project-owow-hero.jpg",
    middleImages: ["/project-owow-1.jpg", "/project-owow-2.jpg"],
    bottomImages: ["/project-owow-3.jpg", "/project-owow-4.jpg"],
    overview:
      "OWOW was an industry project in collaboration with a real client, where our team designed and developed a playable Tetris game for a physical flipdot display. The project focused on translating a well-known game concept into a highly constrained medium, working with limited resolution, black-and-white output, and hardware-specific interaction. My main focus was on user interaction, usability, research, and translating insights into concrete design and implementation decisions.",
    challenge:
      "The main challenge was designing an intuitive and enjoyable Tetris experience within the technical and physical limitations of a flipdot board. Classic Tetris relies heavily on smooth visuals and fast feedback, which are not directly possible on this hardware. Additionally, player expectations were high due to familiarity with Tetris, meaning that unclear controls, feedback, or onboarding would quickly lead to confusion or frustration.",
    solution:
      "I approached this challenge by researching classic Tetris interaction rules, player expectations, and feedback principles, and applying a Double Diamond design process. Through iterative design, usability testing, and experimentation, I worked on improving the start screen, pause menu, and overall interaction clarity. User test insights directly informed design changes, such as clearer feedback and improved menu behaviour. Although not all concepts made it to the final version, the process demonstrates a research-driven and iterative approach to designing within strict constraints.",
  },

  "quiz-craft": {
    slug: "quiz-craft",
    title: "Quiz Craft",
    category: "Web-based Game",
    year: "2026",
    role: "Developer & UI/UX Designer",
    team: "Fahri Can Genç",
    link: "https://quiz-craft-self.vercel.app/",
    heroImage: "/project-quizcraft-hero.jpg",
    middleImages: ["/project-quizcraft-1.jpg", "/project-quizcraft-2.jpg"],
    bottomImages: ["/project-quizcraft-3.jpg", "/project-quizcraft-4.jpg"],
    overview:
      "Quiz Craft is a web-based trivia game built with Next.js and Supabase, designed for teenagers and young adults who enjoy fast-paced, competitive gameplay. Players select a category, enter a username, and complete a timed quiz where scores are calculated based on both speed and accuracy. The project focuses on replayability, clear feedback, and a modern, minimal UI that keeps players engaged without overwhelming them.",
    challenge:
      "One of the main challenges was balancing speed-based gameplay with accessibility and focus. Designing a game that feels competitive without becoming stressful required careful decisions around timing, feedback, and visual hierarchy. On a technical level, managing time-based logic, handling edge cases when timers expired, and integrating Supabase with Next.js client components added complexity to the development process.",
    solution:
      "I approached the project iteratively, starting with rough ideas and quickly moving into prototyping and development. The interface was kept clean and minimal, with the timer and score always visible and immediate feedback shown after each answer. I implemented an asynchronous multiplayer system using shared quiz links and category-based leaderboards, allowing players to compete without real-time synchronization. Using Supabase for data persistence and Next.js for dynamic routing resulted in a scalable foundation that can easily support future features like daily challenges or fixed multiplayer sessions.",
  },

  gorillabot: {
    slug: "gorillabot",
    title: "GorillaBot",
    category: "Discord Bot",
    year: "2026",
    role: "Developer & UI/UX Designer",
    team: "Fahri Can Genç",
    heroImage: "/project-gorillabot-hero.jpg",
    middleImages: ["/project-gorillabot-1.jpg", "/project-gorillabot-2.jpg"],
    bottomImages: ["/project-gorillabot-3.jpg", "/project-gorillabot-4.jpg"],
    overview:
      "GorillaBot is a custom-built Discord bot designed to automate reminders, manage scheduled events, and support server organization. The bot focuses on reliability, clarity, and automation, helping Discord communities reduce manual work while staying informed.",
    challenge:
      "The main challenge was building a bot that could reliably handle scheduled reminders and background tasks without missing events or causing performance issues. I also had to design a system that was easy to configure, debug, and extend, while running in a Docker-based environment.",
    solution:
      "I approached this by building the bot with a modular architecture, separating commands, scheduling logic, and event handling. I implemented structured logging to track bot activity and errors, and used Docker Compose to ensure consistent deployment. By testing each feature incrementally and monitoring logs during live testing, I was able to improve stability, fix edge cases, and create a solid foundation for future features.",
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
        {project.link && (
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Link:</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaValue}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Visit Project
            </a>
          </div>
        )}
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
