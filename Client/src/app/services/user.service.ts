import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { finalize, tap, map, last, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  accessToken:string;
  baseUrl:string;
  constructor(private http:HttpClient) {
    this.baseUrl = "http://192.168.1.5:3000/api/Users";
    this.accessToken = localStorage.getItem("accessToken");
  }

  login(email, password) {
    return this.http.post(this.baseUrl + "/login", {
      email: email,
      password: password
    });
  }

  register(email, password) {
    return this.http.post(this.baseUrl + "/", {
      email: email,
      password: password
    });
  }

  setAccessToken(token) {
    this.accessToken = token;
    localStorage.setItem("accessToken", token);
  }

  getAccessToken() {
    return this.accessToken;
  }

  uploadFiles(files) {
    for(const file of files) {
      file.container = "photos";
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append('custom_param', "test1");
      //this.http.post()
      const req = new HttpRequest('POST', 'http://192.168.1.5:3000/api/files/upload', formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap(message => this.showProgress(message)),
      last(), // return last (completed) message to caller
      );
    }
  }

  showProgress(message) {
    console.log("message", message);
  }

  handleError(file) {
    console.log("ERROR", file);
  }

  /** Return distinct message for sent, upload progress, & response events */
  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
      return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
      // Compute and show the % done:
      const percentDone = Math.round(100 * event.loaded / event.total);
      return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
      return `File "${file.name}" was completely uploaded!`;

      default:
      return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }


}
