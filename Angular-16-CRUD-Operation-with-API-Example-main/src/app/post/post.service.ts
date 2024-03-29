import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "http://localhost:8000/api/Post";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getpost( ): Observable<any[]> {
    return this.http.get<Post[]> (this.apiURL);
  }

  find(id: number): Observable<any> {
    return this.http.get<Post>(`${this.apiURL}/${id}`);
  }

  createpost(post: Post): Observable<any> {
    return this.http.post<Post> (this.apiURL, post);
    }


   updatepost(post:Post): Observable<any> {
    const url = `${this.apiURL}/${post.id}`;
    return this.http.post<Post> (this.apiURL, post, this.httpOptions)
   }

   deletepost(id: number):Observable<void>{
    const url = `${this.apiURL}/${id}`;
     return this.http.delete<void>(url);
   }
}
