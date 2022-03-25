import { Component } from '@angular/core';
import { Auth  } from 'aws-amplify';

import { stringify } from 'querystring';
import { AuthService } from './AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authdemo';
  email: string | null = null;
  password: string | null = null;
  userName:string | null = null;
  mobile?:number | null= null;
  error?: string| null =null;
  code?: string | null = null;

  constructor( private authService: AuthService )
  {
    
  }
 

  

  


  
}
