import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    this.userService.register(this.user.email, this.user.password).subscribe((result) => {
      console.log(result);
    });
  }

}
