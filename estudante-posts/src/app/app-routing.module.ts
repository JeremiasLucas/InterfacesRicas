import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
    { path: 'student', component: StudentComponent },
    { path: 'post', component: PostComponent },
    { path: 'posts', component: PostListComponent },
    { path: '', redirectTo: '/student', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }