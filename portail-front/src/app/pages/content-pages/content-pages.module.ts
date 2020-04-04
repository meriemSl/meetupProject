import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ComingSoonPageComponent } from "./coming-soon/coming-soon-page.component";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";
import { RegisterPageComponent } from "./register/register-page.component";


import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { EventsComponent } from './events/events.component';

export function getAuthServiceConfig(){
let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('254425459954-p69os47k30dcuq31kehfcn30ht38ogj7.apps.googleusercontent.com')

    },
    {
        id:FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("546632349310704")
      }
  
  ]);
    return config;
  } 
@NgModule({
    imports: [
        SocialLoginModule,
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        ComingSoonPageComponent,
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LockScreenPageComponent,
        LoginPageComponent,
        MaintenancePageComponent,
        RegisterPageComponent,
        EventsComponent
    ],
    providers: [
        //Toastr and auth providers
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfig
          } ]
})
export class ContentPagesModule { }