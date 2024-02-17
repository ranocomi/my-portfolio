import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'skills', component: SkillsComponent}
];
