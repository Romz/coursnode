import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:any;
  constructor(private userService:UserService) {
    this.user = {
      email: "test@42.am",
      password: "testtest"
    };
  }

  ngOnInit() {
  }


  submit() {
    this.userService.login(this.user.email, this.user.password).subscribe((result:any) => {
      this.userService.setAccessToken(result.id);
    });
  }

}
