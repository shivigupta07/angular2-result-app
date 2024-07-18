import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  students = [
    { rollNo: 1, name: 'John Doe', marks: 85 },
    { rollNo: 2, name: 'Jane Smith', marks: 92 },
    // Add more students as needed
  ];

  getStudentRows() {
    let rows = '';
    for (let student of this.students) {
      rows += `
        <tr>
          <td>${student.rollNo}</td>
          <td>${student.name}</td>
          <td>${student.marks}</td>
        </tr>
      `;
    }
    return rows;
  }

  addStudent(rollNo: string, name: string, marks: string) {
    const newStudent = {
      rollNo: parseInt(rollNo, 10),
      name: name,
      marks: parseInt(marks, 10)
    };
    this.students.push(newStudent);
  }
}
