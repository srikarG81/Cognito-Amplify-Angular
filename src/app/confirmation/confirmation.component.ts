import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  email: string | null = null;
  password: string | null = null;
  userName:string | null = null;
  mobile?:number | null= null;
  error?: string| null =null;
  code?: string | null = null;

  constructor( private authService: AuthService )
  {
    
  }

  ngOnInit(): void {
  }

  public async onConfirmSignUp()
  {
   
      try {
        let username= String(this.email);
        let code =   String(this.code);
        await this.authService.onConfirmSignUp(username,code);
      } catch (error: any) {
       
        this.error= error.message;
          console.log('error confirming sign up', error);
      }
  }

}
