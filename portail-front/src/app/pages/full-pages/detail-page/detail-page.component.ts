import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupServiceService } from 'app/services/group-service.service';
import { ApiService } from 'app/api-service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor( private route : ActivatedRoute , private apiService : ApiService  , private groupService : GroupServiceService) { }
  _id : String 
   item : any = "";
  ngOnInit() {
    // this._id = params.get('_id');
    this.route.paramMap.subscribe(params => {
      this._id = params.get('id');
      
      // this.apiService.showEvent()
      this.groupService.showOneGroup(this._id).subscribe (result => {
        console.log(result)
         this.item  = result ;
  })
      // this.loadAEshopDetails()
  });
   
  }

}
