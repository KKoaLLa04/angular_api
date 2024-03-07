import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData(){
    let url = "https://65e92e5f4bb72f0a9c50dec5.mockapi.io/api/exampleApi";

    return this.http.get(url);
  }
}
