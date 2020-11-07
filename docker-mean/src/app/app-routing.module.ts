import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostImageComponent } from './post-image/post-image.component';
import { ListImageComponent } from './list-image/list-image.component';


const routes: Routes = [

  { path: "newimage", component: PostImageComponent },
  { path: "", component: ListImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
