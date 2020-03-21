import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit {

    //Variable Declaration
    currentPage: string = "About"
    //variable qui sert pour recuperer l'image du profil (Gooogle ou facebook) avec lequel le User a connecté
     image:any;
     name:any;
    ngOnInit() {
        // Horizontal Timeline js for user timeline
        $.getScript('./assets/js/vertical-timeline.js');

        //recuperation des données enregistrés dans le LocalStorage lors de la connexion du User
        this.image=localStorage.getItem('image');
        this.name=localStorage.getItem('name');

       
    }

    showPage(page: string) {
        this.currentPage = page;
    }
}