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
    this.postsService.deletePost(post.id)
      .subscribe(
        postDeleted => console.log('Post deleted: ', postDeleted),
        error => console.log('Error deleting post')
      );
  }

  addPost(post: Post) {
    console.log('Adding post ...');
  }

  editPost(post: Post) {
    console.log('Post to edit... ', post);
  }

  public openAddPostModal() {
    const config = {
      ignoreBackdropClick: true,
      initialState: {
        action: (post) => this.addPost(post),
        header: 'Add new post',
        modalType: 'create'
      }
    };
    this.bsModalRef = this.modalService.show(CustomModalComponent, config);
  }

  public openEditPostModal() {
    const config = {
      ignoreBackdropClick: true,
      initialState: {
        action: (post) => this.editPost(post),
        header: 'Edit post',
        modalType: 'create'
      }
    };
    this.bsModalRef = this.modalService.show(CustomModalComponent, config);
  }


}
