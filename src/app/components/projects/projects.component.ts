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
      description: 'Food Delivery App Frontend is a modern React 18 application built with Vite, offering a complete food ordering experience. It allows users to browse restaurants and menus, manage a shopping cart, place orders, and track deliveries. With responsive design, popup-based authentication, React Router navigation, and Context API state management, the app delivers a fast, scalable, and user-friendly interface across all devices.',
      features: [
        'Restaurant & menu browsing',
        'Cart & checkout system',
        'Popup-based authentication',
        'Fully responsive UI'
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
      technologies: ['React', 'TailwindCSS', 'JavaScript']
    },



    {
  title: 'Hanover School – Modern University Website',
  summary: 'Modern educational university website built with React 18 and Vite',
  description:
    'Hanover School is a modern, responsive university website built using React 18 and Vite. The project showcases academic programs, detailed degree pages, and interactive UI components with smooth client-side routing using React Router. Framer Motion is used for animations, and the  clean UI/UX approach, making it fully responsive and ready for future backend integration.',
  features: [
    'Responsive navigation with dark/light mode',
    'Dynamic program listings with interactive cards',
    'Detailed degree pages with application modal and form validation',
    'Smooth client-side routing using React Router',
    'Animated UI interactions with Framer Motion',
    'Mobile-first, responsive layout'
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
    'JavaScript',
  ]
},





    {
      title: 'Movie-Explorer Site',
      summary: 'Discover Movies with TMDb API Integration',
      description: 'Movie-Explorer is a modern web application that allows users to search, explore, and discover movies from various categories. It is built using React, Vite, and integrates with TMDb (The Movie Database) API to provide real-time movie data. The application is designed to be fast, responsive, and user-friendly, making it a complete solution for movie enthusiasts.',
      features: [
        'Real-time movie search',
        'Category browsing',
        'Movie details and ratings',
        'Responsive design'
      ],
      image: 'assets/movie/project3.png',
      coverImage: 'assets/movie/project3.png',
      github: 'https://github.com/your-repo/movie-explorer',
      live: 'https://movie-explorer-ruby-three.vercel.app/',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe']
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

