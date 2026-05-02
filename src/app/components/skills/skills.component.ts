import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },
     { name: 'Python', icon: '🐍' },
    { name: 'Odoo', icon: '🧩' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Postman', icon: '📮' },
    { name: 'CSS3', icon: '💎' },
    { name: 'Git', icon: '📚' },
    { name: 'Bitbucket', icon: '🪣' },  
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'OWL (Odoo Web Library)', icon: '🦉' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'RPC', icon: '⚙️' }
    
  ];
}
