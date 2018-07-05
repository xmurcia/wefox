import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../../models/post.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CustomModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Array<Post> = [];

  constructor(public postsService: PostsService,
              public bsModalRef: BsModalRef,
              public modalService: BsModalService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => console.log('Error ', error)
      );
  }

  deletePost(post: Post) {
    const postIndex = this.posts.findIndex( (item) => item.id === post.id)
    this.postsService.deletePost(post.id)
      .subscribe(
        postDeleted => this.posts.splice(postIndex, 1),
        error => console.log('Error deleting post')
      );
  }


  addPost(post: Post) {
    console.log('Add post' , post);
    this.postsService.createPost(post)
      .subscribe(
        postCreated => this.showToast(post, 'created'),
        error => console.log('Error creating post', error)
      );
  }

  editPost(post: Post) {
    this.postsService.updatePost(post)
      .subscribe(
        postEdited => this.showToast(post, 'edited'),
        error => this.refreshList()
      );
  }

  refreshList() {
    this.getPosts();
  }

  // TODO Create toast component
  showToast(post, operation) {
    console.log(`Succesfully ${operation}, ${post}`);
  }

  public openAddPostModal() {
    const config = {
      ignoreBackdropClick: true,
      initialState: {
        action: (post) => this.addPost(post),
        header: 'Add new post',
      }
    };
    this.bsModalRef = this.modalService.show(CustomModalComponent, config);
  }

  public openEditPostModal(postToEdit) {
    console.log('posttoedit' , postToEdit);
    const config = {
      ignoreBackdropClick: true,
      initialState: {
        action: (post) => this.editPost(post),
        header: 'Edit post',
        postToEdit
      }
    };
    this.bsModalRef = this.modalService.show(CustomModalComponent, config);
  }


}
