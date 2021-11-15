import { MaterialModule } from './../../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsPostsComponent } from './pages/cards-posts/cards-posts.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ListPostsComponent,
    CardsPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ]
})
export class PostsModule { }