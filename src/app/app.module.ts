import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthService } from './AuthService';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AuthorizeGuard } from './AuthorizeGuard ';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmationComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'confirmation', component: ConfirmationComponent},
      {path: 'home', component: HomeComponent,canActivate: [AuthorizeGuard]},
      {path: '', redirectTo:'home',  pathMatch: 'full' },
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
