import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
  title: 'Taste Corner Website',
  description: 'Food Delivery App Frontend is a modern React 18 application built with Vite, offering a complete food ordering experience. It allows users to browse restaurants and menus, manage a shopping cart, place orders, and track deliveries. With responsive design, popup-based authentication, React Router navigation, and Context API state management, the app delivers a fast, scalable, and user-friendly interface across all devices.',
  image: 'assets/project1.png',
  link: 'https://taste-corner-reactjs-theta.vercel.app/',
  technologies: ['React', 'TailwindCSS', 'JavaScript']
},
    {
      title: 'Edusity – Educational Web Application',
      description: 'Edusity is a modern, responsive React web application for educational institutions, built with React 18 and Vite. It features dynamic program listings, detailed degree pages, smooth navigation with React Router, and animated UI using Framer Motion, delivering a scalable, mobile-first user experience across all devices.',
      image: 'assets/project2.png',
      link: 'https://educity-reactjs-web.vercel.app/',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'Movie-Explorer Site',
      description: 'Movie-Explorer is a modern web application that allows users to search, explore, and discover movies from various categories. It is built using React, Vite, and integrates with TMDb (The Movie Database) API to provide real-time movie data. The application is designed to be fast, responsive, and user-friendly, making it a complete solution for movie enthusiasts.',
      image: 'assets/project3.png',
      link: 'https://movie-explorer-ruby-three.vercel.app/',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe']
    },
    //  {
    //   title: 'E-commerce Site',
    //   description: 'A responsive e-commerce platform with payment integration, inventory management, and admin dashboard.',
    //   image: 'assets/project4.png',
    //   link: 'https://example.com/ecommerce',
    //   technologies: ['React', 'Node.js', 'MySQL', 'Stripe']
    // },
    //  {
    //   title: 'E-commerce Site',
    //   description: 'A responsive e-commerce platform with payment integration, inventory management, and admin dashboard.',
    //   image:'assets/project2.png',
    //   link: 'https://example.com/ecommerce',
    //   technologies: ['React', 'Node.js', 'MySQL', 'Stripe']
    // },
    //  {
    //   title: 'E-commerce Site',
    //   description: 'A responsive e-commerce platform with payment integration, inventory management, and admin dashboard.',
    //   image: 'assets/project4.png',
    //   link: 'https://example.com/ecommerce',
    //   technologies: ['React', 'Node.js', 'MySQL', 'Stripe']
    // }
    
  ];

  // Open project in a new tab
  openProject(url: string) {
    window.open(url, '_blank');
  }
}

