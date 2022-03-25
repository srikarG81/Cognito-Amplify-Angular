import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AuthService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public async  onSignOut(){
    try {
       await this.authService.onSignOut();
      console.log("signed out!");
    } catch (error) {
      console.log(error);
    }
  }

}
