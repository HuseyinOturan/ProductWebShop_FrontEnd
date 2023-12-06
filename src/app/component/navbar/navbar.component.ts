import {Component, OnInit} from '@angular/core';
import {User} from "../../interface/User";
import {AuthService} from "../../service/AuthService";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  currentUser: User | null=null;

  constructor(private authService : AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user)=> {

      this.currentUser=user;
    });
  }
  logout(): void {
    this.authService.logoutUser();
  }

}
