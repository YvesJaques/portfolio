import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/projects';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {  
  projects: Project[] = [
    {
      id: 1,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [''],
      tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 2,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [''],
      tags: [ Tag.JAVASCRIPT, Tag.JAVA ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 3,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [''],
      tags: [ Tag.C, Tag.CSHARP ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 4,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [''],
      tags: [ Tag.GO, Tag.TYPESCRIPT ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 5,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [''],
      tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ],
      projectLink: 'https://github.com/YvesJaques'
    },
  ]

  constructor(private titleService: Title) {
    this.titleService.setTitle('Yves Morais Jaques - Portfolio');
  }
}
