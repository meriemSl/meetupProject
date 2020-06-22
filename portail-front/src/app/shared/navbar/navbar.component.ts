import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'app/api-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    connected:Boolean = false;
    // searchEvent = {
    //     query : ''
    // };
    searchQuery = {
           query : ''
          };
    constructor(public translate: TranslateService , 
                public apiService : ApiService  , 
                private  router : Router ) {
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
    searchEvent(value) {
        console.log("am here")
        localStorage.setItem('search','true')
        this.searchQuery.query = value ;
        console.log(this.searchQuery.query)
      
        this.apiService.searchEvent(this.searchQuery).subscribe(result => {
          console.log(result)
          this.apiService.searchedevents = result
        
      }) 
      this.router.navigate([`/eventList`])
         
        
    }
    logout(){
        // localStorage.setItem('token',null);
        localStorage.clear()
        console.log(localStorage)
    }
}
