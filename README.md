# Fahri Can Genç - Frontend Portfolio

A professional portfolio website designed in Figma and built with Next.js and TypeScript. This project showcases my work as a Frontend Developer and ICT & Media student, featuring dynamic routing, responsive design, and a custom dark aesthetic.

**Live Demo:** [https://fahri-can-portfolio.vercel.app/](https://fahri-can-portfolio.vercel.app/)

## Tech Stack

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Language:** TypeScript
* **Styling:** Standard CSS Modules (No Tailwind)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** Vercel

## Key Features

* **Dynamic Project Pages:** A single template (`[slug]`) renders all project details automatically.
* **Real-Time Header:** Detects the user's timezone to display their local time and city.
* **Responsive Grid Layouts:** Custom CSS Grid implementation for project galleries.
* **Type Safety:** Fully typed with TypeScript interfaces for project data.
* **Optimized Images:** Uses `next/image` for automatic resizing and lazy loading.

## Getting Started Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/harkion/s3-portfolio-new.git](https://github.com/harkion/s3-portfolio-new.git)
    cd s3-portfolio-new
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Project Structure

```text
.
├── app/
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio Index
│   │   └── [slug]/        # Dynamic Project Template (The core logic)
│   ├── Header.tsx         # Client component for Time/Location
│   ├── globals.css        # Global variables (colors, fonts)
│   └── layout.tsx         # Root layout
├── public/                # All static assets (images)
└── README.md

This project is open source for educational purposes. Design and content © Fahri Can Genç.