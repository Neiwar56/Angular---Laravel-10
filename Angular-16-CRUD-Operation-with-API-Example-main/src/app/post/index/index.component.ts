import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  post: Post[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getpost().subscribe((data: Post[])=>{
      this.post = data;
      console.log(this.post);
    })
  }


  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.postService.deletepost(id).subscribe(res => {
         this.post = this.post.filter(item => item.id !== id);
         console.log('Publication supprimé avec succès');
    })
  }

}
