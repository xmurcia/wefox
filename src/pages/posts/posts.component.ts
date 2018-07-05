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
  public alerts: any[] = [{
    type: 'success',
    msg: `Successful operation!`,
    timeout: 5000
  },
  {
    type: 'danger',
    msg: `Something wrong happened, please, try again later`,
    timeout: 5000
  }];
  public alert;

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
        error => console.log('Error getting list', error)
      );
  }

  deletePost(post: Post) {
    const postIndex = this.posts.findIndex((item) => item.id === post.id);
    this.postsService.deletePost(post.id)
      .subscribe(
        postDeleted =>  {
          this.refreshList();
          this.showAlert('success');
        },
        error => {
          this.showAlert('danger');
          console.log('Error deleting post', error);
        }
      );
  }


  addPost(post: Post) {
    this.postsService.createPost(post)
      .subscribe(
        postCreated => {
          this.refreshList();
          this.showAlert('success');
        },
        error => {
          console.log('Error creating post', error);
          this.showAlert('danger');
        }
      );
  }

  editPost(post: Post) {
    this.postsService.updatePost(post)
      .subscribe(
        postEdited => {
          this.refreshList();
          this.showAlert('success');
        },
        error => {
          console.log('Error updating post', error);
          this.showAlert('danger');
          this.refreshList();
        }
      );
  }

  refreshList() {
    this.getPosts();
  }

  showAlert(operation) {
    window.scrollTo(0, 0);
    this.alert = this.alerts.filter( (alert) => alert.type === operation)[0];
  }

  onCloseAlert() {
    this.alert = null;
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
