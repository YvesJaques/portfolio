import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/projects';
import { Tag } from '../models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {  

  projects: Project[] = []

  isCollapsed: boolean = true;

  typescript: boolean = false;
  angular: boolean = false;

  filtering = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Yves Morais Jaques - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    };

    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    };

    if(filterTags.length > 0) {
      this.filtering = true;
    }

    if(filterTags.length == 0) {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
