import { Component, OnInit, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from 'app/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  addEventData= {};
  title = 'fileUpload';
  images;
  ngOnInit(){}
  constructor(private apiService: ApiService,private router: Router,private route: ActivatedRoute,  private http: HttpClient , private element: ElementRef,) { }

  selectImage(event) {
    // if (event.target.files.length > 0) {
    //   const imageUrl = event.target.files[0];

    //   this.images = imageUrl;
  // }
      const reader = new FileReader()
     
      reader.readAsDataURL(event.target.files[0]);
      this.images = event.target.files[0].name
      // formData.append('images', event.target.files[0]);
    
  }
    addEvent(){
      console.log(this.addEventData)
       this.apiService.addEvent(this.addEventData).subscribe(
         res => {
          const formData = new FormData();

          console.log(this.images)   
          formData.append('imageUrl', this.images);
           console.log(res)
           this.router.navigate(['/']);
         },
       
         err =>  {console.log(err)
          
         }
       )
      
       }
     
 

}