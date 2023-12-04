import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: "root"
})
export class LoginComponent {

  public email : string ="";
  public password : string ="";
  public loggedInMessage : string ="";

  constructor(private http: HttpClient) {
  }

  login(){
    const url= "http://localhost:8080/authController/loginUser";

    let loggedIn =this.http.post(url,{email:this.email,password:this.password});

    loggedIn.subscribe({
      next :() => this.loggedInMessage ="Inlogged",
      error : () => this.loggedInMessage="Login failed"
    })
  }

}
