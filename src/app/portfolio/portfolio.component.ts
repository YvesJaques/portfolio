import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {  
  projects = [
    {
      projectName: 'Sample Angular Project',
      description: 'Fullstack web app developed using Angular and Node.JS',
      link: 'https://github.com/YvesJaques'
    },
    {
      projectName: 'Sample Angular Project',
      description: 'Fullstack web app developed using Angular and Node.JS',
      link: 'https://github.com/YvesJaques'
    },
    {
      projectName: 'Sample Angular Project',
      description: 'Fullstack web app developed using Angular and Node.JS',
      link: 'https://github.com/YvesJaques'
    },
    {
      projectName: 'Sample Angular Project',
      description: 'Fullstack web app developed using Angular and Node.JS',
      link: 'https://github.com/YvesJaques'
    },
    {
      projectName: 'Sample Angular Project',
      description: 'Fullstack web app developed using Angular and Node.JS',
      link: 'https://github.com/YvesJaques'
    },
  ]

  constructor(private titleService: Title) {
    this.titleService.setTitle('Yves Morais Jaques - Portfolio');
  }
}
