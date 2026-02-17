import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
  title: 'Full-Stack Developer',
  company: 'Spendview ApS (Remote)',
  duration: 'June 2025 - December 2025',
  author: '',
  type: 'fulltime',
  description: 'Working as a Full-Stack Developer at Spendview ApS (Denmark – Remote), developing scalable and responsive web applications using React, Angular, and ASP.NET Core. Built secure RESTful APIs with JWT-based authentication, integrated third-party Weather APIs for real-time agricultural insights, and optimized CRUD operations with MySQL. Collaborated with cross-functional teams using Git-based workflows and leveraged AI development tools to enhance productivity and code quality.',
  technologies: [
    'React.js',
    'Angular',
    'ASP.NET Core',
    'JavaScript',
    'JWT Authentication',
    'Tailwind CSS',
    'REST APIs',
    'MySQL'
  ],
  achievements: [
    'Developed secure JWT-based authentication system',
    'Integrated real-time Weather API for agricultural features',
    'Optimized database queries and CRUD operations',
    'Improved application performance through debugging and testing',
    'Accelerated development using AI-assisted coding tools'
  ]
}

    // {
    //   id: 2,
    //   title: 'Frontend Developer',
    //   company: 'Digital Innovations Ltd.',
    //   duration: 'Jun 2022 - Dec 2022',
    //   author: 'Portfolio Author',
    //   type: 'fulltime',
    //   description: 'Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX team to implement pixel-perfect designs and optimized application performance.',
    //   technologies: ['Vue.js', 'JavaScript', 'SASS', 'Webpack', 'Jest'],
    //   achievements: ['Built 15+ components', 'Improved accessibility scores', 'Reduced load time by 25%']
    // },
    // {
    //   id: 3,
    //   title: 'Freelance Web Developer',
    //   company: 'Self Employed',
    //   duration: 'Feb 2022 - May 2022',
    //   author: 'Portfolio Author',
    //   type: 'freelance',
    //   description: 'Provided web development services to various clients, specializing in modern frontend technologies and responsive design solutions.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
    //   achievements: ['Completed 8 projects', '95% client satisfaction', 'Generated $50K+ revenue']
    // },
    // {
    //   id: 4,
    //   title: 'Frontend Development Intern',
    //   company: 'Creative Web Studio',
    //   duration: 'Sep 2021 - Jan 2022',
    //   author: 'Portfolio Author',
    //   type: 'internship',
    //   description: 'Assisted in developing and maintaining client websites. Gained hands-on experience with modern web technologies and agile development practices.',
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Bootstrap'],
    //   achievements: ['Built 5 landing pages', 'Learned React basics', 'Participated in daily standups']
    // }
  ];

  get totalTechnologies(): number {
    return this.experiences.reduce((sum, exp) => sum + exp.technologies.length, 0);
  }
}
