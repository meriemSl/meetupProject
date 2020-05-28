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
  constructor (private groupService : GroupServiceService , private apiServices : ApiService ) {}
  ngOnInit()
  {
      this.groupService.showAllGroup().subscribe (result => {
              console.log(result)
              this.groups = result
          })
                 
      this.apiServices.showEvents().subscribe (result => {
            console.log(result)
             this.events = result ;
      })

      

    //   console.log(this.groupService.groups)
  }

}
