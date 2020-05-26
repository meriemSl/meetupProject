import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from 'app/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'C:/Users/hanedi/Desktop/projetfinal/meetupProject-master/backend/model/User.js';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers:[ApiService],

})
export class UpdateComponent implements OnInit {

  image:any;
  name:any;
  userStored:any
  id:any;
  user:User;
  selectedFile:File = null;
  fd = new FormData();
  form: FormGroup;
  formData = new FormData();

  server:any;
  relativePath:any;
  path:any;

  constructor(public apiservice: ApiService ,private http: HttpClient, private router: Router, private route: ActivatedRoute, public fb: FormBuilder
     ) {

      this.form = this.fb.group({
        
        profileImage: [null],

     })
     }


  ngOnInit() {





    this.image=localStorage.getItem('image');
    this.name=localStorage.getItem('name');

     this.userStored = localStorage.getItem('user');
    console.log('retrievedObject: ', JSON.parse(this.userStored)._id);
    
    //oubien
    this.id=JSON.parse(this.userStored)._id;
    

    

    
    this.apiservice.getUser(this.id)
     .subscribe( data => {
      this.user= data;
      console.log(this.user)
      ;
    });

    this.server="http://localhost:3000/profileImage/"
    this.relativePath=JSON.parse(this.userStored).profileImage
    this.path=this.server+this.relativePath
    

    
  }


  onSubmit(form : NgForm){
    
     this.apiservice.updateUser(form.value).subscribe((res)=>
     {this.router.navigate(['/pages/profile']);
       
       });
  
   }

   onFileSelected(event){
     console.log(event);
    const image = <File>event.target.files[0];
    this.selectedFile =image;
    console.log(this.selectedFile.name);
    console.log(this.path)
   
   }

   onUpload(){
    if(this.selectedFile){
      const formdata = new FormData()

      formdata .append('profileImage', this.selectedFile,this.selectedFile.name)


    console.log(formdata ); // dans le console ill y'a l'affichage de lobjet formdata

    return this.http.put<any>("http://localhost:3000/api2/updateimage/"+this.id, formdata).subscribe(
      res => {
      
       console.log(res);

       this.apiservice.getUser(this.id)
     .subscribe( data => {
      this.user= data;
      localStorage.setItem('user',JSON.stringify(this.user));
        this.userStored= localStorage.getItem('user');

        this.server="http://localhost:3000/profileImage/"
        this.relativePath=JSON.parse(this.userStored).profileImage
        this.path=this.server+this.relativePath
      console.log(this.user)
      ;
    });
        


      
        //this.router.navigate(['/pages/profile']);
      },
    
      err =>  {console.log(err)
       
      }
    )
      
  } else {
    alert('empty file')
  }

   }

  /* onUpload(){
    if(this.selectedFile){
      const formdata = new FormData()

      formdata .append('profileImage', this.selectedFile,this.selectedFile.name)


    console.log(formdata ); // dans le console ill y'a l'affichage de lobjet formdata

    return this.http.put<any>("http://localhost:3000/api2/updateimage/"+this.id, formdata)
    .pipe(
      tap(data => console.log(data)),
      map(data => data['originalname']))
      
  } else {
    alert('empty file')
  }

   }*/






  /* selectImage(event) {
   
    const file = (event.target as HTMLInputElement).files[0];
  
    // this.formData.append('imageUrl', event.target.files[0]);
    this.form.patchValue({
      profileImage : file
    });
    this.form.get('profileImage').updateValueAndValidity()
    console.log(this.form.get('ProfileImage').value)}

    addEvent(){
    
     
      this.formData.append('profileImage' , this.form.get('profileImage').value );

   this.apiservice. updateImage(this.formData).subscribe(
     res => {
     
      console.log(res)
       this.router.navigate(['/']);
     },
   
     err =>  {console.log(err)
      
     }
   )
  
   }*/


   

}
