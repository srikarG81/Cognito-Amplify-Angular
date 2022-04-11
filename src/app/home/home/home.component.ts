import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AuthService';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  error : string | undefined;
  message : string | undefined;
  public async fileUploader(event:any) {
    try
    {
      this.message= undefined;
      this. error = undefined;
    const file = event.target;
    if (file.files.length > 0) {
        console.log(file.files[0]);
    }
    console.log(file.files[0].name);
    const filename = `${Date.now()}-${file.files[0].name}`;
    const result = await Storage.put(filename,file.files[0]
      );
      this.message = "File uploaded successfully";
    }
    catch(error)
    {
        this.error ="File upload failed!";
    }
}

public GetEmailAddress() : string
{
  let user= this.authService.GetEmailAddress();
  if(user === undefined)
    return "";
  else
  return user;
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
