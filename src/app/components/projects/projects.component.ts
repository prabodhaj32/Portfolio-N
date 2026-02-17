import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { features } from 'node:process';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  selectedProject: any = null;

  projects = [
  {
    title: 'Taste Corner Website',
    summary: 'Modern Food Delivery App with React 18 and Vite',

    description:
      'Developed a modern Food Delivery frontend application using React 18 and Vite, designed to provide a seamless online ordering experience. The platform allows users to browse restaurants and menus, manage a dynamic shopping cart, and simulate order placement. Implemented responsive layouts, popup-based authentication UI, React Router for smooth navigation, and Context API for efficient state management. Built with performance optimization and clean UI/UX principles to ensure scalability and cross-device compatibility.',

    features: [
      'Restaurant & menu browsing',
      'Dynamic cart & checkout system',
      'Popup-based authentication UI',
      'React Router navigation',
      'Context API state management',
      'Fully responsive design'
    ],

    images: [
      'assets/tasteconer/project1.png',
      'assets/tasteconer/pro2.png',
      'assets/tasteconer/pro3.png',
      'assets/tasteconer/pro4.png',
    ],

    image: 'assets/tasteconer/project1.png',
    coverImage: 'assets/tasteconer/project1.png',

    github: 'https://github.com/prabodhaj32/Food-Delivery-Reactjs.git',
    live: 'https://taste-corner-reactjs-theta.vercel.app/',

    technologies: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],

    category: 'Frontend Web Application'
  },

  {
    title: 'Hanover School – Modern University Website',
    summary: 'Modern Educational University Website Built with React 18 and Vite',

    description:
      'Built a modern and fully responsive university website using React 18 and Vite to showcase academic programs and institutional information. The application features dynamic program listings, detailed degree pages, and interactive UI components powered by React Router for smooth client-side navigation. Integrated Framer Motion for engaging animations and implemented a clean, structured UI/UX design. Developed with scalability in mind, making it ready for future backend and CMS integration.',

    features: [
      'Responsive navigation with dark/light mode',
      'Dynamic program listings with interactive cards',
      'Detailed degree pages with application modal',
      'Form validation system',
      'Smooth client-side routing using React Router',
      'Animated UI interactions with Framer Motion',
      'Mobile-first responsive layout'
    ],

    images: [
      'assets/uni/project1.png',
      'assets/uni/project2.png',
      'assets/uni/project3.png',
      'assets/uni/project4.png',
      'assets/uni/project5.png'
    ],

    image: 'assets/uni/project1.png',
    coverImage: 'assets/uni/project1.png',

    github: 'https://github.com/prabodhaj32/Hanover-Reactjs-Web',
    live: 'https://hanover-reactjs-web.vercel.app/',

    technologies: [
      'React',
      'Vite',
      'Framer Motion',
      'JavaScript'
    ],

    category: 'Frontend Web Application'
  },

  {
    title: 'IMAGIX CINEMA – Movie Booking Web Application',
    summary: 'React-based Movie Discovery & Booking Platform with TMDb API',

    description:
      'Developed a full-featured Movie Booking Web Application using React (Vite) and Tailwind CSS, integrating The Movie Database (TMDb) API for real-time movie data. Implemented advanced features including infinite scroll, debounced search, interactive seat selection, and a simulated booking workflow. Added PDF ticket generation and QR code integration for enhanced user experience. Designed with modern UI/UX principles, performance optimization, and responsive layouts to ensure smooth interaction across all devices.',

    features: [
      'Real-time movie search with debouncing',
      'Trending movies integration (weekly)',
      'Movie details with cast, trailers, and ratings',
      'Interactive seat selection system',
      'Booking confirmation with PDF ticket & QR code',
      'Favorites management',
      'Infinite scroll pagination',
      'Dark/Light theme toggle',
      'Fully responsive design'
    ],

    images: [
      'assets/movie/p5.png',
      'assets/movie/p2.png',
      'assets/movie/p3.png',
      'assets/movie/p4.png',
      'assets/movie/p5.png'
    ],

    image: 'assets/movie/p1.png',
    coverImage: 'assets/movie/p5.png',

    github: 'https://github.com/prabodhaj32/IMAGIX-CINEMA',
    live: 'https://imagix-cinema-chi.vercel.app/',

    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'TMDb API'
    ],

    category: 'Frontend Web Application'
  }
];



  
  openProjectPopup(project: any) {
   this.selectedProject = project;
  }

  closePopup() {
    this.selectedProject = null;
  }
  
  // Open project in a new tab
  openProject(url: string) {
    window.open(url, '_blank');
  }

  // Computed property for additional images count
  get additionalImagesCount(): number {
    return Math.floor(Math.random() * 5) + 2;
  }
}

