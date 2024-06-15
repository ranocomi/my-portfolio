import { Component } from '@angular/core';
import {ComponentType} from "../interface/componentType";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  tabs: ComponentType[] = [
    {
      name: 'About Me',
      path: '/'
    },
    {
      name: 'Experience',
      path: '/experience'
    },
    {
      name: 'Skills',
      path: '/skills'
    }
  ];

  constructor(private router: Router) {}

  isActive(path: string){
    return this.router.url === path;
  }
}
