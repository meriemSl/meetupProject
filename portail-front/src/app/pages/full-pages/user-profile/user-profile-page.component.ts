import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from 'app/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../../../backend/model/User.js';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss'],
    encapsulation: ViewEncapsulation.None,

    providers:[ApiService],

})

export class UserProfilePageComponent implements OnInit {

    //Variable Declaration
    currentPage: string = "About"
    //variable qui sert pour recuperer l'image du profil (Gooogle ou facebook) avec lequel le User a connecté
     image:any;
     name:any;
     userStored:any
     id:any;
     user:User;
     server:any;
     relativePath:any;
     path:any;
   
     constructor(public apiservice: ApiService ,private http: HttpClient, private router: Router, private route: ActivatedRoute, public fb: FormBuilder
        ) {}

    ngOnInit() {

        // Horizontal Timeline js for user timeline
        $.getScript('./assets/js/vertical-timeline.js');

        //recuperation des données enregistrés dans le LocalStorage lors de la connexion du User
        this.image=localStorage.getItem('image');
        this.name=localStorage.getItem('name');

         this.userStored = localStorage.getItem('user');
        console.log('retrievedObject: ', JSON.parse(this.userStored)._id);
        
        //oubien
        this.id=JSON.parse(this.userStored)._id;

        
        this.apiservice.getUser(this.id)
         .subscribe( data => {
          this.user= data;
          console.log(this.user)
          ;
        });

        this.server="http://localhost:3000/profileImage/"
       this.relativePath=JSON.parse(this.userStored).profileImage
       this.path=this.server+this.relativePath
 

       
    }

    showPage(page: string) {
        this.currentPage = page;
    }
}