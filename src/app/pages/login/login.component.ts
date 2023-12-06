import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/AuthService";
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

  loginRequest = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.loginUser(this.loginRequest).subscribe(
      (response) => {
        // Başarılı giriş işlemleri
        console.log('Login successful', response);
        // İsteğe bağlı olarak başka işlemler eklenebilir, örneğin yönlendirme (routing)
      },
      (error) => {
        // Hata durumları
        console.error('Login error', error);
        // Hata durumlarına göre kullanıcıya uygun mesajları göstermek veya diğer işlemleri yapmak mümkün
      }
    );
  }

}
