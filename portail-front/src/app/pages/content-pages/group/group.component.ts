import { Component, OnInit } from '@angular/core';
import { GroupServiceService } from 'app/services/group-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  
  items = ['Javascript', 'Typescript'];
  data : any
  form: FormGroup;

  constructor(private groupService : GroupServiceService ,
              private toastr : ToastsManager, 
<<<<<<< HEAD
              public fb: FormBuilder
=======
              public fb: FormBuilder,
              public router : Router
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
              ) {
                this.form = this.fb.group({
                  name: [''],
                  description : [''],
                  lieu : [''],
                  image: [null]

               })
              }

  ngOnInit() {
  }

public onAdd(item) {
    console.log('tag added: value is ' + item);
}

public onRemove(item) {
    console.log('tag removed: value is ' + item);
}

public onSelect(item) {
    console.log('tag selected: value is ' + item);
}
uploadFile(event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({
    image: file
  });
  this.form.get('image').updateValueAndValidity()
  console.log(this.form.get('image'))
}
submitForm(): void {
  
  var formData: any = new FormData();
  formData.append("name", this.form.get('name').value);
  formData.append("description", this.form.get('description').value);
  // formData.append("lieu", this.form.get('image').value);
  formData.append("image", this.form.get('image').value);
  console.log(formData.get('image'))
<<<<<<< HEAD
this.groupService.create(formData).subscribe(
  () => {
      this.toastr.success("sucess");
=======

  
this.groupService.create(formData).subscribe(
  () => {
      this.toastr.success("sucess");
      this.router.navigate(['/']);
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
  },
  (error) => {
      console.log(error);
      this.toastr.error('Erreur');
  }
);

// }

}
}
