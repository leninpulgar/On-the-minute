import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = "http://wicstudio.com/otmpanel/public/blogs";

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this._url);
  }

}