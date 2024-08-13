import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent {
    student = { matricula: '', nome: '', email: '' };

    constructor(private apiService: ApiService) {}

    onSubmit() {
        console.log("jeremias pedreiro");
        this.apiService.createStudent(this.student).subscribe(response => {
            console.log('Estudante cadastrado com sucesso', response);
        });
    }
}
