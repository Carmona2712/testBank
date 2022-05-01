import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import {error} from "protractor";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  URL_TOKEN = 'http://localhost:9095';

  constructor(private auth:AuthServiceService,private http: HttpClient, private router:Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  login():void {
      if(this.user.username === null || this.user.password === null){
        alert("Error campos vacios");
        return;
      }

      this.auth.login(this.user).subscribe(response => {
        this.router.navigate(['/dashboard']);
        console.log(response);
        alert("Hola "+response.username+" has iniciado sesión");
      },(error => {
        alert("Error de credenciales");
      }));
  }

}
