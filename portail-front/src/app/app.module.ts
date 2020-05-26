import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
//import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { CustomOption } from "./shared/toastr/custom-option";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import{ApiService } from './api-service.service';


  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
 
import * as $ from 'jquery';
import { EventsComponent } from './pages/content-pages/events/events.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GroupComponent } from './pages/content-pages/group/group.component';
import { TagInputModule } from 'ngx-chips';
import { GroupServiceService } from './services/group-service.service';
import { UpdateComponent } from './pages/content-pages/update/update.component';

 

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }



@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        EventsComponent,
        GroupComponent,
        UpdateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule ,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        TagInputModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
              }
        }),
       
    ],
    providers: [
        //Toastr and auth providers
        { provide: ToastOptions, useClass: CustomOption },
        AuthService,
        AuthGuard,
        ApiService, 
        GroupServiceService 
      ],
     
    bootstrap: [AppComponent]
})
export class AppModule { }