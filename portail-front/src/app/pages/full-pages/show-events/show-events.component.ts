import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api-service.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {
  events : any 
  constructor( private apiServices : ApiService) { }

  ngOnInit() {

    if ( localStorage.getItem('search') == 'true')
          { this.events = this.apiServices.searchedevents 
             localStorage.setItem('search','false')} 
    else { 
    this.apiServices.showEvents().subscribe (result => {
       console.log(result)
       this.events = result ;
     })
    }
}
Participate(id)
{
  
}


}