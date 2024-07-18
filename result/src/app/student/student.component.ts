import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  student: any = null;
  searched: boolean = false;

  fetchStudentDetails(rollNo?: string) {
    const students = [
      { rollNo: '1', name: 'John Doe', marks: 85 },
      { rollNo: '2', name: 'Jane Smith', marks: 78 }
    ];

    this.searched = true;

    if (rollNo) {
      this.student = students.find(s => s.rollNo === rollNo) || null;
    } else {
      this.student = null; // Reset student details if no rollNo is provided
    }
  }
}
