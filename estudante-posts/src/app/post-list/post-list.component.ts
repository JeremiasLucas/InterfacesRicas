import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    posts: any[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    formatDate(date: string): string {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        };
        return new Date(date).toLocaleString('pt-BR', options);
    }

    deletePost(id: number) {
        this.apiService.deletePost(id).subscribe(() => {
            this.posts = this.posts.filter(post => post.id !== id);
        });
    }
}
