import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { TeacherComponent } from '../teacher/teacher.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentComponent: any;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    switch (route) {
      case '/student':
        this.currentComponent = StudentComponent;
        break;
      case '/teacher':
        this.currentComponent = TeacherComponent;
        break;
      default:
        this.currentComponent = null;
        break;
    }
    this.router.navigateByUrl(route);
  }

}
