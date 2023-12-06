import {Component, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {User} from "../../interface/User";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../../interface/LoginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: "root"
})
export class LoginComponent {

  public loggedIn =false;
  currentUser : User | null=null;
  public email : string= '';
  public password : string ='';
  constructor(private http : HttpClient) {}
   login() {

    const loginData : LoginRequest ={email : this.email, password : this.password}

     const url = 'http://localhost:8080/authController/loginUser';

    let loginAttempt = this.http.post<User>(url, loginData);
    loginAttempt.subscribe(
      (user) => {
        console.log("user inlogged")
        this.loggedIn= true;
        this.currentUser= user;
        localStorage.setItem('currenUser' , JSON.stringify(this.currentUser));
      },
      error => {
        console.error('loggin failed');
      }
      );
  }
  logout(){
    this.loggedIn=false;
    this.currentUser=null;
    localStorage.removeItem('currentUser')
  }
}
