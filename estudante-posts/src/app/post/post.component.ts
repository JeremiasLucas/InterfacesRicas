import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post = { titulo: '', descricao: '', dataHora: new Date()};

  constructor(private apiService: ApiService){}


  onSubmit() {
    this.apiService.createPost(this.post).subscribe(response => {
      console.log('Post cadastrado com sucesso', response);
    });
  }
}
