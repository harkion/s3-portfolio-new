import Link from 'next/link'
import Image from 'next/image'
import styles from './portfolio.module.css'

interface Project {
id: string;
title: string;
category: string;
description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
{
    id: '1',
    title: 'Gaha Geek',
    category: 'Web Design',
    description: 'A game asset store website for students to access and upload free assets',
    image: '/project-gaha.jpg',
    link: '/portfolio/gaha-geek'
},

{
    id: '2',
    title: 'Osfast',
    category: 'Brand Identity',
    description: 'A real client project creating a full rebrand for a tech focused personal brand',
    image: '/project-osfast.jpg',
    link: '/portfolio/osfast'
},

{
    id: '3',
    title: 'Belco',
    category: 'UI/UX Design',
    description: 'Redesigning a university student exchange platform with modern functionality',
    image: '/project-belco.jpg',
    link: '/portfolio/belco'
},

{
    id: '4',
    title: 'Zone In',
    category: 'Web-based Game',
    description: 'An ADHD friendly web-based reaction game built with HTML, CSS, and JavaScript',
    image: '/project-zonein.jpg',
    link: '/portfolio/zone-in'
},

{
    id: '5',
    title: 'OWOW',
    category: 'Flipdot Display Tetris',
    description: 'A flipdot display powered Tetris game',
    image: '/project-owow.jpg',
    link: '/portfolio/owow'
},

{
    id: '6',
    title: 'Quiz Craft',
    category: 'Web-based Game',
    description: 'Node.js powered quiz application with real-time multiplayer functionality',
    image: '/project-quizcraft.jpg',
    link: '/portfolio/quiz-craft'
},

{
    id: '7',
    title: 'GorillaBot',
    category: 'Discord Bot',
    description: 'A multifunctional Discord bot offering moderation, reminders, and utility features',
    image: '/project-gorillabot.jpg',
    link: '/portfolio/gorillabot'
}


  // More projects to come...
];

export default function Portfolio() {

    return (
    <div className={styles.container}>
    
    <header className={styles.header}>
        <h1 className={styles.title}>
        Dive into a few projects that represent my most fulfilling design experiences
        </h1>
    </header>

    <div className={styles.grid}>
        {projects.map((project) => (
        <Link href={project.link} key={project.id} className={styles.card}>
            
            <div className={styles.imageWrapper}>
            <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
            />
            </div>

            <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <span className={styles.projectRole}>{project.category}</span>
            </div>
            <p className={styles.projectDesc}>{project.description}</p>
            </div>
            
        </Link>
        ))}
    </div>

    </div>
)
}