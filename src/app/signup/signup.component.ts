import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string | null = null;
  password: string | null = null;
  userName:string | null = null;
  mobile?:number | null= null;
  error?: string| null =null;
  code?: string | null = null;
  success?: string | null= null;
  constructor( private authService: AuthService )
  {
    
  }

  ngOnInit(): void {
  }

  public async onSignUp()
  {
    try {
      this.error=null;
      this.success=null;
      let username= String(this.email);
      let password= String(this.password);
      let email = String(this.email);
      let phone_number = String(this.mobile);
      const  user  = await this.authService.onSignUp(username,password,email,phone_number);
      this.success='Signed up successfully!'
      console.log(user);
  } catch (error: any) {
    if(error.code =='UsernameExistsException')
    {
      this.error= error.message;
    }

    if(error.code =='InvalidParameterException')
    {
      if(error.message=='Invalid phone number format')
      {
        error.message ='Invalid phone number Or Country code is missing.';
      }
      
    }
    this.error= error.message;
      console.log('error signing up:', error);
  }
  }

}
