import { Injectable } from "@angular/core";
import { Auth  } from 'aws-amplify';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService
{
  private decodedToken: any| null;

  public GetEmailAddress() : string | undefined
  {
    if(this.decodedToken === undefined || this.decodedToken ===null)
     return undefined;
    return  this.decodedToken.email;
  }
  public async login(email:string, password:string)
  {
    const user = await Auth.signIn(String(email), String(password));
    try
    {
    let decoded = jwt_decode(user.signInUserSession.idToken.jwtToken);
    this.decodedToken=decoded;
    console.log(this.decodedToken.email);
    }
    catch(error)
    {
        console.log(error);
    }
    
    localStorage.setItem('id_token', user.idToken);
    return user;
  }

  public async onSignUp(username: string, password: string, email: string, phone_number:string )
  {
    const { user } = await Auth.signUp({
        username,
          password,
          attributes: {
              email,        // optional
              phone_number,   // optional - E.164 number convention
              // other custom attributes 
          }
      });
      return user;
  }

  public async onConfirmSignUp(userName:string, code: string)
  {
      return  await Auth.confirmSignUp(userName, code);
  }

  getExpiryTime() {
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    console.log('expiryTime :' +expiryTime);
    if (expiryTime) {
        var d = new Date(expiryTime*1000); // The 0 there is the key, which sets the date to the epoch      
      return (d.getTime() - (new Date()).getTime()) < 5000;
    } else {
      return true;
    }
  }

  public async onSignOut()
  {
    localStorage.removeItem('id_token');
    this.decodedToken=null;
    await Auth.signOut();
  }
}