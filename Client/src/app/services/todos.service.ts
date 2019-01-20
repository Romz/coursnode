import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl: string;
  accessToken:string;
  constructor(private http:HttpClient) {
    this.accessToken = localStorage.getItem("accessToken");
    this.baseUrl = "http://192.168.1.5:3000/api";
  }

  list() {
    return this.http.get(this.baseUrl + "/todos?accessToken=" + this.accessToken);
  }

  create(name) {
      return this.http.post(this.baseUrl + "/todos?accessToken=" + this.accessToken, {name: name});
  }

  containers() {
    return this.http.get("/containers?accessToken=" + this.accessToken);
  }
}
