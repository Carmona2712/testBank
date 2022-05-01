import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../model/user/user";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  credentials:string = btoa("testbank"+":"+"12345");
  httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization':'basic '+this.credentials});
  URL:string = "http://localhost:9095/oauth/token";


  constructor(private http:HttpClient, private router: Router) {
  }

  login(user:User): Observable<any>{
    let params = new URLSearchParams();
    params.set("username",user.username);
    params.set("password",user.password);
    params.set("grant_type","password");
    return this.http.post<any>(this.URL,params.toString(),{headers : this.httpHeaders});
  }

}
