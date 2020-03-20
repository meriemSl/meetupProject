import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ApiService} from '../../../api-service.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import {  OnInit } from '@angular/core';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})


export class RegisterPageComponent  implements OnInit {
 
 
  private user: SocialUser;
  private loggedIn: boolean;
  registerUserData= {};
  msg:boolean = false;
 
  //Constructeur
  constructor(private apiService: ApiService,private router: Router,
      private route: ActivatedRoute,private authService: AuthService) { }



  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

 /*   @ViewChild('userData') registerForm: NgForm;*/

   
 
 
 //  Fonction pour enregistrer un nouveau User
    registerUser(){
      console.log(this.registerUserData)
       this.apiService.registerUser(this.registerUserData).subscribe(
         res => {
           console.log(res)
           localStorage.setItem('token', res.token)
           this.router.navigate(['/']);
         },
       
         err =>  {console.log(err)
           this.msg=true
         }
       )
       }


    //Fonction pour connecter un nouveau user avec son compte google
       signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
          (userData) => {
              console.log(userData);
              localStorage.setItem('image',userData.photoUrl);
              localStorage.setItem('name',userData.name);
      
            
              this.registerUserData['email']=userData.email;
              this.registerUserData['password']=userData.idToken;
              this.registerUserData['firstname']=userData.name;
                console.log(this.registerUserData)
         this.apiService.registerUser(this.registerUserData).subscribe(
            res => {
              console.log(res)
              localStorage.setItem('token', res.token)
           //   this.router.navigate(['/']);
              this.router.navigate(['/pages/profile']);
            },
            err => {console.log(err)
              this.msg=true; 
            }
          )


              })
          
      }
     

        //Fonction pour connecter un nouveau user avec son compte Facebook
      signInWithFB(): void {
       
       
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
          
          (userData) => {
         
 
               console.log(userData);
               
               localStorage.setItem('image',this.user.photoUrl);
               localStorage.setItem('name',this.user.name);

               this.registerUserData['email']=userData.email;
               this.registerUserData['password']=userData.id;
               this.registerUserData['firstname']=userData.name;
        
               this.apiService.registerUser(this.registerUserData).subscribe(
                   res => {
                      console.log(res)
                      localStorage.setItem('token', res.token)
                       this.router.navigate(['/pages/profile']);
                          },
                    err => {console.log(err)
                            this.msg=true; 
                           })     
                        })             
                        } 
     
      signOut(): void {
        this.authService.signOut();
      }
}