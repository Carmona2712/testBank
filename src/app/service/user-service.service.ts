import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) {}

  private isNotAuthorized(e): boolean{
    if (e.status === 401 || e.status === 403){
      this.router.navigate(['/login']);
      return true;
    }else{
      return false;
    }
  }



}
