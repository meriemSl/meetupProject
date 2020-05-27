import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { GroupServiceService } from 'app/services/group-service.service';
import { ApiService } from 'app/api-service.service';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f

const now = new Date();
const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {
  groups : any  
  events : any 
<<<<<<< HEAD
  constructor (private groupService : GroupServiceService , private apiServices : ApiService ) {}
  ngOnInit()
  {
=======
  user : any
  constructor (private groupService : GroupServiceService , private apiServices : ApiService , private router : Router) {}
  ngOnInit()
  {  
    //  this.user = localStorage.getItem('user')
  let  retrievedObject = localStorage.getItem('user');
  console.log('retrievedObject: ', JSON.parse(retrievedObject)._id);
      
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
      this.groupService.showAllGroup().subscribe (result => {
              console.log(result)
              this.groups = result
          })
                 
      this.apiServices.showEvents().subscribe (result => {
            console.log(result)
             this.events = result ;
      })

<<<<<<< HEAD
      

    //   console.log(this.groupService.groups)
  }

=======
    //   console.log(this.groupService.groups)
  }

  seeDetail(id : string){
    this.router.navigate(['pages/detailPage/'+id]);
  }


>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
}
