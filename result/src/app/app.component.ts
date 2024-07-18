import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component'; // Ensure the path is correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeacherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'result';
}
