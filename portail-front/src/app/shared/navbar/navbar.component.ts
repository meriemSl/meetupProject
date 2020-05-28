import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    connected:Boolean = false;
    constructor(public translate: TranslateService) {
        if( localStorage.getItem('token') == null){
            this.connected = false;
        }
        else{
        this.connected = true; }
        console.log('this is connected ',this.connected)

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize'
    }
    logout(){
        localStorage.setItem('token',null);
        console.log(localStorage)
    }
}
