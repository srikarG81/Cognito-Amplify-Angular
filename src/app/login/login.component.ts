import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'authdemo';
  email: string | null = null;
  password: string | null = null;
  userName:string | null = null;
  mobile?:number | null= null;
  error?: string| null =null;
  code?: string | null = null;

  constructor( private authService: AuthService,
    private route: ActivatedRoute,
        private router: Router )
  {
    
  }
  ngOnInit(): void {
    
  }
 public async onSignIn()
  {
    try
    {
      if(this.email && this.password)
      {
      const user = await this.authService.login(String(this.email), String(this.password));
      return  this.router.navigate(['home']);

      }
      else
      {
        this.error="email or password can't be empty";
      }
    }
    catch(error: any)
    {
       if(error.code =='UserNotConfirmedException')
       {
         this.error= "Validate your email Id";
       }
       if(error.code =='UserNotFoundException')
       {
         this.error= error.message;
       }
       this.error= error.message;
       console.log(error);
    }
    return null;
  }

}
