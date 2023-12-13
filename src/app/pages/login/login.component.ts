import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../../interface/LoginResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: "root"
})
export class LoginComponent {

  public email : string= '';
  public password : string =''
  public loggedInMessage : string= '';

  get currentUser(): LoginResponse | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }
  constructor(private http : HttpClient , private router: Router) {}
   login() {
     const url = 'http://localhost:8080/authController/loginUser';
     let response= this.http.post<LoginResponse>(url,{email : this.email, password: this.password})

     response.subscribe({
       next :(resp : LoginResponse)=> {
         this.loggedInMessage = `Welcome ${resp.email}!`;
         localStorage.setItem('currentUser', JSON.stringify(resp));
         this.router.navigate(['/user-page'])

       },
       error :() => this.loggedInMessage ="Login failed!"
     })
  }

  logout() {

    localStorage.removeItem('currentUser');
    this.loggedInMessage = 'logout is correct';
  }


}
