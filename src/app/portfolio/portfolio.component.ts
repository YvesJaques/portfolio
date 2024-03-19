import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/projects';
import { Frameworks, Languages, Tag } from '../models/tag';
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

  languages = Languages
  frameworks = Frameworks

  filterTags: Tag[] = [];
  filtering = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Yves Morais Jaques - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter($event: Tag) {
    
    if ($event) {
      const tagIndex = this.filterTags.findIndex(tag => tag == $event)

      if(tagIndex !== -1) {
        this.filterTags.splice(tagIndex, 1)
      } else {
        this.filterTags.push($event)
      }
      
    };
    
    if(this.filterTags.length > 0) {
      this.filtering = true;
    }
    
    if(this.filterTags.length == 0) {
      this.filtering = false;
    }
    
    this.projects = this.projectService.GetProjectsByFilter(this.filterTags);
  }
  
  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
