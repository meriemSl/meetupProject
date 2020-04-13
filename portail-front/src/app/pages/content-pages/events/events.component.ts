import { Component, OnInit, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from 'app/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {GroupComponent} from '../group/group.component'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  addEventData 
  title = 'fileUpload';
  images;
  formData = new FormData();
  form: FormGroup;
  ngOnInit(){}
  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute, 
              private http: HttpClient ,
              private element: ElementRef,
              public fb: FormBuilder
              ) { 
                this.form = this.fb.group({
                  title: [''],
                  description : [''],
                  lieu : [''],
                  imageUrl: [null]

               })
  
  }

  selectImage(event) {
   
      const file = (event.target as HTMLInputElement).files[0];
      
      // this.formData.append('imageUrl', event.target.files[0]);
      this.form.patchValue({
        imageUrl: file
      });
      this.form.get('imageUrl').updateValueAndValidity()
      console.log(this.form.get('imageUrl').value)

  }
    addEvent(){
    
          this.formData.append('title', this.addEventData.title);
          this.formData.append('description', this.addEventData.description);
          this.formData.append('dateDebut', this.addEventData.dateDebut);
          this.formData.append('dateFin', this.addEventData.dateFin);
          this.formData.append('lieu', this.addEventData.lieu);
          this.formData.append('imageUrl' , this.form.get('imageUrl').value );

       this.apiService.addEvent(this.formData).subscribe(
         res => {
         
          console.log(res)
           this.router.navigate(['/']);
         },
       
         err =>  {console.log(err)
          
         }
       )
      
       }
     
 

}