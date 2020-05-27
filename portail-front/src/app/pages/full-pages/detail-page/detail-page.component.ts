import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor( private route : ActivatedRoute) { }
  _id : string 

  ngOnInit() {
    // this._id = params.get('_id');
    this.route.paramMap.subscribe(params => {
      this._id = params.get('_id');
      console.log(this._id)
      // this.loadAEshopDetails()
  });
   
  }

}
