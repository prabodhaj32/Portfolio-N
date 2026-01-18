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
      // id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 - Present',
      author: 'Portfolio Author',
      type: 'fulltime',
      description: 'Leading frontend development initiatives, architecting scalable React applications, and mentoring junior developers. Implemented micro-frontend architecture that improved team productivity by 60%.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
      achievements: ['Improved performance by 40%', 'Led team of 5 developers', 'Reduced bundle size by 30%']
    },
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
