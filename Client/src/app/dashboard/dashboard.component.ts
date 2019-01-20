import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../services/user.service";
import { TodosService } from "../services/todos.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name:string;

  @ViewChild('file') file;
  constructor(private userService:UserService) {
    console.log(this.userService.getAccessToken());
  }

  addFiles() {
    //console.log(this.file);
    this.userService.uploadFiles(this.file.nativeElement.files).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit() {
  }


}
