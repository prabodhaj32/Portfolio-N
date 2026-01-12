import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-education',
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationData = [
    {
      title: 'Higher Diploma in Software Engineering',
      institution: 'National Institute of Business Management (NIBM)',
      duration: '2023 - Present',
      location: 'Kandy, Sri Lanka',
      side: 'left',
    },
    {
      title: 'Diploma in Software Engineering',
      institution: 'National Institute of Business Management (NIBM)',
      duration: '2022 - 2023',
      location: 'Kandy, Sri Lanka',
      side: 'right',
    },
    {
      title: 'Diploma in Information Technology',
      institution: 'ESOFT METRO CAMPUS',
      duration: '2017 - 2018',
      location: 'Kandy, Sri Lanka',
      side: 'left',
    },
    {
      title: 'Diploma in English',
      institution: 'ESOFT METRO CAMPUS',
      duration: '2017 - 2018',
      location: 'Kandy, Sri Lanka',
      side: 'right',
    },
    {
      title: 'Advanced Level',
      institution: 'K/Jinaraja Boys College',
      duration: '2017 - 2019',
      location: 'Gampola, Sri Lanka',
      side: 'left',
    },
    
  ];
}