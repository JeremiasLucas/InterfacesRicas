import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://3.128.249.166:3000';
  
  
  constructor(private http: HttpClient) {}

  createStudent(student: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/students`,student);
  }
  createPost(post: any): Observable<any> {
    return this.http.post('${this.apiUrl}/posts',post);
  }
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`);
}
}
