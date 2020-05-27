import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import{ApiService} from '../../../api-service.service';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f') loginForm: NgForm;
    loginUserData = {}
    mdpinc: boolean=false;
    constructor(private router: Router,private apiService: ApiService,
        private route: ActivatedRoute) { }

    // On submit button click    
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

    loginUser(){
      this.apiService.loginUser(this.loginUserData)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.user))
            localStorage.setItem('token', res.token)
            this.router.navigate(['/pages/profile']);
  
          },
          err =>   this.mdpinc=true
       
        )
    
      console.log(this.loginUserData)
    }

    

}