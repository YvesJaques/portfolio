import { Injectable } from '@angular/core';
import { Project } from '../models/projects';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [
        'assets/Image1.png',
        'assets/Image2.png',
        'assets/Image3.png'
      ],
      tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 1,
      name: 'Sample Javascript Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [
        'assets/Image1.png',
        'assets/Image2.png',
        'assets/Image3.png'
      ],
      tags: [ Tag.JAVASCRIPT, Tag.JAVA ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 2,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [
        'assets/Image1.png',
        'assets/Image2.png',
        'assets/Image3.png'
      ],
      tags: [ Tag.C, Tag.CSHARP ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 3,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [
        'assets/Image1.png',
        'assets/Image2.png',
        'assets/Image3.png'
      ],
      tags: [ Tag.GO, Tag.TYPESCRIPT ],
      projectLink: 'https://github.com/YvesJaques'
    },
    {
      id: 4,
      name: 'Sample Angular Project',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description: 'Fullstack web app developed using Angular and Node.JS',
      pictures: [
        'assets/Image1.png',
        'assets/Image2.png',
        'assets/Image3.png'
      ],
      tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ],
      projectLink: 'https://github.com/YvesJaques'
    },
  ]

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) throw new Error('Project not found');

    return project
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(project => {
      let foundAll = true;

      filterTags.forEach(filterTag => {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
